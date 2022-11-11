import Button from './components/Button';
import Icon from './components/Icon';

import { GlobalStyle } from './styles/globalstyles';
import { Container, Header, Main, Intro, Logo, Title, Subtitle, Astronauts, DivButton, DivIcons, SectionAbout, ContainerAbout, ImageMars, DivAboutMars, AboutTitle, AboutText, TextGallery, Gallery } from './styles/styles';

export interface GalleryFlexProps { 
  flex: "row" | "column" 
}


function App() {
  return (
    <>
      <GlobalStyle />

      <Container flex={"column"}>
      
        <Header>
          <Logo>
            <img src="/images/logo.svg" alt="Logo SpaceY" />
          </Logo>
        </Header>
        <Main>
          <Intro>Finalmente é possível!</Intro>
          <Title>Sua jornada para Marte começa aqui<span>.</span></Title>
          <Subtitle>A primeira viagem para Marte estará disponível apartir do dia 12/03/2028.<br/> Inscreva-se em nossa lista de espera.</Subtitle>

          <DivButton>
            <Button text='Inscreva-se agora' fullWidth />
          </DivButton>

        </Main>
        
        <Astronauts>
            <img src="/images/Astronauts.svg" alt="Logo SpaceY" />
        </Astronauts>

        <DivIcons>
          <Icon src='/images/icon-rocket.svg' txt ="Foguetes com a mais alta tecnologia e conforto." alt="Rocket" />
          <Icon src='/images/icon-flag.svg' txt ="Mais de 100 missões consecutivas com sucesso." alt="Flag" />
          <Icon src='/images/icon-scope.svg' txt ="Experiencia única e exclusiva." alt="Telescope" />
        </DivIcons>

      </Container>

      <SectionAbout>
        <ContainerAbout>
          
            <ImageMars />

          <DivAboutMars>
            <Intro>Por que Marte?</Intro>

            <AboutTitle>Sobre o planeta vermelho</AboutTitle>

            <AboutText>
              A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.
            </AboutText>

            <AboutText>
              A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.
            </AboutText>
          </DivAboutMars>
        </ContainerAbout>

        <Container flex={"row"}>
            <TextGallery>
              <Logo>
                <img src="/images/logo.svg" alt="Logo SpaceY" />
              </Logo>
              O caminho para tornar a humanidade multiplanetária.
            </TextGallery>
            <Gallery>

            </Gallery>
        </Container>
      </SectionAbout>
    </>
  );
};

export default App;