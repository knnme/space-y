import React from 'react';
import Button from './components/Button';
import { GlobalStyle } from './styles/globalstyles';
import { Header } from './styles/styles';


function App() {
  return (
    <>
      <GlobalStyle />
      
      <Header>
        <h1>Hello !</h1>
      </Header>
      
      <Button text='Inscreva-se agora'/>
    </>
  );
};

export default App;
