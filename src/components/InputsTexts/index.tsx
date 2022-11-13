import { InputTextComponent } from './styles'


export interface InputsProps {
  text?: string | any;
}

function InputsText({ text }: InputsProps) {
  return (
    <>
      
        <InputTextComponent>
          {text}
        </InputTextComponent>

      
    </>
    
  );
}

export default InputsText;