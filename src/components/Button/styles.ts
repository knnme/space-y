import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";

import { ButtonProps } from ".";

export const ButtonComponent = styled.button<ButtonProps>`
 background-color: var(--mars);
 width: ${({ fullWidth }) => (fullWidth ? "100%" : pixelToRem(264))};
 height: ${pixelToRem(62)};
 border-radius: ${pixelToRem(6)};
 border: none;
 color: var(--text);
 font-size: ${pixelToRem(18)};
 font-family: "Heebo" sans-serif;
 font-weight: 700;
 font-size: ${pixelToRem(18)};
 line-height: ${pixelToRem(26)};

 &:hover {
  background-color: var(--mars-dark);
 }
`;
