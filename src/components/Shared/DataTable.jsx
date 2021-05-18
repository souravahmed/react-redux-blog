import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DataTableInstance from "../../uitils/DataTableUtils";

const DataTable = ({ table }) => {
  const location = useLocation();
  return (
    <div className="scrollbar">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            {table.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {table.showActionColumn ? <th>Action</th> : ""}
          </tr>
        </thead>
        <tbody>
          {table.data?.entities?.map((eachData) => (
            <tr key={eachData?.id}>
              {table.data?.entityKeys?.map((property, index) => (
                <td key={index}>{eachData[property]}</td>
              ))}
              <td>
                {table.actions.map((action, index) => {
                  return action.actionType ===
                    DataTableInstance.DELETE_ACTION ? (
                    <button
                      className="btn-border-less"
                      data-bs-toggle="modal"
                      data-bs-target="#targetModal"
                      key={index}
                    >
                      <i
                        table-data={eachData.id}
                        onClick={action.actionHandaler}
                        className={action.actionClasses}
                        aria-hidden="true"
                      ></i>
                    </button>
                  ) : (
                    <NavLink
                      to={
                        action.actionType === DataTableInstance.VIEW_ACTION
                          ? `${location.pathname}/${eachData.id}`
                          : `${location.pathname}/${eachData.id}/edit`
                      }
                      key={index}
                    >
                      <i
                        className={action.actionClasses}
                        aria-hidden="true"
                      ></i>
                    </NavLink>
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

DataTable.propTypes = {
  table: PropTypes.instanceOf(DataTableInstance).isRequired,
};
