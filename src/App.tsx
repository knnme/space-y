import Button from './components/Button';
import Icon from './components/Icon';

import { GlobalStyle } from './styles/globalstyles';
import * as S from './styles/styles';

export interface GalleryFlexProps { 
  flex?: "row" | "column";
  align?: "center" | "flex-start";
  logo?:  boolean;
}


function App() {
  return (
    <>
      <GlobalStyle />

      <S.Container flex={"column"}>
      
        <S.Header>
          <S.Logo logo/>
        </S.Header>
        <S.Main>
          <S.Intro>Finalmente é possível!</S.Intro>
          <S.Title>Sua jornada para Marte começa aqui<span>.</span></S.Title>
          <S.Subtitle>A primeira viagem para Marte estará disponível apartir do dia<br/> 12/03/2028. Inscreva-se em nossa lista de espera.</S.Subtitle>

          <S.DivButton>
            <Button  text='Inscreva-se agora' fullWidth />
          </S.DivButton>

        </S.Main>
        
        <S.Astronauts/>

        <S.DivIcons>
          <Icon src='/images/icon-rocket.svg' txt ="Foguetes com a mais alta tecnologia e conforto." alt="Rocket" />
          <Icon src='/images/icon-flag.svg' txt ="Mais de 100 missões consecutivas com sucesso." alt="Flag" />
          <Icon src='/images/icon-scope.svg' txt ="Experiencia única e exclusiva." alt="Telescope" />
        </S.DivIcons>

      </S.Container>







      

      <S.SectionAbout>
        <S.ContainerAbout flex={'column'}>
          <S.ContentAbout>
            <S.ImageMars />

            <S.DivAboutMars>
              <S.Intro>Por que Marte?</S.Intro>

              <S.AboutTitle>Sobre o planeta vermelho</S.AboutTitle>

              <S.AboutText>
                A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.
              </S.AboutText>

              <S.AboutText>
                A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.
              </S.AboutText>
            </S.DivAboutMars>
          <S.Lines />
          </S.ContentAbout>



          <S.Container flex={'row'}>
            <S.LeftGallery>
              <S.Logo />
              <S.TextGallery>
                O caminho para <br/> tornar a humanidade multiplanetária<span>.</span>
              </S.TextGallery>
              <S.ButtonSubscribe>
                Inscreva-se agora
              </S.ButtonSubscribe>
            </S.LeftGallery>
            <S.Gallery>

            </S.Gallery>
          </S.Container>
        </S.ContainerAbout>
      </S.SectionAbout>
    </>
  );
};

export default App;