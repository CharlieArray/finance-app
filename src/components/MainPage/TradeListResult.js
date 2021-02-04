import React from "react";
import styled from "styled-components";

const TradeResultContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  padding: 5px;
  align-content: center;
  width: 200px;
  height: auto;
  border: 2px solid black;
`;

const TradeItem = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  padding: 20px;
`;

export default class TradeListResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TradeResultContainer>
        <TradeItem>
          {this.props.stocks.map((stock) => {
            return (
              <div>
                <h3>name: {stock}</h3>
              </div>
            );
          })}
        </TradeItem>
      </TradeResultContainer>
    );
  }
}
