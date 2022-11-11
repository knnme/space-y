import styled from "styled-components";
import { pixelToRem } from "../components/utils/pixelToRem";
import { GalleryFlexProps } from "../App";

export const Container = styled.div<GalleryFlexProps>` 
 display: flex;
 flex-direction: ${(props => props.flex)};
 padding: ${pixelToRem(26, 70, 50)};
 width: ${pixelToRem(1266)};
 margin: 0 auto;
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
 line-height: ${pixelToRem(24)};
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
  align-items: center;
`;

export const SectionAbout = styled.div`
  margin: 0 auto;
  background: url("/images/stars.svg"), var(--background-section);
`;

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${pixelToRem(1440)};
  margin: 0 auto;
`;

export const ImageMars = styled.div`
width: ${pixelToRem(626)};
height: ${pixelToRem(626)};
background-image: url('/images/mars.svg');
`;

export const DivAboutMars = styled.div`
width: ${pixelToRem(603)};
height: ${pixelToRem(378)};
`;

export const AboutTitle = styled.p`
color: var(--text);
font-family: 'Heebo';
font-weight: 700;
font-size: ${pixelToRem(32)};
line-height: ${pixelToRem(48)};
letter-spacing: ${pixelToRem(1)};
padding: ${pixelToRem(14, 0, 16, 0)};

`;

export const AboutText = styled.p`
color: var(--gray-05);
font-weight: 400;
font-size: ${pixelToRem(16)};
letter-spacing: 1px;
padding: ${pixelToRem(13, 0)};
line-height: ${pixelToRem(24)};
`;

export const TextGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pixelToRem(485)};
  height: ${pixelToRem(229)};
  
  font: var(--font-heading-1);
  color: var(--text);
  letter-spacing: ${pixelToRem(1)};
`;

export const Gallery = styled.div`
  
`;