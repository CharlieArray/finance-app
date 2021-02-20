import React from "react";
import styled from "styled-components";

const TradeListContainer = styled.div`
  display: block;
  text-align: center;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  width: 275px;
  border: 2px solid black;
`;

const SubmitButton = styled.button`
    width: auto;
    height: 50%;
    margin: 3px;
    padding: 5px 15%;
    color: #fff;
    font-size: 12px;
    font-weight:400;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(139,231,151);
    background: linear-gradient(45deg,
   rgba(139,231,151,1) 44%, 
   rgba(148,201,233,1) 73%); 
`

export default class TradeList extends React.Component {

  render() {
    return (
      <div>
        <TradeListContainer>
          <form onSubmit={this.props.handleSubmit}>
            <label>
              Search for Stock Price:
              <input 
              name="stock" 
              type="text" 
              placeholder="ex: AAPL, AMZN, MSFT"
              onChange ={this.props.handleChange}
              ></input>
            </label>
              <br/>
            <label>
            
            </label>
            <SubmitButton 
            type="submit"
            value="Submit"
            >Submit</SubmitButton>
          </form>
        </TradeListContainer>
      </div>
    );
  }
}
