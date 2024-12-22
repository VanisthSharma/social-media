import css from "./sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineEye } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { useContext } from "react";
import { PostContext } from "../store/post-context";
export default function Sidebar() {
  const { displayMenuFunc } = useContext(PostContext);
  const { icon, longShort } = useContext(PostContext);
  return (
    <div
      className={`${css.mainContainer} ${
        icon === "Hamburger" ? css.long : css.short
      }`}
    >
      {icon === "Hamburger" ? (
        <IoCloseSharp className={css.icon} onClick={longShort} />
      ) : (
        <GiHamburgerMenu className={css.icon} onClick={longShort} />
      )}

      {icon === "Hamburger" ? (
        <h2 onClick={() => displayMenuFunc("DashBoard")} className={css.h2}>
          DashBoard
        </h2>
      ) : (
        <h2 onClick={() => displayMenuFunc("DashBoard")} className={css.h2}>
          <MdSpaceDashboard />
        </h2>
      )}

      {icon === "Hamburger" ? (
        <h2 onClick={() => displayMenuFunc("View")} className={css.h2}>
          View Posts
        </h2>
      ) : (
        <h2 onClick={() => displayMenuFunc("View")} className={css.h2}>
          <HiOutlineEye />
        </h2>
      )}

      {icon === "Hamburger" ? (
        <h2 onClick={() => displayMenuFunc("Create")} className={css.create}>
          Create Post
        </h2>
      ) : (
        <h2 onClick={() => displayMenuFunc("Create")} className={css.create}>
          <IoMdAdd />
        </h2>
      )}
    </div>
  );
}
