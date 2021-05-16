import { React, useEffect } from "react";
import Loader from "../../components/Shared/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsByPostId } from "../../redux";

const Comments = ({ postId }) => {
  const state = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByPostId(postId));
  }, [dispatch, postId]);
  return (
    <>
      {state.loading ? (
        <Loader />
      ) : (
        state?.commentsByPostId.map((comment) => (
          <div className="card m-2" key={comment?.id}>
            <h5 className="card-title p-2">{comment?.name}</h5>
            <h6 className="card-subtitle p-2">{comment?.email}</h6>
            <div className="card-body">{comment?.body}</div>
          </div>
        ))
      )}
    </>
  );
};

export default Comments;
