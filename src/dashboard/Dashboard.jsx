import { useContext } from "react";
import { PostContext } from "../store/post-context";
import css from "./dashboard.module.css";
export default function Dashboard() {
  const { posts, loading } = useContext(PostContext);
  return (
    <>
      {!loading && (
        <div className={css.dashContainer}>
          <h1>Dashboard</h1>
          <div className={css.totalContainer}>
            <h2>Total Posts</h2>
            <h3>{posts.length}</h3>
          </div>
        </div>
      )}
    </>
  );
}
