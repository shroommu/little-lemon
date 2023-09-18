import styled from "styled-components";
import { colors } from "../../constants";

export const Card = styled.section`
  background-color: ${(p) => p.background || colors.offWhite};
  padding: 32px 128px;
  width: 100%;
`;
