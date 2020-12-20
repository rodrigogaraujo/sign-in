import React from "react";

import { Container, Content } from "./styles";

import SideBar from "../../components/dashboard/SideBar";
import Card from "../../components/dashboard/Card";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <div className="os">
          <h1>Ordem de serviço</h1>
          <ul>
            <li>
              <Card title="Esta semana" value="55" type="success" />
            </li>
            <li>
              <Card title="Abertas hoje" value="5" type="info" />
            </li>
            <li>
              <Card title="Abertas" value="7" type="danger" />
            </li>
            <li>
              <Card title="Concluídas" value="55" />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
