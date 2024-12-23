import { useReducer, useRef, useEffect } from "react";
import { createContext } from "react";
export const PostContext = createContext([]);
function reduceHamburger(_, action) {
  return action.payload.new;
}
function reduceMenu(_, action) {
  if (action.type === "CHANGE") {
    return action.payload.displayMenu;
  }
}
function reducePosts(state, action) {
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
}
//eslint-disable-next-line react/prop-types
export function PostContextProvider({ children }) {
  const titleInp = useRef("");
  const postInput = useRef("");
  const tagsInp = useRef("");
  const [displayMenu, dispatchDisplayMenu] = useReducer(reduceMenu, "View");
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
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      });
    return () => controller.abort();
  }, []);
  const addPosts = () => {
    disatchPosts({
      type: "ADD",
      payload: {
        body: postInput.current.value,
        title: titleInp.current.value,
        tags: tagsInp.current.value.trim().split(" "),
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
        titleInp,
        tagsInp,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
