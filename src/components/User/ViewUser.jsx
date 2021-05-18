import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux";
import Loader from "../Shared/Loader";
import LinkButton from "../Shared/LinkButton";

const ViewUser = () => {
  const { userId } = useParams();
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <div className="card m-5">
      <div className="card-header">User Details</div>
      <div className="card-body">
        {state.loading ? (
          <Loader />
        ) : (
          <div className="col-md-8">
            <h5 className="card-title">{state.user?.name}</h5>
            <address>
              <i className="fas fa-envelope-square"></i> {state.user?.email}{" "}
              <br />
              <i className="fas fa-phone"></i> {state.user?.phone} <br />
              <i className="fas fa-map-marker-alt"></i>{" "}
              {state.user?.address?.suite},{state.user?.address?.street},{" "}
              {state.user?.address?.city} <br />
              <i className="fas fa-globe"></i> {state.user?.website} <br />
              <i className="far fa-building"></i> {state.user?.company?.name}
            </address>
            <LinkButton path="/users" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewUser;
