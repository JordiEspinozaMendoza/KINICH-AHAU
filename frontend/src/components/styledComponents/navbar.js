import styled from "styled-components";
import { Navbar } from "react-bootstrap";
export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbar.backgroundColor};
  .navbar-brand {
    color: ${(props) => props.theme.navbar.color};
    font-weight: bold;
  }
`;
