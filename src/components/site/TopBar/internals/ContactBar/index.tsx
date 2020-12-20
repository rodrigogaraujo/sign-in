import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { Container } from "./styles";
import Content from "../../../Content";

const TopBar = () => {
    return (
        <Container>
            <Content>
                <div className="content-container">
                    <div className="header_call_us_content">
                        <h1>Contato:</h1>
                        <p className="white"> (89) 99463-0386</p>
                    </div>
                    <div className="header_login_register_social">
                        <span>
                            <a href="#" title="Login">
                                Login
                            </a>
                            <p>ou</p>
                            <a href="#" title="Cadastre-se">
                                Cadastrar-se
                            </a>
                        </span>
                        <p className="white">|</p>
                        <a
                            href="#"
                            className="btn_social"
                            title="Nosso facebook"
                        >
                            <div className="header_login_register_social_icons">
                                <FiFacebook size={18} />
                            </div>
                        </a>
                        <a
                            href="#"
                            className="btn_social"
                            title="Nosso Instagram"
                        >
                            <div className="header_login_register_social_icons">
                                <FiInstagram size={18} />
                            </div>
                        </a>
                        <a
                            href="#"
                            className="btn_social"
                            title="Nosso Twitter"
                        >
                            <div className="header_login_register_social_icons">
                                <FiTwitter size={18} />
                            </div>
                        </a>
                    </div>
                </div>
            </Content>
        </Container>
    );
};

export default TopBar;