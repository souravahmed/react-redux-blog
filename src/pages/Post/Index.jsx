import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  fetchPosts,
  fetchPostsByUserId,
  fetchPostUsers,
} from "../../redux";
import DataTable from "../../components/DataTable";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import DataTableInstance from "../../uitils/DataTableUtils";
import LiveSearchDropDown from "../../components/LiveSearchDropDown";
import LinkButton from "../../components/LinkButton";
import ConfirmModal from "../../components/ConfirmModal";

const PostPage = () => {
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selecteUserId, setSelecteUserId] = useState(0);
  const [filterByUserQuery, setFilterByUserQuery] = useState("");
  const [deletedPostId, setDeletedPostId] = useState(0);

  const table = new DataTableInstance();
  table.headers = ["Id", "UserId", "Title", "Body"];
  table.showActionColumn = true;
  table.data.entityKeys = ["id", "userId", "title", "body"];
  table.actions = [];

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPostsByUserId(filterByUserQuery));
  }, [filterByUserQuery, dispatch]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterByUserPost = (obj) => {
    const userId = obj.value;
    const query = userId === 0 ? "" : `?userId=${userId}`;
    setSelecteUserId(userId);
    setFilterByUserQuery(query);
  };

  table.data.entities = postState?.posts?.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const onDeleteButtonPress = (e) => {
    const postId = e.target.attributes["table-data"].value;
    setDeletedPostId(postId);
  };

  table.actions.push(
    {
      actionClasses: "fa fa-eye",
      actionType: DataTableInstance.VIEW_ACTION,
    },
    {
      actionClasses: "fas fa-edit",
      actionType: DataTableInstance.EDIT_ACTION,
    },
    {
      actionClasses: "fas fa-trash-alt",
      actionType: DataTableInstance.DELETE_ACTION,
      actionHandaler: onDeleteButtonPress,
    }
  );

  const options = postState?.users?.map((user) => {
    return { label: user.name, value: user.id };
  });
  options?.unshift({ label: "Select a user", value: 0 });

  const onConfirmDelete = () => {
    dispatch(deletePost(deletedPostId));
  };
  return (
    <div className="card m-5">
      <div className="card-header">Total Posts: {postState?.posts?.length}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <Search handleSearch={handleSearch} />
          </div>
          <div className="col-md-3">
            <LiveSearchDropDown
              options={options}
              onChange={handleFilterByUserPost}
              selectedValue={selecteUserId}
            />
          </div>
          <div className="col-md-2">
            <LinkButton
              path="/posts/add"
              btnClasses="btn btn-md btn-success"
              text="Add"
              iconClass="fas fa-plus"
            ></LinkButton>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-5">
            <ConfirmModal
              message="Are you sure want to delete ?"
              modalTitle={`Delete Post Id: ${deletedPostId}`}
              leftButtonText="No"
              rightButtonText="Yes"
              confirmCallBackFun={onConfirmDelete}
            />
            {postState?.loading ? <Loader /> : <DataTable table={table} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
