import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";


export const InputComponent = styled.input`
    width: 100%;
    height: ${pixelToRem(56)};
    background: none;
    border-radius: 6px;
    border: 1px solid #D5D5DB;
    margin-bottom: ${pixelToRem(24)};
    padding: ${pixelToRem(12)};
    color: var(--text);
    font-size: ${pixelToRem(20)};
 
`;
