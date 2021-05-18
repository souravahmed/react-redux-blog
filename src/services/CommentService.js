import axios from "./config";
const CommentService = {
  getCommentsByPostId: async (postId) => {
    try {
      const { data } = await axios.get(`/comments?postId=${postId}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default CommentService;
