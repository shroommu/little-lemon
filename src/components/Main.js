import styled from "styled-components";

const Container = styled.main`
  display: flex;
  height: calc(100vh - 300px);
`;

export default function Main({ children }) {
  return <Container>{children}</Container>;
}
