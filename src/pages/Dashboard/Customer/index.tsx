import React from "react";

import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";

const Customer = () => {
    return (
        <Container>
            <SideBar />
            <Content>
                <h1>Novo cliente</h1>
                <form>
                    <div className="card">
                        <h2>Dados pessoais</h2>
                        <div className="card-row">
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Nome completo"
                                    name="name"
                                />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Cpf"
                                    name="document"
                                />
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Data de Nascimento"
                                    name="birth_date"
                                />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="E-mail"
                                    name="email"
                                />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Telefone"
                                    name="phone"
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
                                />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Número"
                                    name="addres_number"
                                />
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Bairro"
                                    name="neighborhood"
                                />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Complemento"
                                    name="complement"
                                />
                            </div>
                            <div className="card-column">
                                <Input type="text" label="CEP" name="cep" />
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-column">
                                <Input type="text" label="Cidade" name="city" />
                            </div>
                            <div className="card-column">
                                <Input
                                    type="text"
                                    label="Estado"
                                    name="state"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="confirm">Cadastrar</button>
                        <button className="cancel">Cancelar</button>
                    </div>
                </form>
            </Content>
        </Container>
    );
};

export default Customer;
