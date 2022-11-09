import React from 'react';
import { ButtonComponent } from './styles';
import { ReactNode } from 'react';

interface Props {
  text: string;
}



function Button({text}: Props) {
  return (
    <>
      <ButtonComponent>
        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;
