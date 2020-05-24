import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import logo from "../../assets/shield.png";

import { Container, Content } from "./styles";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisibleMail, setIsVisibleMail] = useState(false);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isEffectMail, setIsEffectMail] = useState(true);
    const [isEffectPassword, setIsEffectPassword] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const history = useHistory();

    const handleChangeMail = useCallback((e: any) => {
        setEmail(e.value);
        e.value === "" ? setIsVisibleMail(false) : setIsVisibleMail(true);
        e.value !== "" || e.value !== null
            ? setIsEffectMail(false)
            : setIsEffectMail(true);
    }, []);

    const handleChangePassword = (e: any) => {
        setPassword(e.value);
        e.value === ""
            ? setIsVisiblePassword(false)
            : setIsVisiblePassword(true);
        e.value !== "" || e.value !== null
            ? setIsEffectPassword(false)
            : setIsEffectPassword(true);
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setButtonLoading(true);
        setTimeout(() => {
            history.push("/dashboard");
        }, 3000);
    }, []);

    return (
        <Container>
            <Content
                isVisiblePassword={isVisiblePassword}
                isVisibleMail={isVisibleMail}
                isEffectMail={isEffectMail}
                isEffectPassword={isEffectPassword}
                isButtonLoading={buttonLoading}
            >
                <img src={logo} alt="G3 Infotech" />
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            onChange={(e: any) => handleChangeMail(e)}
                        />
                        <label htmlFor="email" className="email-label">
                            Email
                        </label>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e: any) => handleChangePassword(e)}
                        />
                        <label htmlFor="password" className="password-label">
                            Senha
                        </label>
                    </div>
                    <button type="submit">
                        {!buttonLoading && <span>Entrar</span>}
                    </button>
                </form>
            </Content>
        </Container>
    );
};

export default SignIn;
