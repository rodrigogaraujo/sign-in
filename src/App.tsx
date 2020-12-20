import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Global from "./styles/global";
import Routes from "./routes/routes";
import AppProvider from "./hooks/index";

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <Global />
    </Router>
  );
};

export default App;
