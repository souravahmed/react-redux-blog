import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux";
import DataTable from "../../components/Shared/DataTable";
import Search from "../../components/Shared/Search";
import Loader from "../../components/Shared/Loader";
import DataTableInstance from "../../uitils/DataTableUtils";

const PostContainer = () => {
  const state = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const table = new DataTableInstance();
  table.headers = ["Id", "UserId", "Title", "Body"];
  table.showActionColumn = true;
  table.data.entityKeys = ["id", "userId", "title", "body"];
  table.actions = [];

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSearch = (e) => {
    // search call-back
    setSearchQuery(e.target.value);
  };

  table.data.entities = state.posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  table.actions.push({
    actionClasses: "fa fa-eye",
    actionType: DataTableInstance.VIEW_ACTION,
  });

  return (
    <div className="card m-5">
      <div className="card-header">Total Posts: {state?.posts?.length}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5">
            {state?.loading ? <Loader /> : <DataTable table={table} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
