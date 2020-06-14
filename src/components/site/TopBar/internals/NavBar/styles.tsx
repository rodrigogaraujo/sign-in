import styled, { css } from "styled-components";

interface Props {
    subMenuOpen: boolean;
}

export const Container = styled.section<Props>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;

    a {
        max-width: 200px;
        flex-basis: 200px;
        padding: 20px 0;
    }

    img {
        width: 100%;
    }

    .header_down_content_menu {
        display: flex;
        flex-basis: calc(100% - 200px);
        justify-content: flex-end;
        ul {
            flex-basis: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            li {
                list-style: none;
                margin: 0 10px 0 30px;
                a {
                    color: #fff;
                    font-size: 0.975em;
                    font-weight: 700;
                    transition: all 0.3s;
                    &:hover {
                        color: #27572d;
                    }
                }
            }
            .header_down_content_nav_sign {
                border: 1px solid #fff;
                color: #fff;
                padding: 15px 25px;
                border-radius: 30px;
                transition: all 0.3s;
                &:hover {
                    background-color: #27572d;
                    color: #fff;
                    border: 1px solid #27572d;
                }
            }
        }
        @media (max-width: 64em) {
            display: none !important;
        }
    }

    .header_down_content_menu_mobile {
        display: none;
        flex-basis: calc(100% - 200px);
        justify-content: flex-end;

        ul {
            list-style: none;
            align-items: center;
            display: flex;
            li {
                position: relative;
                display: flex;
                align-items: center;
                svg {
                    color: #fff;
                    cursor: pointer;
                    border-radius: 8px 8px 0 0;
                }
                .open-menu {
                    display: flex;
                    ${(props) =>
                        props.subMenuOpen &&
                        css`
                            display: none;
                        `}
                }
                .close-menu {
                    display: none;
                    ${(props) =>
                        props.subMenuOpen &&
                        css`
                            display: flex;
                        `}
                }
            }
        }
        @media (max-width: 64em) {
            display: flex !important;
        }

        .header_down_content_menu_mobile_sub ul {
            text-align: center;
            min-width: 200px;
            background-color: #204924;
            display: none;
            ${(props) =>
                props.subMenuOpen &&
                css`
                    display: flex;
                `}
            justify-content: flex-end;
            flex-wrap: wrap;
            position: absolute;
            margin-top: 25px;
            top: 100%;
            right: 0;
            border-radius: 8px 0 8px 8px;
            li {
                flex-basis: 100%;
            }
            li a {
                text-decoration: none;
                color: #fff;
                font-size: 1.2em;
                font-weight: 300;
                padding: 20px;
                width: 100%;
                transition: all 0.3s;
                &:hover {
                    flex-basis: 100%;
                    padding: 20px;
                    background-color: #fff;
                    color: #204924;
                    border-radius: 8px;
                }
            }
        }
    }
`;
