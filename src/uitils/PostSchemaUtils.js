import * as yup from "yup";

const PostSchemaUtils = yup.object().shape({
  title: yup.string().required("Please enter title"),
  body: yup.string().required("Please enter body"),
  userId: yup.object().shape({
    label: yup.string(),
    value: yup.string().required("Please select a user"),
  }),
});

export default PostSchemaUtils;
