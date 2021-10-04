import { Nav, Container } from "react-bootstrap";
import { StyledNavbar as Navbar } from "./styledComponents";
import { FormCheck } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        collapseOnSelect
        style={{
          boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Container>
          <Navbar.Brand className="navbar-brand" href="/" translate="no">
            KINICH-AHAU
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
