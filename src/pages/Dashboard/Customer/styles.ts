import styled from "styled-components";
import { shade } from "polished";

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
    flex-direction: column;
    > h1 {
        justify-content: flex-start;
        color: var(--light);
        font-weight: 500;
        margin-bottom: 5px;
        font-size: 1.3em;
    }

    form {
        display: flex;
        flex-direction: column;

        .card {
            display: flex;
            flex-direction: column;
            padding: 30px 40px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
            .card-row {
                display: flex;
                width: 100%;
                margin-bottom: 10px;
            }
            .card-column {
                display: flex;
                flex-direction: column;
                flex-basis: calc(50% - 15px);
                justify-content: space-between;
            }
            .card-column + .card-column {
                margin-left: 30px;
            }
            h2 {
                color: var(--light);
                font-weight: 500;
                margin-bottom: 30px;
                padding-bottom: 5px;
                font-size: 1.2em;
                width: 100%;
                border-bottom: 1px solid #ccc;
            }
        }
        .buttons {
            width: 100%;
            display: flex;
            justify-content: center;
            button {
                padding: 15px 40px;
                font-size: 1.3em;
                border: none;
                outline: none;
                border-radius: 8px;
            }
            button + button {
                margin-left: 30px;
            }
            .confirm {
                background: var(--dark);
                color: white;
                transition: all 0.3s;

                &:hover {
                    background: ${shade(0.4, "#1A321D")};
                }
            }
            .cancel {
                background: var(--danger);
                color: white;
                transition: all 0.4s;

                &:hover {
                    background: ${shade(0.4, "red")};
                }
            }
        }
    }
`;
