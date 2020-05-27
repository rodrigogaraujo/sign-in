import styled from "styled-components";

export const Container = styled.div`
    color: var(--dark);
    position: relative;
    input {
        border: none;
        outline: none;
        padding: 5px;
        font-size: 1.1em;
        width: 100%;
        border-bottom: 1px solid #ccc;
        z-index: 0;
        margin-top: 20px;
    }

    label {
        font-size: 0.9em;
        color: var(--dark);
        position: absolute;
    }
`;
