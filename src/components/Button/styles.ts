import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";

import { ButtonProps } from ".";

export const ButtonComponent = styled.div<ButtonProps>`
 display: flex;
 background-color: var(--mars);
 width: ${({fullWidth}) => (fullWidth ? "100%" : pixelToRem(416))};
 height: ${pixelToRem(62)};
 border-radius: ${pixelToRem(6)};
 border: none;
 align-items: center;
 justify-content: center;
 color: var(--text);
 font-size: ${pixelToRem(18)};
 font-family: "Heebo" sans-serif;
 font-weight: 700;
 line-height: ${pixelToRem(26)};
 cursor: pointer;
`;
