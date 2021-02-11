import React from "react";
import styled from "styled-components";

const TradeResultContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  align-content: center;
  width: 275px;
  height: auto;
  padding: 5px;
  border-radius: 15px;
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
          {this.props.stock.map((stock) => {
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
