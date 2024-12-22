import { useContext } from "react";
import css from "./createMenu.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { PostContext } from "../store/post-context";
export default function MenuItems() {
  const { displayMenuFunc, postInput, addPosts } = useContext(PostContext);
  return (
    <>
      <div className={css.blur} onClick={() => displayMenuFunc("View")}></div>
      <div className={css.createContainer}>
        <IoCloseSharp
          onClick={() => displayMenuFunc("View")}
          className={css.close}
        />
        <h1>Create a new Post!</h1>
        <textarea
          ref={postInput}
          placeholder="What do you want to talk about?"
          maxLength={3000}
        />
        <button
          onClick={() => {
            addPosts();
            displayMenuFunc("View");
          }}
        >
          Publish
        </button>
      </div>
    </>
  );
}
