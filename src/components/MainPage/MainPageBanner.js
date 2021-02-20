import React from "react";
import styled from "styled-components";
import envelopeMoney2 from '../images/envelopeMoney2.jpg'

const Banner = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  text-align:center;
  height: 175px;
  width: 300px;
  background: linear-gradient(45deg,
   rgba(139,231,151,1) 44%, 
   rgba(148,201,233,1) 73%);  
`;

const HeaderText = styled.h1`
  font-size: 24px;
  margin: 10px;
`

const SmallerHeaderText = styled.h2`
  font-size: 18px;
  margin: 10px;
`



function MainPageBanner() {
  return (
    <>
      <Banner>
        <HeaderText>Welcome to Envelope
        <img src={envelopeMoney2} alt="this is money envelope" width="75" height="75"></img>

        </HeaderText>

        <SmallerHeaderText>
          The Finance App
          </SmallerHeaderText>
      </Banner>
    </>
  );
}

export default MainPageBanner;
