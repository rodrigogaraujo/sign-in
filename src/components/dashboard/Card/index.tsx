import React from "react";

import { Container } from "./styles";

interface CardsProps {
    title: string;
    value: string;
    type?: string;
}

const Card: React.FC<CardsProps> = ({ title, value, type }) => {
    return (
        <Container type={type}>
            <h1>{title}</h1>
            <h2>{value}</h2>
        </Container>
    );
};

export default Card;
