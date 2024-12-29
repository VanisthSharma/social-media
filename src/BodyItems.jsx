import { Outlet } from "react-router-dom";
import Container from "./Container";
export default function BodyItems() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
