import Button from './components/Button';
import Icon from './components/Icon';

import { GlobalStyle } from './styles/globalstyles';
import { Container, Header, Main, Intro, Logo, Title, Subtitle, Astronauts, DivButton, DivIcons } from './styles/styles';


function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
      
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
    </>
  );
};

export default App;