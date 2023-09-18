import styled from "styled-components";

import Nav from "./Nav";

import Logo from "../assets/icons/Logo.svg";

import { colors, locations } from "../constants";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  padding: 24px 36px;
  height: 150px;
  background-color: ${colors.darkGreen};
`;

const LogoContainer = styled.div`
  flex: 1;
  background-color: ${colors.offWhite};
  padding: 12px;
  margin: auto;
`;

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Link to={locations.HOME}>
          <img src={Logo} alt="logo of little lemon restaurant" width={300} />
        </Link>
      </LogoContainer>
      <Nav />
    </Container>
  );
}
