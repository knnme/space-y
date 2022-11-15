import styled from "styled-components";

import { pixelToRem } from "../utils/pixelToRem";

import { IconProps } from ".";


export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${pixelToRem(206)};
    margin: ${pixelToRem(0, 90)};

    @media screen and (max-width: 1023px) {
        align-items: center;
        margin: ${pixelToRem(65, 0)};
}
`;

type ImageProps = Omit<IconProps, "txt">;

export const ImageIcon = styled.image<ImageProps>`
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
    background-image: ${(props)=> `url(${props.src})`};
    background-repeat: no-repeat;

    @media screen and (max-width: 1023px) {
}     
    `;

export const TextIcon = styled.p`
    color: var(--gray-05);
    font: var(--font-text-2);
    padding-top: ${pixelToRem(8.5)};
`;
