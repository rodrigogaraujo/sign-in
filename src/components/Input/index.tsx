import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    maxLenght?: number | undefined;
    type: string;
    mask?: string;
}

const Input: React.FC<InputProps> = ({ label, maxLenght, type }) => {
    return (
        <Container>
            <label>{label}</label>
            <input maxLength={maxLenght} type={type} />
        </Container>
    );
};
export default Input;
