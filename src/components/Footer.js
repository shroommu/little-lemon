import styled from "styled-components";

import Nav from "./Nav";

import Logo from "../assets/icons/Logo.svg";

import { colors, locations } from "../constants";
import { Link } from "react-router-dom";

const Container = styled.footer`
  display: flex;
  padding: 24px 36px;
  height: 300px;
  background-color: ${colors.darkGreen};
  justify-content: center;
`;

const LogoContainer = styled.div`
  background-color: ${colors.offWhite};
  padding: 12px;
  margin: auto 0;
`;

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Link to={locations.HOME}>
          <img src={Logo} alt="logo of little lemon restaurant" width={300} />
        </Link>
      </LogoContainer>
      <Nav navStyle="footer" />
    </Container>
  );
}
