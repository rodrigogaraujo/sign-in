/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, useCallback } from "react";

import { Formik, Form } from "formik";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import api from "../../../services/api";
import { useAuth } from "../../../hooks/Auth";
import { useToast } from "../../../hooks/Toast";
import SideBar from "../../../components/dashboard/SideBar";
import Input from "../../../components/Input";
import { Container, Content } from "./styles";

const ServiceOrder: React.FC = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [obs, setObs] = useState("");
  const [clients, setClients] = useState<any[]>([]);
  const [employes, setEmployes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectEmployee, setSelectEmployee] = useState();
  const [selectClient, setSelectClient] = useState();
  const [selectPriority, setSelectPriority] = useState();

  const optionsPriority = [
    { value: "slow", label: "Baixa" },
    { value: "regular", label: "Normal" },
    { value: "hight", label: "Alta" },
  ];

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
      const response = await api.post(
        "/service",
        {
          ...data,
          employee_id: selectEmployee,
          client_id: selectClient,
          priority: selectPriority,
          date: new Date(),
          status: "open",
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
          title: "OS adicionada",
          description: "Ordem de serviço criada com sucesso!",
        });
        setLoading(false);
        history.push("/os/list");
      }
    },
    [
      selectEmployee,
      selectClient,
      selectPriority,
      obs,
      addToast,
      token,
      history,
    ],
  );

  const handleSelectPriority = useCallback((options: any) => {
    if (options) setSelectPriority(options.value);
  }, []);

  const handleSelectEmployee = useCallback((options: any) => {
    if (options) setSelectEmployee(options.value);
  }, []);

  const handleSelectClient = useCallback((options: any) => {
    if (options) setSelectClient(options.value);
  }, []);

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      const response = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const emp: any[] = [];
      const cli: any[] = [];
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
      setLoading(false);
    }
    getUsers();
  }, [token]);

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
            <h1>Nova Ordem de Serviço</h1>
            <Formik
              initialValues={{
                description: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, values, resetForm }) => (
                <Form>
                  <div className="card">
                    <h2>Selecione o cliente e descreva o problema</h2>
                    <div className="card-row">
                      <div className="card-column">
                        <Select
                          options={employes}
                          placeholder="Selecione um Técnico"
                          onChange={handleSelectEmployee}
                        />
                      </div>
                    </div>
                    <div className="card-row">
                      <div className="card-column">
                        <Select
                          options={clients}
                          placeholder="Selecione um Cliente"
                          onChange={handleSelectClient}
                        />
                      </div>
                    </div>
                    <div className="card-row" style={{ margin: "20px 0" }}>
                      <div className="card-column">
                        <div className="card-row">
                          <Input
                            type="text"
                            label="Descrição do problema"
                            name="description"
                            req
                            value={values.description}
                            onChange={handleChange}
                            id="description"
                            className="description"
                          />
                          <Select
                            className="priority"
                            options={optionsPriority}
                            placeholder="Prioridade"
                            onChange={handleSelectPriority}
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
                          onChange={(e: any) => setObs(e.target.value)}
                        >
                          Observações
                        </label>
                        <textarea id="text-obs" className="text-obs" />
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="confirm" type="submit">
                      Cadastrar
                    </button>
                    <button
                      className="cancel"
                      type="button"
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

export default ServiceOrder;
