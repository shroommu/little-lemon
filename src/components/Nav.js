import styled from "styled-components";
import { colors, locationsWithLabels } from "../constants";
import { Link } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  ${(p) => p.navStyle !== "footer" && "flex: 3;"}
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${(p) => p.navStyle === "footer" && `flex-direction: column;`}
`;

const NavItem = styled.li`
  padding: ${(p) => (p.navStyle === "footer" ? "0" : "12px")};
  list-style-type: none;
  font-family: Markazi;
  font-size: ${(p) => (p.navStyle === "footer" ? "24px" : "40px")};
  color: ${colors.offWhite};

  &:hover {
    background-color: ${colors.lightGreen};
  }

  &:active {
    background-color: ${colors.darkerGreen};
  }
`;

const navItems = [
  locationsWithLabels.HOME,
  locationsWithLabels.ABOUT,
  locationsWithLabels.MENU,
  locationsWithLabels.ORDER,
  locationsWithLabels.RESERVE,
  locationsWithLabels.LOGIN,
];

export default function Nav({ navStyle }) {
  return (
    <Container navStyle={navStyle}>
      <NavList navStyle={navStyle}>
        {navItems.map((navItem) => {
          return (
            <Link to={navItem.path} key={navItem.label}>
              <NavItem navStyle={navStyle}>{navItem.label}</NavItem>
            </Link>
          );
        })}
      </NavList>
    </Container>
  );
}
