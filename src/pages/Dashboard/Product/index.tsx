/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from "react";

import { Formik, Form } from "formik";
import Select from "react-select";
import Toggle from "react-toggle";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import api from "../../../services/api";
import { useAuth } from "../../../hooks/Auth";
import { useToast } from "../../../hooks/Toast";
import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";

const Customer: React.FC = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [typeProduct, setTypeProduct] = useState();
  const [unity, setUnity] = useState();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [active, setActive] = useState(false);

  const options = [
    { value: "product", label: "Produto" },
    { value: "service", label: "Serviço" },
  ];
  const optionsUnity = [
    { value: "und", label: "Und" },
    { value: "cx", label: "Cx" },
  ];

  const handleSelecType = useCallback((opts: any) => {
    if (opts) setTypeProduct(opts.value);
  }, []);

  const handleSelectUnity = useCallback((opts: any) => {
    if (opts) setUnity(opts.value);
  }, []);

  const handleSubmit = useCallback(
    async (data: any) => {
      if (!typeProduct) {
        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Por favor selecione um tipo!",
        });
        return;
      }
      if (!unity) {
        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Por favor selecione uma unidade!",
        });
        return;
      }
      setLoading(true);
      const response = await api.post(
        "/product",
        {
          ...data,
          type: typeProduct,
          unity,
          status: active ? "enable" : "disable",
          alert: alert ? "enable" : "disable",
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
          title: "Produto cadastrado",
          description: "Produto cadastrado com sucesso!",
        });
        setLoading(false);
        history.push("/product/list");
      }
    },
    [unity, typeProduct, alert, active],
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
            <ReactLoading color="green" height="20%" width="20%" />
          </div>
        ) : (
          <>
            <h1>Novo produto</h1>
            <Formik
              initialValues={{
                description: "",
                stock: "",
                stock_alert: "",
                price_buy: "",
                price_sell: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, values, resetForm }) => (
                <Form>
                  <div className="card">
                    <h2>Dados do produto</h2>
                    <div className="card-row" style={{ margin: "0 0 20px 0" }}>
                      <div className="card-column">
                        <div className="card-row">
                          <Toggle
                            id="toogle-stock"
                            defaultChecked={false}
                            onChange={(e) => setActive(e.target.checked)}
                          />
                          <label
                            htmlFor="toogle-stock"
                            style={{
                              marginLeft: "8px",
                            }}
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
                          req
                          value={values.description}
                          onChange={handleChange}
                          id="description"
                        />
                      </div>
                      <div className="card-column">
                        <Select
                          options={options}
                          placeholder="Selecione um tipo"
                          onChange={handleSelecType}
                        />
                      </div>

                      <div className="card-column">
                        <Select
                          options={optionsUnity}
                          placeholder="Selecione uma unidade"
                          onChange={handleSelectUnity}
                        />
                      </div>
                    </div>
                    <div className="card-row" style={{ margin: "20px 0" }}>
                      <Toggle
                        id="toogle-stock"
                        defaultChecked={false}
                        onChange={(e) => setAlert(e.target.checked)}
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
                          masked
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
                          value={values.stock_alert}
                          onChange={handleChange}
                          id="stock_alert"
                        />
                      </div>
                      <div className="card-column">
                        <Input
                          type="text"
                          label="Preço de compra"
                          name="price_buy"
                          req
                          value={values.price_buy}
                          onChange={handleChange}
                          id="price_buy"
                        />
                      </div>
                      <div className="card-column">
                        <Input
                          type="text"
                          label="Preço de Venda"
                          name="price_sell"
                          req
                          value={values.price_sell}
                          onChange={handleChange}
                          id="price_sell"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="confirm" type="submit">
                      Cadastrar
                    </button>
                    <button className="cancel" onClick={() => resetForm()}>
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
