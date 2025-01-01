import { useSelector } from "react-redux";
import css from "./dashboard.module.css";
export default function Dashboard() {
  const posts = useSelector((store) => store.posts);
  return (
    <div className={css.dashContainer}>
      <h1>Dashboard</h1>
      <div className={css.totalContainer}>
        <h2>Total Posts</h2>
        <h3>{posts.length && posts.length}</h3>
      </div>
    </div>
  );
}
