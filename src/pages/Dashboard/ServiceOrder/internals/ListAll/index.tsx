/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from "react";

import ReactLoading from "react-loading";
import MaterialTable, { MTableToolbar } from "material-table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import api from "../../../../../services/api";
import { useAuth } from "../../../../../hooks/Auth";
import icons from "../../../../../utils/icons";
import { Container, Content } from "../../styles";
import SideBar from "../../../../../components/dashboard/SideBar";

const columns = [
  {
    title: "Nome",
    render: (rowData: any) => rowData.client.name,
  },
  {
    title: "Endereço",
    render: (rowData: any) => rowData.client.address,
  },
  {
    title: "Prioridade",
    width: 40,
    render: (rowData: any) => {
      if (rowData.client.priority === "slow") {
        return "Baixa";
      }
      if (rowData.client.priority === "regular") {
        return "Normal";
      }
      return "Alta";
    },
  },
  {
    title: "Status",
    render: (rowData: any) => {
      if (rowData.status === "open") {
        return "Aberta";
      }
      if (rowData.status === "awaiting") {
        return "Aguardando";
      }
      return "Fechada";
    },
    width: 40,
  },
];
const localization = {
  header: {
    actions: "",
  },
  toolbar: {
    searchPlaceholder: "Pesquisar",
    searchTooltip: "Pesquisar",
  },
  pagination: {
    labelDisplayedRows: "{from}-{to} de {count}",
    labelRowsSelect: "por pagina",
    labelRowsPerPage: "registros por pagina",
    firstTooltip: "Primeira Página",
    previousTooltip: "Página Anterior",
    nextTooltip: "Próxima Página",
    lastTooltip: "Última Página",
  },
};

const List: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const history = useHistory();
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function getServices() {
      setLoading(true);
      const response = await api.get("/service", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(response.data);
      setLoading(false);
    }
    getServices();
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
          <MaterialTable
            icons={icons}
            columns={columns}
            data={services}
            title="Usuários"
            localization={localization}
            actions={[
              {
                icon: () => <FiEdit />,
                tooltip: "Editar",
                onClick: (event, rowData: any) => {
                  history.push(`/os/list/${rowData.id}`);
                },
              },
              {
                icon: () => <AiOutlineDelete />,
                tooltip: "Deletar",
                onClick: (event, rowData) => {},
              },
            ]}
            options={{
              actionsColumnIndex: 4,
              showTitle: false,
              pageSize: 8,
            }}
            components={{
              Toolbar: (props) => (
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexBasis: "50%",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <h3>Todas as OS</h3>
                  </div>
                  <div
                    style={{
                      flexBasis: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MTableToolbar {...props} />
                  </div>
                </div>
              ),
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default List;
