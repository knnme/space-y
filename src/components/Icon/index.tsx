import { DivIcon, ImageIcon, TextIcon } from './styles';

export interface IconProps {
  src: string;
  alt?: string;
  txt?: string;
}

function Icon ({src, alt, txt}: IconProps) {
  return (
    <>
      <DivIcon>
        <ImageIcon  src={src} alt={alt}/>

        <TextIcon>
          {txt}
        </TextIcon>
      </DivIcon>
    </>
  );
}

export default Icon;