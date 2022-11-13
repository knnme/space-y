import styled from "styled-components";
import { pixelToRem } from "../components/utils/pixelToRem";
import { GalleryFlexProps } from "../App";

export const Container = styled.div<GalleryFlexProps>` 
 display: flex;
 flex-direction: ${(props => props.flex)};
 align-items: ${(props) => props.align};
 padding: ${pixelToRem(26, 70, 50)};
 width: ${pixelToRem(1266)};
 margin: 0 auto;
`;

export const Header = styled.div`
 width: 100%;
 padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.div<GalleryFlexProps>`
 width: ${({logo}) => (logo ? pixelToRem(201) : pixelToRem(108))};
 height: ${({logo}) => (logo ? pixelToRem(41) : pixelToRem(25))};
 background-image: url("/images/logo.svg");
 background-repeat: no-repeat;
`;

export const Main = styled.div`
 width: ${pixelToRem(815)};
 height: ${pixelToRem(359)};
 display: flex;
 flex-direction: column;
`;

export const Intro = styled.p`
  color: var(--sun);
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelToRem(18)};
  line-height: ${pixelToRem(32)};
  letter-spacing: ${pixelToRem(5)};
  text-transform: uppercase;
`;

export const Title = styled.p`
 color: var(--text);
 font: var(--font-display);
 letter-spacing: ${pixelToRem(1)};
 padding: ${pixelToRem(4, 0, 12, 0)};

 span {
  color: var(--sun);
 }
`;

export const Subtitle = styled.p`
 color: var(--gray-05);
 font-weight: 400;
 font-size: ${pixelToRem(20)};
 letter-spacing: ${pixelToRem(1)};
 line-height: ${pixelToRem(24)};
 padding-top: ${pixelToRem(12)};
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(32)};
`;

export const Astronauts = styled.image`
 position: absolute;
 top: ${pixelToRem(16)};
 right: 0;
 width: ${pixelToRem(550)};
 height: ${pixelToRem(563)};
 background-image: url("/images/Astronauts.svg");
 background-repeat: no-repeat;
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionAbout = styled.div<GalleryFlexProps>`
  margin: 0 auto;
  background: ${(props) => props.background}
  /* background: url("/images/stars.svg"), var(--background-section); */
`;

export const ContainerAbout = styled.div<GalleryFlexProps>`
display: flex;
  flex-direction: ${(props => props.flex)};
  justify-content: space-around;
  align-items: ${(props => props.align)};
  max-width: ${pixelToRem(1440)};
  margin: 0 auto;
`;

export const ContentAbout = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: ${pixelToRem(95)};
  
`;

export const ImageMars = styled.div`
width: ${pixelToRem(626)};
height: ${pixelToRem(626)};
background-image: url('/images/mars.svg');
z-index: 1;
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
  font-weight: 700;
  font-size: ${pixelToRem(32)};
  line-height: ${pixelToRem(48)};
  letter-spacing: ${pixelToRem(1)};
  color: var(--text);
  padding: ${pixelToRem(13, 0, 16, 0)};

  span {
    color: var(--sun);
  }
`;

export const ButtonSubscribe = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: var(--mars-light);
  font-size: ${pixelToRem(18)};
  line-height: ${pixelToRem(26)};
`;

export const LeftGallery = styled.div `
  display: flex;
  flex-direction: column;
  min-width: ${pixelToRem(485)};
  height: ${pixelToRem(229)};

`;

export const Gallery = styled.div`
  display: flex;
  width: ${pixelToRem(749)};
  height: ${pixelToRem(353)};
  border-radius: ${pixelToRem(10)};
`;

export const ImgGallery = styled.img<GalleryFlexProps>`
border-radius: ${pixelToRem(10)};
`;

export const Lines = styled.image`
  width: ${pixelToRem(553)};
  height: ${pixelToRem(1163)};
  background-image: url('images/lines.svg');
  position: absolute;
  left: 0;
  top: ${pixelToRem(1000)};
  opacity: 0.4;
  z-index: 0;
`;

export const FormSection = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: ${pixelToRem(520)};
 height: ${pixelToRem(792)};
 background: var(--background-form);
 border-radius: ${pixelToRem(20)};
`;

export const Form = styled.div`
 width: ${pixelToRem(417)};
 height: ${pixelToRem(676)};
`;

export const TicketIcon = styled.div`
width: ${pixelToRem(56)};
height: ${pixelToRem(56)};
margin-bottom: ${pixelToRem(16)};
background-image: url('/images/icon-ticket.svg');

`;

export const FormTextMain = styled.p`
font-weight: 500;
font-size: ${pixelToRem(24)};
line-height: ${pixelToRem(32)};
letter-spacing: ${pixelToRem(1)};
margin-bottom: ${pixelToRem(16)};
color: var(--text);
`;

export const FormTextSub = styled.p`
font-weight: 500;
font-size: ${pixelToRem(16)};
line-height: ${pixelToRem(20)};
margin-bottom: ${pixelToRem(32)};
opacity: 0.7;
color: var(--text);
`;

export const CheckText = styled.div`
  display: flex;
  margin-bottom: ${pixelToRem(32)};
`;

export const Checkbox = styled.div`
 width: ${pixelToRem(24)};
 height: ${pixelToRem(24)};
 border-radius: ${pixelToRem(6)};
 margin-right: ${pixelToRem(16)};
 border: 1.5px solid #FFF;
`;