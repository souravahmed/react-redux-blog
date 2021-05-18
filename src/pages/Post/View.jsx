import { React, useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../redux";
import LinkButton from "../../components/LinkButton";
import Comment from "../../parts/Comment/Index";

const View = () => {
  const state = useSelector((state) => state.post);
  const [showComment, setShowComment] = useState(false);
  const [showButtonText, setShowButtonText] = useState("Show comment");
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  const toggleComment = (e) => {
    e.preventDefault();
    setShowComment(!showComment);
    if (showComment) setShowButtonText("Show comment");
    else setShowButtonText("Hide comment");
  };

  return (
    <div className="card m-5">
      <div className="card-header">Post Details</div>
      <div className="card-body">
        {state?.loading ? (
          <Loader />
        ) : (
          <>
            <h5 className="card-title">{state?.post?.title}</h5>
            <p className="card-text">{state?.post?.body}</p>
            <LinkButton path="/posts" />
            <button className="btn btn-sm btn-info m-2" onClick={toggleComment}>
              {showButtonText}
            </button>
            {showComment === true && <Comment postId={postId} />}
          </>
        )}
      </div>
    </div>
  );
};

export default View;
