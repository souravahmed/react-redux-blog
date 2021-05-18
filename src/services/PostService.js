import axios from "./config";
import UserService from "./UserService";

const PostService = {
  getAllPost: async () => {
    try {
      const { data } = await axios.get("posts");
      return data;
    } catch (error) {
      throw error;
    }
  },

  getAllPostByQuery: async (query) => {
    try {
      const { data } = await axios.get(`posts${query}`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  getPost: async (postId) => {
    try {
      const { data } = await axios.get(`posts/${postId}`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const data = await UserService.getAllUser();
      return data;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (postData) => {
    try {
      const { data } = await axios.post("posts", JSON.stringify(postData));
      return data;
    } catch (error) {
      throw error;
    }
  },
  updatePost: async (postId, postData) => {
    try {
      const { data } = await axios.put(
        `posts/${postId}`,
        JSON.stringify(postData)
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  deletePost: async (postId) => {
    try {
      await axios.delete(`posts/${postId}`); // response data don't have any value
    } catch (error) {
      throw error;
    }
  },
};

export default PostService;
