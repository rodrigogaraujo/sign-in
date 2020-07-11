import React from "react";

import SideBar from "../../../../../components/dashboard/SideBar";
import Input from "../../../../../components/Input";
import { Container, Content } from "./styles";
import { Formik, Form } from "formik";
import Select from "react-select";
import { useLocation } from "react-router-dom";

const Customer: React.FC = () => {
    const location = useLocation();
    const options = [
        { value: "1", label: "Rodrigo Gomes Araújo" },
        { value: "2", label: "G3 Infotech" },
    ];
    const products = [
        { value: "1", label: "Roteador Mercusys 301" },
        { value: "2", label: "Ubiquiti Airgrid M5" },
    ];
    const optionsProduct = [
        { value: "1", label: "Caixa" },
        { value: "2", label: "Unidade" },
        { value: "3", label: "Metros" },
    ];
    const optionsPriority = [
        { value: "1", label: "Baixa" },
        { value: "2", label: "Normal" },
        { value: "3", label: "Alta" },
    ];
    const optionsSoStatus = [
        { value: "1", label: "Aberta" },
        { value: "2", label: "Finalizada" },
        { value: "3", label: "Pendente" },
    ];
    const handleSubmit = (data: any) => {
        console.log("data", data);
    };

    const getId = location.pathname.replace("/os/list/", "");
    return (
        <Container>
            <SideBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Content>
                    <h1>Ordem de Serviço número: {getId} </h1>
                    <Formik
                        initialValues={{
                            description: "",
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, values, resetForm }) => (
                            <Form>
                                <div className="card">
                                    <h2>Alterar dados da OS</h2>
                                    <div className="card-row">
                                        <div className="card-column">
                                            <Select
                                                options={options}
                                                placeholder="Selecione um Cliente"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="card-row"
                                        style={{ margin: "20px 0" }}
                                    >
                                        <div className="card-column">
                                            <div className="card-row">
                                                <Input
                                                    type="text"
                                                    label="Descrição da problema"
                                                    name="description"
                                                    req={true}
                                                    value={values.description}
                                                    onChange={handleChange}
                                                    id="description"
                                                    className="description"
                                                />
                                                <Select
                                                    className="priority"
                                                    options={optionsPriority}
                                                    placeholder="Prioridade"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-column">
                                            <label
                                                htmlFor="text-obs"
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Observações
                                            </label>
                                            <textarea
                                                id="text-obs"
                                                className="text-obs"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="confirm" type="submit">
                                        Salvar
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
                <Content style={{ padding: "10px 60px" }}>
                    <Formik
                        initialValues={{
                            description: "",
                            quantity: 0,
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, values, resetForm }) => (
                            <Form>
                                <div className="card">
                                    <h2>Adicionar produtos a OS</h2>
                                    <div className="card-row">
                                        <div className="card-column">
                                            <div className="card-row">
                                                <Select
                                                    className="products"
                                                    options={products}
                                                    placeholder="Selecione um Cliente"
                                                />
                                            </div>
                                            <div className="card-row">
                                                <Select
                                                    className="product"
                                                    options={optionsProduct}
                                                    placeholder="Unidade"
                                                />
                                                <div
                                                    className="product"
                                                    style={{
                                                        marginLeft: "20px",
                                                    }}
                                                >
                                                    <Input
                                                        type="text"
                                                        label="Quantidade"
                                                        name="quantity"
                                                        req={true}
                                                        value={values.quantity}
                                                        onChange={handleChange}
                                                        id="quantity"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-column">
                                            <label
                                                htmlFor="text-obs"
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Lista de produtos na OS
                                            </label>
                                            <table>
                                                <thead>
                                                    <td>Produto</td>
                                                    <td>Quantidade</td>
                                                    <td>Valor</td>
                                                    <td>Total</td>
                                                </thead>
                                                <tbody>
                                                    <td>
                                                        Roteador Mercusys 301
                                                    </td>
                                                    <td>1</td>
                                                    <td>R$ 0,00</td>
                                                    <td>R$ 0,00</td>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="confirm" type="submit">
                                        Adicionar
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
                <Content style={{ padding: "10px 60px" }}>
                    <Formik
                        initialValues={{
                            description: "",
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, values, resetForm }) => (
                            <Form>
                                <div className="card">
                                    <h2>Finalizar OS</h2>
                                    <div
                                        className="card-row"
                                        style={{ margin: "20px 0" }}
                                    >
                                        <div className="card-column">
                                            <div className="card-row">
                                                <Input
                                                    type="text"
                                                    label="Descrição da solução"
                                                    name="description"
                                                    req={true}
                                                    value={values.description}
                                                    onChange={handleChange}
                                                    id="description"
                                                    className="description"
                                                />
                                                <Select
                                                    className="priority"
                                                    options={optionsSoStatus}
                                                    placeholder="Status"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-column">
                                            <label
                                                htmlFor="text-obs"
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Observações
                                            </label>
                                            <textarea
                                                id="text-obs"
                                                className="text-obs"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="confirm" type="submit">
                                        Salvar
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
            </div>
        </Container>
    );
};

export default Customer;
