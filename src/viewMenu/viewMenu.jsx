import { useCallback } from "react";
import { MdDelete } from "react-icons/md";
import css from "./viewMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
export default function ViewMenu() {
  const dispatchPosts = useDispatch();

  const posts = useSelector((store) => store.posts);

  const deletePosts = useCallback(
    (idx) => {
      dispatchPosts({
        type: "DELETE_POST",
        payload: {
          idx,
        },
      });
    },
    [dispatchPosts]
  );
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
