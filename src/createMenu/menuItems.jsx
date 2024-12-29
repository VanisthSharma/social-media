import { useContext } from "react";
import css from "./createMenu.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { PostContext } from "../store/post-context";
import { Link } from "react-router-dom";
export default function MenuItems() {
  const { postInput, addPosts, tagsInp, titleInp } = useContext(PostContext);
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
