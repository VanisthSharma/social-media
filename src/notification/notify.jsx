import css from "./notify.module.css";
import { useContext, useState, useEffect } from "react";
import { PostContext } from "../store/post-context";

export default function Notification() {
  const { posts } = useContext(PostContext);
  const [className, setClassName] = useState("");
  const [className2, setClassName2] = useState("");

  useEffect(() => {
    setClassName(css.notifyContainer);
    setClassName2(css.greenbar);

    if (posts.length > 0) {
      setClassName(`${css.notifyContainer} ${css.AniNotif}`);
      setClassName2(`${css.greenbar} ${css.Anigreenbar}`);

      const timer = setTimeout(() => {
        setClassName(css.notifyContainer);
        setClassName2(css.greenbar);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [posts.length]);

  return (
    <div className={className}>
      <h2>Post added successfully!</h2>
      <div className={className2}></div>
    </div>
  );
}
