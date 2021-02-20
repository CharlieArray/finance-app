import React from "react";
import styled from "styled-components";

const TradeResultContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 0px;
  width: 275px;
  height: auto;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid black;
  margin-bottom: 30px;
`;

const TradeItem = styled.div`
  margin: auto;
  text-align: center;
  height: auto;
  width: 200px;
  padding: 30px;
`;

const FlexParent = styled.div`
  display: flex;
`
const FlexChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`

const FlexFirstChild = styled.div`
  margin-right: 20px;
`


export default class TradeListResult extends React.Component {

  render() {
    return (
    <>
      <FlexChild><h2>Your Stock Watchlist 📈:</h2></FlexChild>
      <TradeResultContainer>
        <TradeItem>
          {this.props.stocks.map((stock) => {
            return (
              <FlexParent>
                <FlexFirstChild>
                  <h3>{stock.ticker} : ${stock.price}</h3>
                </FlexFirstChild>           
                
                <FlexChild>
                  <button name="stock" onClick =  {e =>this.props.handleDelete(stock.id)}> Delete</button>
                  {/* Need a way to assign stock.id (from database) to Flex Parent for event Handler() to delete*/}
                </FlexChild>

              </FlexParent>
            );
          })}
        </TradeItem>
      </TradeResultContainer>
    </>
    );
  }
}
