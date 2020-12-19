import React, { useState, useEffect } from "react";

import MaterialTable, { MTableToolbar } from "material-table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ReactLoading from "react-loading";

import api from "../../../../../services/api";
import { useAuth } from "../../../../../hooks/Auth";
import { Container, Content } from "../../styles";
import SideBar from "../../../../../components/dashboard/SideBar";
import icons from "../../../../../utils/icons";

const columns = [
    {
        title: "Nome",
        field: "name",
    },
    {
        title: "Status",
        field: "status",
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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            const response = await api.get("/clients", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(response.data);
        }
        getUsers();
        setLoading(false);
    }, [api]);

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
                    <MaterialTable
                        icons={icons}
                        columns={columns}
                        data={users ? users : []}
                        title="Usuários"
                        localization={localization}
                        actions={[
                            {
                                icon: () => <FiEdit />,
                                tooltip: "Editar",
                                onClick: (event, rowData) => {},
                            },
                            {
                                icon: () => <AiOutlineDelete />,
                                tooltip: "Deletar",
                                onClick: (event, rowData) => {},
                            },
                        ]}
                        options={{
                            actionsColumnIndex: 3,
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
                                        <h3>Usuários</h3>
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
