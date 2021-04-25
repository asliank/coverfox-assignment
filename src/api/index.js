import axios from "axios";

export const GET_POSTS_API = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};