import { useContext } from "react";
import { PostContext } from "../store/post-context";
import css from "./viewMenu.module.css";
export default function ViewMenu() {
  const { posts, deletePosts } = useContext(PostContext);
  return (
    <div className={css.viewContainer}>
      <h1>Your Posts</h1>
      <div className={css.postsHolder}>
        {posts.map((item, idx) => (
          <div key={idx} className={css.postContainer}>
            <p>
              {item.Value.length >= 1 ? item.Value : "Bro skipped typing day"}
            </p>
            <button onClick={() => deletePosts(idx)}>Delete Post</button>
          </div>
        ))}
      </div>
    </div>
  );
}
