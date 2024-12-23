import { useContext } from "react";
import { PostContext } from "../store/post-context";
import { MdDelete } from "react-icons/md";
import css from "./viewMenu.module.css";

export default function ViewMenu() {
  const { posts, deletePosts } = useContext(PostContext);

  return (
    <div className={css.viewContainer}>
      <h1>Posts</h1>
      <div className={css.postsHolder}>
        {posts.map((item, idx) => (
          <div key={idx} className={css.postContainer}>
            <h2>{item.Title}</h2>
            <p>{item.Body?.length > 0 ? item.Body : "Skipped typing day"}</p>
            <div className={css.tagHolder}>
              {item.Tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <button onClick={() => deletePosts(idx)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
