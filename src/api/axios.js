import Axios from "axios";

const api = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default api;
