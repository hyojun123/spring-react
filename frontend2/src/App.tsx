import React, { useEffect } from "react";
import Header from "./container/Header";
import About from "./container/About";
import Lotto from "./container/Lotto";
import Board from "./container/Board";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";
import { theme } from "./core/theme";
import Contacts from "./container/Contacts";
import data from "./helper/header.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    document.body.style.margin = "0px";
  }, []);

  return (
    <div
      className="main"
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: theme.colors?.background,
      }}
    >
      <BrowserRouter>
        <Menu navs={data["navbar-items"]} />
        <Switch>
          <Route exact={true} path="/" component={Header} />
          <Route exact={true} path="/lotto" component={Lotto} />
          <Route exact={true} path="/board" component={Board} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
