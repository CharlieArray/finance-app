import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-content: center;
  justify-content: center;
  border: 3px solid black;
  height: 100px;
  width: 500px;
`;

const HeaderText = styled.h1`
  font-size: 22px;
`;

function MainPageBanner() {
  return (
    <>
      <Banner>
        <HeaderText>Welcome to the Brokerage</HeaderText>
      </Banner>
    </>
  );
}

export default MainPageBanner;
