import { useReducer, useRef } from "react";
import { PostContext } from "./store/post-context";
import "./App.css";
import BodyItems from "./BodyItems";
function reduceHamburger(state, action) {
  return action.payload.new;
}
function reduceMenu(state, action) {
  if (action.type === "CHANGE") {
    return action.payload.displayMenu;
  }
}
function reducePosts(state, action) {
  if (action.type === "ADD") {
    state = [...state, { Value: action.payload.val }];
    return state;
  } else if (action.type === "DELETE") {
    return state.filter((_, idx) => idx !== action.payload.idx);
  }
}
export default function App() {
  const postInput = useRef("");
  const [displayMenu, dispatchDisplayMenu] = useReducer(
    reduceMenu,
    "DashBoard"
  );
  const [icon, dispatchIcon] = useReducer(reduceHamburger, "Hamburger");
  const [posts, disatchPosts] = useReducer(reducePosts, []);
  const addPosts = () => {
    disatchPosts({
      type: "ADD",
      payload: {
        val: postInput.current.value,
      },
    });
  };
  const deletePosts = (idx) => {
    disatchPosts({
      type: "DELETE",
      payload: {
        idx,
      },
    });
  };

  const displayMenuFunc = (i) => {
    dispatchDisplayMenu({
      type: "CHANGE",
      payload: { displayMenu: i },
    });
  };
  const longShort = () => {
    icon === "Hamburger"
      ? dispatchIcon({
          type: "Shorten",
          payload: {
            new: "Cross",
          },
        })
      : dispatchIcon({
          type: "Widen",
          payload: {
            new: "Hamburger",
          },
        });
  };
  return (
    <PostContext.Provider
      value={{
        icon,
        longShort,
        displayMenu,
        displayMenuFunc,
        postInput,
        posts,
        addPosts,
        deletePosts,
      }}
    >
      <BodyItems />
    </PostContext.Provider>
  );
}
