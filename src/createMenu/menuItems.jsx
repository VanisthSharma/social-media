import { useContext, useCallback } from "react";
import css from "./createMenu.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { PostContext } from "../store/post-context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function MenuItems() {
  const { postInput, tagsInp, titleInp } = useContext(PostContext);
  const dispatchPosts = useDispatch();

  const addPosts = useCallback(() => {
    dispatchPosts({
      type: "ADD_POST",
      payload: {
        body: postInput.current.value,
        title: titleInp.current.value,
        tags: tagsInp.current.value.trim().split(" "),
      },
    });
  }, [dispatchPosts, postInput, tagsInp, titleInp]);

  return (
    <>
      <div className={css.blur}>
        <Link to="/posts"></Link>
      </div>
      <div className={css.createContainer}>
        <Link to="/posts">
          <IoCloseSharp className={css.close} />
        </Link>
        <h1>Create a new Post!</h1>
        <input type="text" maxLength={50} ref={titleInp} placeholder="Title" />
        <textarea
          ref={postInput}
          placeholder="What do you want to talk about?"
          maxLength={500}
        />
        <input type="text" maxLength={50} placeholder="Tags" ref={tagsInp} />
        <button
          onClick={() => {
            addPosts();
          }}
        >
          <Link to="/posts">Publish</Link>
        </button>
      </div>
    </>
  );
}
