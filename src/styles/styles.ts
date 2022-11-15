import styled from "styled-components";
import { pixelToRem } from "../components/utils/pixelToRem";
import { ContainersProps } from "../App";

export const Header = styled.div`
 width: ${pixelToRem(1440)};
 padding-bottom: ${pixelToRem(95)};
 

 @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
 }

 @media screen and (min-width: 769px) and (max-width: 1023px) {

 }
`;

export const Section = styled.div<ContainersProps>`
  background: ${(props) => props.background};
  padding-top: ${(props) => props.padding};
  
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth};
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    display: none;
 }
`;

export const Container = styled.div<ContainersProps>` 
 display: flex;
 flex-wrap: wrap;
 flex-direction: ${(props) => props.flex};
 align-items: ${(props) => props.align};
 justify-content: ${(props) => props.justify};
 padding: ${(props) => props.padding};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 max-width: ${(props) => props.maxWidth};
 overflow: hidden;
 
 
 
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    padding: 0;
    flex-direction: column;
 }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
  
 }
`;

export const Logo = styled.div<ContainersProps>`
 width: ${({logo}) => (logo ? pixelToRem(201) : pixelToRem(162))};
 height: ${({logo}) => (logo ? pixelToRem(41) : pixelToRem(25))};
 background-image: url("/images/logo.svg");
 background-repeat: no-repeat;
 
`;

export const Main = styled.div`
 width: ${pixelToRem(677)};
 height: ${pixelToRem(359)};
 display: flex;
 flex-direction: column;
 flex: wrap;
 

 @media (max-width: 768px) {
    align-items: center;
 }
`;

export const Astronauts = styled.image`
 position: absolute;
 left: 58%;
 top: 2%;
 width: ${pixelToRem(550)};
 height: ${pixelToRem(563)};
 background-image: url("/images/Astronauts.svg");
 background-repeat: no-repeat;
`;

export const Intro = styled.text`
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
  font: var(--font-heading-1);
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
  width: ${pixelToRem(340)};
  height: ${pixelToRem(229)};

`;

export const Gallery = styled.div`
  width: ${pixelToRem(800)};
  height: ${pixelToRem(353)};
  border-radius: ${pixelToRem(10)};
  overflow: hidden;
`;

export const ImgGallery = styled.img<ContainersProps>`
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

  @media (max-width: 768px) {
    display: none;
    
  }
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
 margin-right: ${pixelToRem(62)};
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
width: ${pixelToRem(264)};
font-weight: 500;
font-size: ${pixelToRem(24)};
line-height: ${pixelToRem(32)};
letter-spacing: ${pixelToRem(1)};
margin-bottom: ${pixelToRem(16)};
color: var(--text);
`;

export const FormTextSub = styled.p`
width: ${pixelToRem(305)};
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

export const RocketIllustrator = styled.image`
 width: ${pixelToRem(547)};
 height: ${pixelToRem(848)};
 margin-left: ${pixelToRem(62)};
 background-image: url("/images/rocket_illustra.svg");
 background-repeat: no-repeat;
 
`;

export const SmokeFooter = styled.image`
 width: ${pixelToRem(1300)};
 height: ${pixelToRem(275)};
 background-image: url("/images/smoke-footer.svg");
 background-repeat: no-repeat;
 
`;
export const Footer = styled.div `
  display: flex;
  justify-content: space-between;
  
`;

export const ContainerFooter = styled.div`
display: flex;

`;