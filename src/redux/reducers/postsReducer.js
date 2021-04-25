import { GET_POSTS } from "../actions/constants";

const initialState = {
  postList: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, postList: action.data };
    default:
      return state;
  }
};
export default postsReducer;
