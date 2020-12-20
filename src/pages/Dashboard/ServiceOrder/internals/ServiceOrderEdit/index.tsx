import React, { useState, useEffect, useCallback } from "react";

import ReactLoading from "react-loading";
import { Formik, Form } from "formik";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import Toggle from "react-toggle";

import api from "../../../../../services/api";
import { useAuth } from "../../../../../hooks/Auth";
import { useToast } from "../../../../../hooks/Toast";
import SideBar from "../../../../../components/dashboard/SideBar";
import Input from "../../../../../components/Input";
import { Container, Content } from "./styles";

interface ClientProps {
    id: number;
    name: string;
}

interface EmployeeProps {
    id: number;
    name: string;
}

interface ServiceProps {
    id: number;
    description: string;
    client: ClientProps;
    employee: EmployeeProps;
    priority: string;
    status: string;
    observation: string;
    description_solution: string;
    observation_solution: string;
}

interface ProductProps {
    id: number;
    description: string;
    price_sell: number;
}

interface ProductServiceProps {
    id: number;
    product: ProductProps;
    quantity: number;
    demand: number;
}

interface SelectProps {
    value: number;
    label: string;
}

interface SelectStringProps {
    value: string;
    label: string;
}

const Customer: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();
    const { addToast } = useToast();
    const location = useLocation();
    const [service, setService] = useState<ServiceProps>();
    const getId = location.pathname.replace("/os/list/", "");
    const [selectEmployee, setSelectEmployee] = useState<SelectProps>();
    const [selectClient, setSelectClient] = useState<SelectProps>();
    const [selectProduct, setSelectProduct] = useState<SelectProps>();
    const [selectUnityProduct, setSelectUnityProduct] = useState<
        SelectStringProps
    >();
    const [selectPriority, setSelectPriority] = useState<SelectStringProps>();
    const [selectStatus, setSelectStatus] = useState<SelectStringProps>();
    const [clients, setClients] = useState<Array<Object>>([]);
    const [employes, setEmployes] = useState<Array<Object>>([]);
    const [products, setProducts] = useState<Array<Object>>([]);
    const [obs, setObs] = useState("");
    const [obsSolution, setObsSolution] = useState("");
    const [demand, setDemand] = useState(false);
    const [serviceProduct, setServiceProduct] = useState<
        Array<ProductServiceProps>
    >([]);

    const optionsProduct = [
        { value: "cx", label: "Caixa" },
        { value: "und", label: "Unidade" },
        { value: "mt", label: "Metros" },
    ];

    const optionsPriority = [
        { value: "slow", label: "Baixa" },
        { value: "regular", label: "Normal" },
        { value: "hight", label: "Alta" },
    ];

    const optionsSoStatus = [
        { value: "open", label: "Aberta" },
        { value: "awaiting", label: "Pendente" },
        { value: "closed", label: "Finalizada" },
    ];

    const handleSelectPriority = useCallback((options: any) => {
        if (options) setSelectPriority(options);
    }, []);

    const handleSelectEmployee = useCallback((options: any) => {
        if (options) setSelectEmployee(options);
    }, []);

    const handleSelectClient = useCallback((options: any) => {
        if (options) setSelectClient(options);
    }, []);

    const handleSelectStatus = useCallback((options: any) => {
        if (options) setSelectStatus(options);
    }, []);

    const handleSelectProduct = useCallback((options: any) => {
        if (options) setSelectProduct(options);
    }, []);

    const handleSelectUnityProduct = useCallback((options: any) => {
        if (options) setSelectUnityProduct(options);
    }, []);

    const handleSubmit = useCallback(
        async (data: any) => {
            if (!selectEmployee) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione um funcionário!",
                });
                return;
            }
            if (!selectClient) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione um cliente!",
                });
                return;
            }
            if (!selectPriority) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione uma prioridade!",
                });
                return;
            }
            setLoading(true);
            if (service) {
                const response = await api.put(
                    `/service/${service.id}`,
                    {
                        ...data,
                        employee_id: selectEmployee.value,
                        client_id: selectClient.value,
                        priority: selectPriority.value,
                        observation: obs,
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
                        title: "OS atualizada",
                        description: "Ordem de serviço atualizada com sucesso!",
                    });
                    setLoading(false);
                }
            } 
            setLoading(false);
        },
        [
            selectEmployee,
            selectClient,
            selectPriority,
            selectStatus,
            service,
            obs,
            addToast,
            token 
        ],
    );

    const handleSubmitEnd = useCallback(
        async (data: any) => {
            if (!selectStatus) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione um status!",
                });
                return;
            }
            setLoading(true);
            if (service) {
                const response = await api.put(
                    `/service/${service.id}`,
                    {
                        ...data,
                        observation_solution: obsSolution,
                        status: selectStatus.value,
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
                        title: "OS atualizada",
                        description: "Ordem de serviço atualizada com sucesso!",
                    });
                    setLoading(false);
                }
            }
            setLoading(false);
        },
        [obsSolution, selectStatus, addToast, service, token],
    );

    const handleSubmitProductService = useCallback(
        async (data: any) => {
            if (!selectProduct) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione um produto!",
                });
                return;
            }
            if (!selectUnityProduct) {
                addToast({
                    type: "error",
                    title: "Erro no cadastro",
                    description: "Por favor selecione uma unidade!",
                });
                return;
            }
            setLoading(true);
            if (service) {
                const response = await api.post(
                    `/product_service`,
                    {
                        ...data,
                        service_id: service.id,
                        product_id: selectProduct.value,
                        unity: selectUnityProduct.value,
                        demand,
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
                        title: "Produto adicionado",
                        description: "Ordem de serviço atualizada com sucesso!",
                    });
                    setLoading(false);
                }
                setSelectProduct(undefined);
                setSelectUnityProduct(undefined);
                getServiceProduct();
                setDemand(false);
            }
            setLoading(false);
        },
        [
            selectProduct, 
            selectUnityProduct, 
            demand, 
            addToast, 
            getServiceProduct,
            service,
            token
        ],
    );

    useEffect(() => {
        async function getService() {
            setLoading(true);
            if (getId) {
                const response = await api.get(`/service/${getId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setService(response.data);
                setObs(response.data.observation);
                setObsSolution(response.data.observation_solution);
            }
            const response = await api.get("/clients", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            let emp: Array<Object> = [];
            let cli: Array<Object> = [];
            let pro: Array<Object> = [];
            if (response.data && response.data.length) {
                response.data.map((resp: any) => {
                    const data = { value: resp.id, label: resp.name };
                    cli.push(data);
                });
            }
            setClients(cli);

            const responseEmployees = await api.get("/employess", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (responseEmployees.data && responseEmployees.data.length) {
                responseEmployees.data.map((resp: any) => {
                    const data = { value: resp.id, label: resp.name };
                    emp.push(data);
                });
            }
            setEmployes(emp);

            const responseProducts = await api.get("/product", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (responseProducts.data && responseProducts.data.length) {
                responseProducts.data.map((resp: any) => {
                    if (resp.status === "enable" && resp.stock > 0) {
                        const data = {
                            value: resp.id,
                            label: resp.description,
                        };
                        pro.push(data);
                    }
                });
            }
            setProducts(pro);

            setLoading(false);
        }
        getService();
    }, [api]);

    async function getServiceProduct() {
        setLoading(true);
        if (getId) {
            const response = await api.get(`/product_service/${getId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setServiceProduct(response.data);
        }

        setLoading(false);
    }

    useEffect(() => {
        getServiceProduct();
    }, []);

    useEffect(() => {
        if (service && service.client && service.employee) {
            setSelectClient({
                value: service.client.id,
                label: service.client.name,
            });
            setSelectEmployee({
                value: service.employee.id,
                label: service.employee.name,
            });
            const priority = optionsPriority.find(
                (op) => service.priority === op.value,
            );
            setSelectPriority(priority);

            const status = optionsSoStatus.find(
                (op) => service.status === op.value,
            );
            setSelectStatus(status);
            setObs(service.observation);
        }
    }, [service]);

    return (
        <Container>
            <SideBar />
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
                    <ReactLoading color="green" height={"20%"} width={"20%"} />
                </div>
            ) : (
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
                            enableReinitialize={!!!getId}
                            initialValues={{
                                description:
                                    getId && service ? service.description : "",
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
                                                    options={employes}
                                                    placeholder="Selecione um Técnico"
                                                    onChange={
                                                        handleSelectEmployee
                                                    }
                                                    defaultValue={
                                                        selectEmployee
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <Select
                                                    options={clients}
                                                    placeholder="Selecione um Cliente"
                                                    onChange={
                                                        handleSelectClient
                                                    }
                                                    defaultValue={selectClient}
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
                                                        value={
                                                            values.description
                                                        }
                                                        onChange={handleChange}
                                                        id="description"
                                                        className="description"
                                                    />
                                                    <Select
                                                        className="priority"
                                                        options={
                                                            optionsPriority
                                                        }
                                                        placeholder="Prioridade"
                                                        onChange={
                                                            handleSelectPriority
                                                        }
                                                        defaultValue={
                                                            selectPriority
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <label
                                                    htmlFor="text-obs"
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    Observações
                                                </label>
                                                <textarea
                                                    id="text-obs"
                                                    className="text-obs"
                                                    defaultValue={obs}
                                                    onChange={(e: any) =>
                                                        setObs(e.target.value)
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            className="confirm"
                                            type="submit"
                                        >
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
                                quantity: 0,
                            }}
                            onSubmit={handleSubmitProductService}
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
                                                        placeholder="Selecione um Produto"
                                                        onChange={
                                                            handleSelectProduct
                                                        }
                                                    />
                                                </div>
                                                <div className="card-row">
                                                    <Select
                                                        className="product"
                                                        options={optionsProduct}
                                                        placeholder="Unidade"
                                                        onChange={
                                                            handleSelectUnityProduct
                                                        }
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
                                                            value={
                                                                values.quantity
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            id="quantity"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-column">
                                            <div
                                                className="card-row"
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "flex-start",
                                                }}
                                            >
                                                <Toggle
                                                    id="toogle-stock"
                                                    defaultChecked={false}
                                                    onChange={(e) =>
                                                        setDemand(
                                                            e.target.checked,
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="toogle-stock"
                                                    style={{
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    Cobrar produto
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <label
                                                    htmlFor="text-obs"
                                                    style={{
                                                        marginTop: "24px",
                                                    }}
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
                                                        {serviceProduct !==
                                                            null &&
                                                            serviceProduct.map(
                                                                (service) => (
                                                                    <tr>
                                                                        <td>
                                                                            {
                                                                                service
                                                                                    .product
                                                                                    .description
                                                                            }
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                textAlign:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            {
                                                                                service.quantity
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {`R$ ${service.product.price_sell}`}
                                                                        </td>
                                                                        <td>
                                                                            {service.demand ===
                                                                            1
                                                                                ? `R$ ${
                                                                                      service.quantity *
                                                                                      service
                                                                                          .product
                                                                                          .price_sell
                                                                                  }`
                                                                                : "R$ 0,00"}
                                                                        </td>
                                                                    </tr>
                                                                ),
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            className="confirm"
                                            type="submit"
                                        >
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
                            enableReinitialize={!!!getId}
                            initialValues={{
                                description_solution: service
                                    ? service.description_solution
                                    : "",
                            }}
                            onSubmit={handleSubmitEnd}
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
                                                        name="description_solution"
                                                        req={true}
                                                        value={
                                                            values.description_solution
                                                        }
                                                        onChange={handleChange}
                                                        id="description_solution"
                                                        className="description"
                                                    />
                                                    <Select
                                                        className="priority"
                                                        options={
                                                            optionsSoStatus
                                                        }
                                                        placeholder="Status"
                                                        onChange={
                                                            handleSelectStatus
                                                        }
                                                        defaultValue={
                                                            selectStatus
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-row">
                                            <div className="card-column">
                                                <label
                                                    htmlFor="text-obs"
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    Observações
                                                </label>
                                                <textarea
                                                    id="text-obs"
                                                    className="text-obs"
                                                    onChange={(e: any) =>
                                                        setObsSolution(
                                                            e.target.value,
                                                        )
                                                    }
                                                    defaultValue={obsSolution}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            className="confirm"
                                            type="submit"
                                        >
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
            )}
        </Container>
    );
};

export default Customer;
