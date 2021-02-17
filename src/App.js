import React from "react";
import "./App.css";
import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { AccountBox } from "./components/LoginPage/index";

const AppContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>

      <Switch>
        <Route exact path ="/">
          <AppContainer>
            <AccountBox/>
          </AppContainer>
        </Route>

        <Route path ="/main">    
            <MainPage/>
        </Route>
      
      

      </Switch>


      </Router>
    );
  }
}
