import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchPostsByUserId, fetchUsers } from "../../redux";
import DataTable from "../../components/Shared/DataTable";
import Search from "../../components/Shared/Search";
import Loader from "../../components/Shared/Loader";
import DataTableInstance from "../../uitils/DataTableUtils";
import SelectDropDown from "../../components/Shared/SelectDropDown";

const PostContainer = () => {
  const postState = useSelector((state) => state.post);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selecteUserId, setSelecteUserId] = useState("0");
  const [filterByUserQuery, setFilterByUserQuery] = useState("posts");

  const table = new DataTableInstance();
  table.headers = ["Id", "UserId", "Title", "Body"];
  table.showActionColumn = true;
  table.data.entityKeys = ["id", "userId", "title", "body"];
  table.actions = [];

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    console.log(userState);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPostsByUserId(filterByUserQuery));
  }, [filterByUserQuery, dispatch]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterByUserPost = (e) => {
    const userId = e.target.value;
    const query = userId === "0" ? "posts" : `posts?userId=${userId}`;
    setSelecteUserId(userId);
    setFilterByUserQuery(query);
  };

  table.data.entities = postState?.posts?.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  table.actions.push({
    actionClasses: "fa fa-eye",
    actionType: DataTableInstance.VIEW_ACTION,
  });

  return (
    <div className="card m-5">
      <div className="card-header">Total Posts: {postState?.posts?.length}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <Search handleSearch={handleSearch} />
          </div>
          <div className="col-md-3">
            <SelectDropDown
              handleOnSelect={handleFilterByUserPost}
              options={userState?.users}
              selectedValue={selecteUserId}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5">
            {postState?.loading ? <Loader /> : <DataTable table={table} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
