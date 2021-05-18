import { React, useEffect } from "react";
import LinkButton from "../Shared/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { createPost, editPost, fetchPost, fetchPostUsers } from "../../redux";
import Loader from "../Shared/Loader";
import { useForm, Controller } from "react-hook-form";
import postSchema from "../../uitils/PostSchemaUtils";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import MessageTypeUtils from "../../uitils/MessageTypeUtils";
import AlertMessage from "../Shared/AlertMessage";
import { useParams } from "react-router-dom";

const AddEditPost = () => {
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { postId } = useParams();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  useEffect(() => {
    const getPost = async () => {
      if (postId !== undefined) {
        const postData = await fetchPost(postId)(dispatch);
        const users = await fetchPostUsers()(dispatch);
        const selectedUserOption = users.filter(
          (user) => user.id === postData?.userId
        );

        const option = selectedUserOption.map((user) => ({
          label: user.name,
          value: user.id,
        }));

        const data = {
          ...postData,
          userId: option,
        };
        reset(data);
      }
    };
    getPost();
  }, [postId, reset, dispatch]);

  const options = postState?.users?.map((user) => {
    return { label: user.name, value: user.id };
  });
  options?.unshift({ label: "Select a user", value: "" });

  const handleOnSubmit = (data, e) => {
    const postData = {
      ...data,
      userId: data.userId.value,
    };
    if (postId) dispatch(editPost(postId, postData));
    else {
      dispatch(createPost(postData));
      reset();
    }
    e.target.reset();
  };

  return (
    <div className="card m-5">
      <div className="card-header">{postId ? "Edit Post" : "Create Post"}</div>
      <div className="card-body">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            {postState?.loading ? (
              <Loader />
            ) : (
              <>
                {isSubmitSuccessful && (
                  <AlertMessage
                    message={
                      postId && postState?.error === ""
                        ? "Post updated successfully"
                        : postState?.error === "" && "Post created successfully"
                    }
                    messageType={
                      postState?.error === ""
                        ? MessageTypeUtils.SUCCESS
                        : MessageTypeUtils.FAILED
                    }
                  />
                )}
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                  <div className="form-floating mb-3 row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="post title"
                      {...register("title")}
                    />
                    <label>Title</label>
                    {errors.title && (
                      <div className="text-danger">{errors.title.message}</div>
                    )}
                  </div>
                  <div className="form-floating mb-3 row">
                    <textarea
                      className="form-control"
                      placeholder="body"
                      style={{ height: "100px" }}
                      {...register("body")}
                    />
                    <label>Body</label>
                    {errors.body && (
                      <div className="text-danger">{errors.body.message}</div>
                    )}
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-8">
                      <Controller
                        name="userId"
                        control={control}
                        render={({ field }) => (
                          <Select {...field} options={options} />
                        )}
                      />
                      {errors.userId?.value && (
                        <div className="text-danger">
                          {errors.userId.value.message}
                        </div>
                      )}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditPost;
