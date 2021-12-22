import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import mainContext from "../Contexts/mainContext";
export default function NavBar() {
  const { list } = useContext(mainContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Weather</Navbar.Brand>
        <br />
        <Navbar.Brand>{list}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
