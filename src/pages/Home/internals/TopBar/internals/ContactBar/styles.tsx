import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    border-bottom: solid 0.5px var(--border-top);
    .content-container {
        color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
        .header_call_us_content {
            flex-basis: 30%;
            padding: 10px 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            h1 {
                font-size: 1em;
                font-weight: 300;
                margin: 0 10px 0 0;
                color: #ddfb1a;
            }
            p {
                margin: 0 10px 0 0;
                color: #fff;
            }
            @media screen and (max-width: 45em) {
                flex-basis: 100%;
                justify-content: center;
                padding: 10px 0 0 0;
            }
        }
        .header_login_register_social {
            flex-basis: 50%;
            align-items: center;
            flex-wrap: wrap;
            display: flex;
            padding: 10px 0;
            justify-content: flex-end;
            p {
                font-size: 0.9em;
                margin: 0 10px 0 0;
                color: #5f5f5f;
            }
            .white {
                color: #fff;
            }
            a {
                font-size: 0.9em;
                font-weight: 300;
                margin: 0 10px 0 0;
                color: #fff;
            }
            span {
                align-items: center;
                flex-wrap: wrap;
                display: flex;
                a {
                    font-size: 0.9em;
                    font-weight: 300;
                    margin: 0 10px 0 0;
                    color: #fff;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .header_login_register_social_icons {
                display: flex;
                align-items: center;
                padding: 8px;
                border-radius: 50%;
                background-color: #4a4a4a;
                font-size: 0.8em;
                transition: all 0.4s;
                &:hover {
                    background-color: #27572d !important;
                }
            }
            @media screen and (max-width: 45em) {
                flex-basis: 100%;
                justify-content: center;
                padding: 10px 0 10px 0;
            }
        }
    }
`;
