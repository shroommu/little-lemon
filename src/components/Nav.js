import styled from "styled-components";

const NavItem = styled.li`
  list-style-type: none;
`;

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Menu</NavItem>
        <NavItem>Reservations</NavItem>
        <NavItem>Order Online</NavItem>
        <NavItem>Login</NavItem>
      </ul>
    </nav>
  );
}
