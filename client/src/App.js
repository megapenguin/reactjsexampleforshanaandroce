import "./App.css";
import "antd/dist/antd.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//const { Header, Content, Footer, Sider } = Layout;
import { PageOne, PageTwo, Admin } from "./views";
function App() {
  
  return (
    <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/pageone">
            <PageOne/>
          </Route>
          <Route exact path="/pagetwo">
            <PageTwo/>
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
            <Route component={() => <h1>URL NOT FOUND</h1>} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
