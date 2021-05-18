import axios from "./config";

const UserService = {
  getAllUser: async () => {
    try {
      const { data } = await axios.get("users");
      return data;
    } catch (error) {
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      const { data } = await axios.get(`users/${userId}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
