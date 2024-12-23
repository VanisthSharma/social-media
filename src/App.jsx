import { PostContextProvider } from "./store/post-context";
import "./App.css";
import BodyItems from "./BodyItems";

export default function App() {
  return (
    <PostContextProvider>
      <BodyItems />
    </PostContextProvider>
  );
}
