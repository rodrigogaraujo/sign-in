import styled, { keyframes, css } from "styled-components";
import { shade } from "polished";

import logo from "../../assets/sppiner.gif";

interface Props {
    isVisibleMail: boolean;
    isVisiblePassword: boolean;
    isEffectMail: boolean;
    isEffectPassword: boolean;
    isButtonLoading: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

const labelAnimation = keyframes`
    from{
        top: 29px;
        left: 8px;
    }
    to{
        top: 0;
        left: 0;
    }
`;

export const Content = styled.div<Props>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 50px 40px;
    border-radius: 8px;
    h1 {
        text-align: center;
        font-size: 1.4em;
        color: var(--dark);
    }
    img {
        margin: 12px auto;
        max-width: 80px;
    }
    form {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        width: 100%;
        div {
            position: relative;
            label {
                position: absolute;
                top: 29px;
                left: 8px;
                z-index: -1;
                color: var(--dark);
                font-size: 1em;
                transition: all 0.3s;
            }
            input {
                margin-top: 18px;
                max-width: 284px;
                font-size: 1.2em;
                padding: 8px;
                background: none;
                outline: none;
                border: none;
                border-bottom: 1px solid var(--light);
                margin-bottom: 24px;
                width: 100%;
                color: var(--dark);
                z-index: 2;

                &:invalid {
                    border-bottom: 1px solid red;
                    box-shadow: none;
                }
            }
            ${(props) =>
                props.isEffectMail &&
                css`
                    input:focus + .email-label {
                        animation: ${labelAnimation} 0.4s;
                        top: 0;
                        left: 0;
                        font-size: 0.7em;
                    }
                `}

            ${(props) =>
                props.isEffectPassword &&
                css`
                    input:focus + .password-label {
                        animation: ${labelAnimation} 0.4s;
                        top: 0;
                        left: 0;
                        font-size: 0.7em;
                    }
                `}

            ${(props) =>
                props.isVisibleMail &&
                css`
                    .email-label {
                        top: 0;
                        left: 0;
                        font-size: 0.7em;
                    }
                `}

            ${(props) =>
                props.isVisiblePassword &&
                css`
                    .password-label {
                        top: 0;
                        left: 0;
                        font-size: 0.7em;
                    }
                `}
        }

        button {
            background: var(--dark);
            color: white;
            border: none;
            outline: none;
            border-radius: 8px;
            font-size: 1.5em;
            transition: background-color 0.4s;
            height: 50px;
            ${(props) =>
                props.isButtonLoading &&
                css`
                    background: var(--dark) url(${logo}) no-repeat center;
                    background-size: 10%;
                `}
            &:hover {
                background: ${shade(0.5, "#1A321D")};
            }
        }
    }
`;
