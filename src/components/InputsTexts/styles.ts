import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";


export const InputTextComponent = styled.p`
    color: var(--text);
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(24)};
    margin-bottom: ${pixelToRem(12)};
`;
