import React from "react";
import "./App.css";
import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";
import { MyContext } from "./MyContext";
import { Link, Route } from "react-router-dom";
import { AccountBox } from "./components/WelcomePage/index";
import BackgroundVideo from "./components/WelcomePage/VideoBackground"

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
      <>
        <AppContainer>
          <AccountBox/>
        </AppContainer>
      </>
    );
  }
}
