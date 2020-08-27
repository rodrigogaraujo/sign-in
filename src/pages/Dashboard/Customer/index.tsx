import React, { useCallback, useState } from "react";

import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import api from "../../../services/api";
import { useAuth } from "../../../hooks/Auth";
import { useToast } from "../../../hooks/Toast";
import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";

const Customer = () => {
    const { token } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(
        async (data: any) => {
            try {
                setLoading(true);
                const response = await api.post(
                    "/clients",
                    {
                        ...data,
                        password_confirmation: data.password,
                        birth_date: new Date(data.birth_date),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                if (response.data) {
                    addToast({
                        type: "success",
                        title: "Cliente cadastrado",
                        description: "Cliente adicionado com sucesso!",
                    });
                    setLoading(false);
                    history.push("/customer/list");
                }
            } catch (err) {
                console.log(err);
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description:
                        "Ocorreu um erro ao fazer o cadastro, cheque os dados e tente novamente",
                });
                setLoading(false);
            }
        },
        [api, addToast],
    );

    return (
        <Container>
            <SideBar />
            <Content>
                {loading ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ReactLoading
                            color="green"
                            height={"20%"}
                            width={"20%"}
                        />
                    </div>
                ) : (
                    <>
                        <h1>Novo cliente</h1>
                        <Formik
                            initialValues={{
                                name: "",
                                document: "",
                                birth_date: "",
                                email: "",
                                type: "client",
                                password: "",
                                phone: "",
                                address: "",
                                addres_number: "",
                                neighborhood: "",
                                complement: "",
                                cep: "",
                                city: "",
                                state: "",
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, values, resetForm }) => (
                                <Form>
                                    <div className="card">
                                        <h2>Dados pessoais</h2>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Nome completo"
                                                    name="name"
                                                    req={true}
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    id="name"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Cpf"
                                                    name="document"
                                                    mask="999.999.999-99"
                                                    masked={true}
                                                    req={true}
                                                    value={values.document}
                                                    onChange={handleChange}
                                                    id="document"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Data de Nascimento"
                                                    name="birth_date"
                                                    mask="99/99/9999"
                                                    masked={true}
                                                    value={values.birth_date}
                                                    onChange={handleChange}
                                                    id="birth_date"
                                                />
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="E-mail"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    id="email"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Senha"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    id="password"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Telefone"
                                                    name="phone"
                                                    mask="(99)99999-9999"
                                                    req={true}
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    id="phone"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <h2>Dados de Endereço</h2>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Logradouro"
                                                    name="address"
                                                    req={true}
                                                    value={values.address}
                                                    onChange={handleChange}
                                                    id="address"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Número"
                                                    required
                                                    name="addres_number"
                                                    value={values.addres_number}
                                                    onChange={handleChange}
                                                    id="addres_number"
                                                />
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Bairro"
                                                    name="neighborhood"
                                                    req={true}
                                                    value={values.neighborhood}
                                                    onChange={handleChange}
                                                    id="neighborhood"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Complemento"
                                                    name="complement"
                                                    value={values.complement}
                                                    onChange={handleChange}
                                                    id="complement"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="CEP"
                                                    name="cep"
                                                    mask="99999-999"
                                                    masked={true}
                                                    value={values.cep}
                                                    onChange={handleChange}
                                                    id="cep"
                                                />
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Cidade"
                                                    name="city"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    id="city"
                                                />
                                            </div>
                                            <div className="card-column">
                                                <Input
                                                    type="text"
                                                    label="Estado"
                                                    name="state"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                    id="state"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            className="confirm"
                                            type="submit"
                                        >
                                            Cadastrar
                                        </button>
                                        <button
                                            className="cancel"
                                            onClick={() => resetForm()}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </>
                )}
            </Content>
        </Container>
    );
};

export default Customer;
