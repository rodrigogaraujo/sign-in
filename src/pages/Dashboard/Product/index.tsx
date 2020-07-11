import React from "react";

import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";
import { Formik, Form } from "formik";
import Select from "react-select";
import Toggle from "react-toggle";

const Customer = () => {
    const options = [
        { value: "1", label: "Produto" },
        { value: "2", label: "Serviço" },
    ];
    const optionsUnity = [
        { value: "1", label: "Und" },
        { value: "2", label: "Cx" },
    ];
    const handleSubmit = (data: any) => {
        console.log("data", data);
    };
    return (
        <Container>
            <SideBar />
            <Content>
                <h1>Novo produto</h1>{" "}
                <Formik
                    initialValues={{
                        description: "",
                        code: "",
                        stock: "",
                        alert_with_stock: "",
                        cost_price: "",
                        sale_price: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, values, resetForm }) => (
                        <Form>
                            <div className="card">
                                <h2>Dados do produto</h2>
                                <div
                                    className="card-row"
                                    style={{ margin: "0 0 20px 0" }}
                                >
                                    <div className="card-column">
                                        <div className="card-row">
                                            <Toggle
                                                id="toogle-stock"
                                                defaultChecked={false}
                                            />
                                            <label
                                                htmlFor="toogle-stock"
                                                style={{ marginLeft: "8px" }}
                                            >
                                                Produto Ativo
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-row">
                                    <div className="card-column">
                                        <Input
                                            type="text"
                                            label="Descrição"
                                            name="description"
                                            req={true}
                                            value={values.description}
                                            onChange={handleChange}
                                            id="description"
                                        />
                                    </div>
                                    <div className="card-column">
                                        <Select
                                            options={options}
                                            placeholder="Selecione um tipo"
                                        />
                                    </div>

                                    <div className="card-column">
                                        <Select
                                            options={optionsUnity}
                                            placeholder="Selecione uma unidade"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="card-row"
                                    style={{ margin: "20px 0" }}
                                >
                                    <Toggle
                                        id="toogle-stock"
                                        defaultChecked={false}
                                    />
                                    <label
                                        htmlFor="toogle-stock"
                                        style={{ marginLeft: "8px" }}
                                    >
                                        Alertar com estoque baixo
                                    </label>
                                </div>
                                <div className="card-row">
                                    <div className="card-column">
                                        <Input
                                            type="number"
                                            label="Estoque"
                                            name="stock"
                                            masked={true}
                                            value={values.stock}
                                            onChange={handleChange}
                                            id="stock"
                                        />
                                    </div>
                                    <div className="card-column">
                                        <Input
                                            type="number"
                                            label="Estoque baixo"
                                            name="email"
                                            value={values.alert_with_stock}
                                            onChange={handleChange}
                                            id="alert_with_stock"
                                        />
                                    </div>
                                    <div className="card-column">
                                        <Input
                                            type="text"
                                            label="Preço de compra"
                                            name="cost_price"
                                            req={true}
                                            value={values.cost_price}
                                            onChange={handleChange}
                                            id="cost_price"
                                        />
                                    </div>
                                    <div className="card-column">
                                        <Input
                                            type="text"
                                            label="Preço de Venda"
                                            name="sale_price"
                                            req={true}
                                            value={values.sale_price}
                                            onChange={handleChange}
                                            id="sale_price"
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
