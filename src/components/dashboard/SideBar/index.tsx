import React from "react";
import {
    FiBell,
    FiGrid,
    FiUsers,
    FiUserPlus,
    FiEdit3,
    FiEdit,
    FiList,
    FiShoppingCart,
    FiShoppingBag,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { Container } from "./styles";

import logo from "../../../assets/logo.png";

const SideBar = () => {
    const location = useLocation();
    const pageActive = location.pathname.replace("/", "");
    console.log(pageActive);
    return (
        <Container>
            <img src={logo} alt="G3 Infotech" />
            <Link
                to="/alert"
                className={pageActive === "alert" ? "alert active" : "alert"}
            >
                <FiBell /> <span>Alertas</span>{" "}
                <span className="alert-span">2</span>
            </Link>
            <Link
                to="/dashboard"
                className={pageActive === "dashboard" ? "active" : ""}
            >
                <FiGrid /> <span>Home</span>
            </Link>
            <span>Clientes</span>
            <Link
                to="/customer"
                className={pageActive === "customer" ? "active" : ""}
            >
                <FiUserPlus />
                <span>Novo</span>
            </Link>
            <Link
                to="/customer/list"
                className={pageActive === "customer/list" ? "active" : ""}
            >
                <FiUsers />
                <span>Listar</span>
            </Link>
            <span>Ordem de serviço</span>
            <Link to="/os" className={pageActive === "os" ? "active" : ""}>
                <FiEdit />
                <span>Novo</span>
            </Link>
            <Link
                to="/os/list"
                className={pageActive === "os/list" ? "active" : ""}
            >
                <FiEdit3 />
                <span>Abertas</span>
            </Link>
            <Link
                to="/os/list-all"
                className={pageActive === "os/list-all" ? "active" : ""}
            >
                <FiList /> <span>Listar todas</span>
            </Link>
            <span>Produtos</span>
            <Link
                to="/product"
                className={pageActive === "product" ? "active" : ""}
            >
                <FiShoppingCart />
                <span>Novo</span>
            </Link>
            <Link
                to="/product/list"
                className={pageActive === "product/list" ? "active" : ""}
            >
                <FiShoppingBag />
                <span>Listar todos</span>
            </Link>
        </Container>
    );
};

export default SideBar;
