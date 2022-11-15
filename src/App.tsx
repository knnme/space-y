/* eslint-disable no-template-curly-in-string */
import { GlobalStyle } from './styles/globalstyles';
import * as S from './styles/styles';
import { pixelToRem } from './components/utils/pixelToRem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

import Button from './components/Button';
import Icon from './components/Icon';
import InputsText from './components/InputsTexts';
import Input from './components/Inputs';
import SocialIcons from './components/SocialIcons';
import Menu from './components/menu';

export interface ContainersProps { 
  align?: string;
  flex?: string;
  padding?: string;
  width?: string;
  height?: string;
  margin?: string;
  justify?: string;
  maxWidth?: string;

  logo?:  boolean;
  src?: string;
  background?: string;
}

function App() {
  return (
    <>
      <GlobalStyle/>

      <S.Section flex={"column"} padding={pixelToRem(26, 70, 80)} width={pixelToRem(1340)}  margin='0 auto'>
      
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

        <S.Astronauts />
        <S.Container padding={pixelToRem(125, 0, 0)}>
          <Icon src='/images/icon-rocket.svg' txt ="Foguetes com a mais alta tecnologia e conforto." alt="Rocket" />
          <Icon src='/images/icon-flag.svg' txt ="Mais de 100 missões consecutivas com sucesso." alt="Flag" />
          <Icon src='/images/icon-scope.svg' txt ="Experiencia única e exclusiva." alt="Telescope" />
        </S.Container>
      </S.Section>


      <S.Section background='url("/images/stars.svg"), var(--background-section)' flex={'column'} margin='0 auto' padding={pixelToRem(0, 0, 250, 70)}>
        <S.Container margin='0 auto' align='center'>
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
        </S.Container>

        <S.Container align={'center'} justify='space-between' padding={pixelToRem(121, 0, 0, 70)}>
          <S.LeftGallery>
            <S.TextGallery>
              <S.Logo />
              O caminho para <br/> tornar a humanidade multiplanetária<span>.</span>
            </S.TextGallery>
            <S.ButtonSubscribe>
                Inscreva-se agora
            </S.ButtonSubscribe>
          </S.LeftGallery>
            <S.Gallery>
              <Swiper spaceBetween={300} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-1.svg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-2.svg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-3.svg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-1.svg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-2.svg'/>
                </SwiperSlide>
                <SwiperSlide>
                  <S.ImgGallery src='/images/gallery-3.svg'/>
                </SwiperSlide>
              </Swiper>
            </S.Gallery>
        </S.Container>
      </S.Section>

      <S.Section background='url("images/stars.svg"), #0D0E13'>
        <S.Container padding={pixelToRem(0, 70)} margin='0 auto' justify='center'>
          <S.FormSection>
            <S.Form>
              <S.TicketIcon />
              <S.FormTextMain>
                Garanta sua vaga para a primeira viagem
              </S.FormTextMain>
              <S.FormTextSub>
                Preencha os campos abaixo para entrar na lista de espera
              </S.FormTextSub>
              <InputsText text="Seu nome" />
              <Input/>
              <InputsText text="E-mail" />
              <Input/>
              <InputsText text="Telefone" />
              <Input />
              <S.CheckText>
                <S.Checkbox/>
                <InputsText text="Concordo em receber notificações" />
              </S.CheckText>
              <Button text='Garantir minha vaga'/>
            </S.Form>
          </S.FormSection>
            <S.RocketIllustrator />
        </S.Container>
      </S.Section>
      <S.Section  background='url("images/stars.svg"), #0D0E13'>
        <S.Container flex='column' padding={pixelToRem(0, 0, 15)} margin='0 auto'>
          <S.SmokeFooter />
          <S.Footer>
            <S.Container>
              <S.Logo logo/>
            </S.Container>
            <S.Container>
              <SocialIcons src='/images/instagram.svg'/>
              <SocialIcons src='/images/linkedin.svg'/>
              <SocialIcons src='/images/facebook.svg'/>
            </S.Container>
            <S.Container>
              <Menu text='Inicio' margin/>
              <Menu text='Sobre nós' margin/>
              <Menu text='Missões' margin/>
              <Menu text='Contato'/>
            </S.Container>
          </S.Footer>
        </S.Container>
      </S.Section>
    </>
  );
};

export default App;