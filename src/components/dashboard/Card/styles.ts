import styled, { css } from "styled-components";

interface PropsCard {
    type?: string;
}

export const Container = styled.div<PropsCard>`
    padding: 20px;
    text-align: center;
    background: var(--dark);
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    min-width: 180px;
    max-width: 180px;

    h1 {
        color: white;
        font-weight: 300;
        font-size: 1.2em;
        padding: 0 10px 5px 10px;
    }

    h2 {
        color: white;
        font-weight: 400;
        font-size: 2.3em;
        padding: 0 10px 5px 10px;
        ${(props) =>
            props.type === "danger" &&
            css`
                color: var(--danger);
            `}
    }
`;
