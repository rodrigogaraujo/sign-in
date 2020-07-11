import React from "react";

import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";
import { Formik, Form } from "formik";

const Customer = () => {
    const handleSubmit = (data: any) => {
        console.log("data", data);
    };
    return (
        <Container>
            <SideBar />
            <Content>
                <h1>Novo cliente</h1>{" "}
                <Formik
                    initialValues={{
                        name: "",
                        document: "",
                        birth_date: "",
                        email: "",
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
                                </div>
                                <div className="card-row">
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
                                            label="Telefone"
                                            name="phone"
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
                                <button className="confirm" type="submit">
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
            </Content>
        </Container>
    );
};

export default Customer;
