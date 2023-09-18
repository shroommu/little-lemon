import styled from "styled-components";
import { colors } from "../constants";

export const Button = styled.button`
  all: unset;
  background-color: ${(p) => p.background || colors.lemonYellow};
  padding: 12px;
  display: flex;
  border-radius: 24px;
  font-family: Karla;
  margin: ${(p) => p.margin};

  &:hover {
    background-color: ${(p) => p.hover || colors.lightLemonYellow};
  }

  &:active {
    background-color: ${(p) => p.active || colors.darkLemonYellow};
  }
`;
