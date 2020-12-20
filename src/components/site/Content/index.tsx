import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const Content: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
