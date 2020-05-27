import styled from "styled-components";

export const Container = styled.nav`
    max-width: 270px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 25px 0 25px 30px;

    img {
        width: 200px;
        align-self: center;
    }

    .alert {
        margin-top: 20px;
    }

    .alert-span {
        background: red;
        padding: 2px;
        color: white;
        border-radius: 5px;
    }

    .active {
        background: var(--dark);
        color: white;
        span {
            color: white;
        }
    }

    span {
        color: var(--light);
        font-size: 0.9em;
        padding: 13px 15px 0 15px;
        margin-bottom: 5px;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: var(--dark);
        padding: 0 15px;
        border-radius: 8px;
        transition: all 0.4s;
        span {
            padding: 13px 15px;
            color: var(--dark);
            font-size: 1em;
            margin-bottom: 0;
        }

        &:hover {
            background: var(--dark);
            color: white;
            span {
                color: white;
            }
        }
    }
`;
