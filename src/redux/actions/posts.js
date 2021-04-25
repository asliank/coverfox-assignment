import { GET_POSTS } from "./constants";
import { GET_POSTS_API } from "../../api";

export const getPosts = () => {
  return (dispatch) => {
    GET_POSTS_API().then((res) => {
      return dispatch({ type: GET_POSTS, data: res.data });
    });
  };
};
