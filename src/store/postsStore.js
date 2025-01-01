import { createStore } from "redux";

let INITIAL_VAL = {
  posts: [],
  icon: "Hamburger",
};

const postReducer = (state = INITIAL_VAL, action) => {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [
        {
          Body: action.payload.body,
          Title: action.payload.title,
          Tags: action.payload.tags,
        },
        ...state.posts,
      ],
    };
  } else if (action.type === "DELETE_POST") {
    return {
      ...state,
      posts: state.posts.filter((_, idx) => idx !== action.payload.idx),
    };
  } else if (action.type === "Widen" || action.type === "Shorten") {
    return { ...state, icon: action.payload.new };
  }
  return state;
};

const PostStore = createStore(postReducer);

export default PostStore;
