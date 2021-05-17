import * as yup from "yup";

const PostSchemaUtils = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  userId: yup.object().shape({
    label: yup.string(),
    value: yup.string().required("Select a user"),
  }),
});

export default PostSchemaUtils;
