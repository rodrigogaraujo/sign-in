import React, { forwardRef } from "react";

import { Container, Content } from "../../styles";
import SideBar from "../../../../../components/dashboard/SideBar";
import MaterialTable, { MTableToolbar } from "material-table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

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
    const mock = [
        { name: "Rodrigo Gomes Araújo", status: "Ativo" },
        { name: "G3 Infotech", status: "Bloqueado" },
    ];
    return (
        <Container>
            <SideBar />
            <Content>
                <MaterialTable
                    icons={icons}
                    columns={columns}
                    data={mock}
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
            </Content>
        </Container>
    );
};

export default List;
