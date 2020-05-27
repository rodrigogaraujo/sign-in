import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    padding: 40px 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    .os {
        > h1 {
            color: var(--light);
            font-weight: 500;
            margin-bottom: 5px;
            font-size: 1.3em;
        }
    }

    ul {
        list-style: none;
        display: flex;
        li + li {
            margin-left: 15px;
        }
    }
`;
