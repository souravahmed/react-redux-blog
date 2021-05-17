import { React, useEffect } from "react";
import LinkButton from "../Shared/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { createPost, fetchUsers } from "../../redux";
import Loader from "../Shared/Loader";
import { useForm, Controller } from "react-hook-form";
import postSchema from "../../uitils/PostSchemaUtils";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import MessageTypeUtils from "../../uitils/MessageTypeUtils";
import AlertMessage from "../Shared/AlertMessage";

const AddPost = () => {
  const userState = useSelector((state) => state.user);
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();

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
    dispatch(fetchUsers());
  }, [dispatch]);

  const options = userState?.users?.map((user) => {
    return { label: user.name, value: user.id };
  });
  options.unshift({ label: "Select a user", value: "" });

  const handleOnSubmit = (data, e) => {
    const postData = {
      ...data,
      userId: data.userId.value,
    };
    dispatch(createPost(postData));
    e.target.reset();
    reset();
  };

  return (
    <div className="card m-5">
      <div className="card-header">Create post</div>
      <div className="card-body">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            {userState?.loading || postState?.loading ? (
              <Loader />
            ) : (
              <>
                {isSubmitSuccessful && (
                  <AlertMessage
                    message={"Post create successfully"}
                    messageType={MessageTypeUtils.SUCCESS}
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

export default AddPost;
