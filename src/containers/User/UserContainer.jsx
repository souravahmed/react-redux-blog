import { React, useEffect, useState } from "react";
import { fetchUsers } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Shared/Loader";
import DataTableInstance from "../../uitils/DataTableUtils";
import Search from "../../components/Shared/Search";
import DataTable from "../../components/Shared/DataTable";

const UserContainer = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const table = new DataTableInstance();
  table.headers = ["Id", "Name", "Email", "Phone Number"];
  table.showActionColumn = true;
  table.data.entityKeys = ["id", "name", "email", "phone"];
  table.actions = [];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  table.data.entities = state.users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });

  table.actions.push({
    actionClasses: "fa fa-eye",
    actionType: DataTableInstance.VIEW_ACTION,
  });

  return (
    <div className="card m-5">
      <div className="card-header">Total user: {state.users.length}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5">
            {state.loading ? <Loader /> : <DataTable table={table} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
