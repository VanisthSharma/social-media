import { useRef, useEffect } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";

export const PostContext = createContext([]);

//eslint-disable-next-line react/prop-types
export function PostContextProvider({ children }) {
  const titleInp = useRef("");
  const postInput = useRef("");
  const tagsInp = useRef("");

  const dispatchPosts = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((res) => {
        res.posts.map((post) => {
          dispatchPosts({
            type: "ADD_POST",
            payload: { body: post.body, title: post.title, tags: post.tags },
          });
        });
      });
    return () => controller.abort();
  }, [dispatchPosts]);

  return (
    <PostContext.Provider
      value={{
        postInput,
        titleInp,
        tagsInp,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
