import styled from "styled-components";
import { pixelToRem } from "../components/utils/pixelToRem";

export const Container = styled.div` 
 display: flex;
 flex-direction: column;
 padding: ${pixelToRem(26, 112, 50)};
`;

export const Header = styled.div`
 width: 100%;
 padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
 width: ${pixelToRem(201)};
 height: ${pixelToRem(41)};
`;

export const Main = styled.div`
 width: ${pixelToRem(815)};
 height: ${pixelToRem(359)};
 display: flex;
 flex-direction: column;
`;


export const Intro = styled.p`
 color: var(--sun);
 font: var(--font-text-5);
 letter-spacing: ${pixelToRem(5)};
 text-transform: uppercase;
`;

export const Title = styled.p`
 color: var(--text);
 font: var(--font-display);
 letter-spacing: ${pixelToRem(1)};

 span {
  color: var(--sun);
 }
`;

export const Subtitle = styled.p`
 color: var(--gray-05);
 font: var(--font-heading-3);
 letter-spacing: ${pixelToRem(1)};
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(32)};
`;

export const Astronauts = styled.image`
 position: absolute;
 top: ${pixelToRem(16)};
 right: 0;
`;

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${pixelToRem(1440)};
    align-items: center;
     
 `;