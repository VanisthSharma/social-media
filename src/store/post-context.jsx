import { useReducer, useRef, useEffect, useCallback } from "react";
import { createContext } from "react";
export const PostContext = createContext([]);
const reduceHamburger = (_, action) => {
  return action.payload.new;
};

const reducePosts = (state, action) => {
  if (action.type === "ADD") {
    state = [
      {
        Body: action.payload.body,
        Title: action.payload.title,
        Tags: action.payload.tags,
      },
      ...state,
    ];
    return state;
  } else if (action.type === "DELETE") {
    return state.filter((_, idx) => idx !== action.payload.idx);
  }
};
//eslint-disable-next-line react/prop-types
export function PostContextProvider({ children }) {
  const titleInp = useRef("");
  const postInput = useRef("");
  const tagsInp = useRef("");
  const [icon, dispatchIcon] = useReducer(
    reduceHamburger,
    window.innerWidth <= 425 ? "Cross" : "Hamburger"
  );
  const [posts, disatchPosts] = useReducer(reducePosts, []);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((res) => {
        res.posts.map((post) => {
          disatchPosts({
            type: "ADD",
            payload: { body: post.body, title: post.title, tags: post.tags },
          });
        });
      });
    return () => controller.abort();
  }, []);
  const addPosts = useCallback(() => {
    disatchPosts({
      type: "ADD",
      payload: {
        body: postInput.current.value,
        title: titleInp.current.value,
        tags: tagsInp.current.value.trim().split(" "),
      },
    });
  }, [disatchPosts]);
  const deletePosts = useCallback(
    (idx) => {
      disatchPosts({
        type: "DELETE",
        payload: {
          idx,
        },
      });
    },
    [disatchPosts]
  );

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
        postInput,
        posts,
        addPosts,
        deletePosts,
        titleInp,
        tagsInp,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
