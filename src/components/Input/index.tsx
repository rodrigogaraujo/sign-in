import React, { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  maxLenght?: number | undefined;
  type: string;
  mask?: string;
  masked?: boolean;
  req?: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  maxLenght,
  type,
  masked,
  mask,
  req,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor="maskedInput">{label}</label>
      {masked && mask ? (
        <InputMask mask={mask} {...rest}>
          {(inputProps: any) => (
            <input
              id="maskedInput"
              required={req}
              maxLength={maxLenght}
              type={type}
              {...inputProps}
            />
          )}
        </InputMask>
      ) : (
        <input required={req} maxLength={maxLenght} type={type} {...rest} />
      )}
    </Container>
  );
};
export default Input;
