import styled from "styled-components";
import { SocialIconsProps } from ".";
import { pixelToRem } from "../utils/pixelToRem";


export const SocialIconsComponent = styled.image<SocialIconsProps>`
    width: ${pixelToRem(25)};
    height: ${pixelToRem(25)};
    background-image: ${(props)=> `url(${props.src})`};
    background-repeat: no-repeat;
    margin: ${pixelToRem(0, 9)};
`;

export const DivContainer = styled.div`
    display: flex;
`;
