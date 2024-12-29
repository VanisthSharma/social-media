import { PostContextProvider } from "./store/post-context";
import "./App.css";
import BodyItems from "./BodyItems";
import Sidebar from "./sidebar/sidebar";
export default function App() {
  return (
    <PostContextProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <BodyItems />
      </div>
    </PostContextProvider>
  );
}
