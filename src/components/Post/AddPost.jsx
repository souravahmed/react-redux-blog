import { React, useEffect, useState } from "react";
import LinkButton from "../Shared/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux";
import Loader from "../Shared/Loader";
import LiveSearchDropDown from "../Shared/LiveSearchDropDown";

const AddPost = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState(0);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const options = userState?.users?.map((user) => {
    return { label: user.name, value: user.id };
  });
  options.unshift({ label: "Select a user", value: 0 });

  const handleOnChange = (obj) => {
    setSelectedUserId(obj.value);
  };

  return (
    <div className="card m-5">
      <div className="card-header">Create post</div>
      <div className="card-body">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            {userState?.loading ? (
              <Loader />
            ) : (
              <form>
                <div className="form-floating mb-3 row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="post title"
                  />
                  <label>Title</label>
                </div>
                <div className="form-floating mb-3 row">
                  <textarea
                    className="form-control"
                    placeholder="body"
                    style={{ height: "100px" }}
                  />
                  <label>Body</label>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-8">
                    <LiveSearchDropDown
                      options={options}
                      onChange={handleOnChange}
                      selectedValue={selectedUserId}
                    />
                  </div>
                </div>
                <div className="form-floating mb-3 row"></div>
                <div className="row">
                  <div className="col-md-2">
                    <LinkButton
                      path="/posts"
                      btnClasses="btn btn-md btn-primary"
                    />
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-secondary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
