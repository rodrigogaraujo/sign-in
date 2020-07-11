import React from "react";

import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";
import { Formik, Form } from "formik";
import Select from "react-select";

const ServiceOrder = () => {
    const options = [
        { value: "1", label: "Rodrigo Gomes Araújo" },
        { value: "2", label: "G3 Infotech" },
    ];
    const optionsPriority = [
        { value: "1", label: "Baixa" },
        { value: "2", label: "Normal" },
        { value: "3", label: "Alta" },
    ];
    const handleSubmit = (data: any) => {
        console.log("data", data);
    };
    return (
        <Container>
            <SideBar />
            <Content>
                <h1>Nova Ordem de Serviço</h1>{" "}
                <Formik
                    initialValues={{
                        description: "",
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, values, resetForm }) => (
                        <Form>
                            <div className="card">
                                <h2>
                                    Selecione o cliente e descreva o problema
                                </h2>
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
                                                label="Descrição do problema"
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

export default ServiceOrder;
