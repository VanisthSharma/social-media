import css from "./sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineEye } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function Sidebar() {
  const dispatchIcon = useDispatch();
  const icon = useSelector((store) => store.icon);
  const longShort = () => {
    icon === "Hamburger"
      ? dispatchIcon({
          type: "Shorten",
          payload: {
            new: "Cross",
          },
        })
      : dispatchIcon({
          type: "Widen",
          payload: {
            new: "Hamburger",
          },
        });
  };

  return (
    <div
      className={`${css.mainContainer} ${
        icon === "Hamburger" ? css.long : css.short
      }`}
    >
      {window.innerWidth <= 425 ? null : icon === "Hamburger" ? (
        <IoCloseSharp className={css.icon} onClick={longShort} />
      ) : (
        <GiHamburgerMenu className={css.icon} onClick={longShort} />
      )}

      {icon === "Hamburger" ? (
        <Link to="/dashboard" className={css.h2}>
          DashBoard
        </Link>
      ) : (
        <Link to="/dashboard" className={css.h2}>
          <MdSpaceDashboard />
        </Link>
      )}

      {icon === "Hamburger" ? (
        <Link to="/posts" className={css.h2}>
          View Posts
        </Link>
      ) : (
        <Link to="/posts" className={css.h2}>
          <HiOutlineEye />
        </Link>
      )}

      {icon === "Hamburger" ? (
        <Link to="/create" className={css.create}>
          Create Post
        </Link>
      ) : (
        <Link to="/create" className={css.create}>
          <IoMdAdd />
        </Link>
      )}
    </div>
  );
}
