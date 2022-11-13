import { DivContainer, SocialIconsComponent } from './styles'


export interface SocialIconsProps {
  src: string;
  alt?: string;
  href?: string;
}

function SocialIcons({ src, alt, href }: SocialIconsProps) {
  return (
    <>
      <DivContainer>
        <SocialIconsComponent src={src} alt={alt} href={href}  />
      </DivContainer>

    </>
    
  );
}

export default SocialIcons;