import CreateMenu from "./createMenu/createMenu";
import Sidebar from "./sidebar/sidebar";
import Container from "./Container";
import Notification from "./notification/notify";
export default function BodyItems() {
  return (
    <Container>
      <Sidebar />
      <CreateMenu />
      <Notification />
    </Container>
  );
}
