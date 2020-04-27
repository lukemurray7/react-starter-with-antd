import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import NavBar from "../../components/navbar";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Router>
        <Header style={{ padding: 0 }}>
          <NavBar />
        </Header>
        <Content
          style={{ padding: 10, background: "white", minHeight: "81vh" }}
        >
          <Routes />
        </Content>
        <Footer>Made by luke</Footer>
      </Router>
    </Layout>
  );
};

export default App;
