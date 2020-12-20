/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useCallback } from "react";

import { useAuth } from "../../hooks/Auth";
import { useToast } from "../../hooks/Toast";

import logo from "../../assets/shield.png";

import { Container, Content } from "./styles";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibleMail, setIsVisibleMail] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isEffectMail, setIsEffectMail] = useState(true);
  const [isEffectPassword, setIsEffectPassword] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleChangeMail = useCallback((e: any) => {
    setEmail(e.target.value);
    e.target.value === "" ? setIsVisibleMail(false) : setIsVisibleMail(true);
    e.target.value !== "" || e.target.value !== null
      ? setIsEffectMail(false)
      : setIsEffectMail(true);
  }, []);

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
    e.target.value === ""
      ? setIsVisiblePassword(false)
      : setIsVisiblePassword(true);
    e.target.value !== "" || e.target.value !== null
      ? setIsEffectPassword(false)
      : setIsEffectPassword(true);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setButtonLoading(true);
      try {
        await signIn({ email, password });
      } catch (err) {
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login, cheque as credenciais",
        });
        setButtonLoading(false);
      }
    },
    [signIn, addToast, email, password],
  );

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
          <button type="submit">{!buttonLoading && <span>Entrar</span>}</button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
