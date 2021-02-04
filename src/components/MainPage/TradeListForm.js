import React from "react";
import styled from "styled-components";

const TradeListContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 5px;
  align-content: center;
  width: 200px;
  border: 2px solid black;
`;

export default class TradeList extends React.Component {

  render() {
    return (
      <div>
        <TradeListContainer>
          <form onSubmit={this.props.handleSubmit}>
            <label>
              Create Stock Watchlist
              <input 
              name="stocks" 
              type="text" 
              placeholder="Apple"
              onChange ={this.props.handleChange}
              ></input>
            </label>
              <br/>
            <label>
              Stock Names
              <input 
              type="text" 
              value={this.props.stocks}
              ></input>
            </label>
            <input 
            type="submit"
            value="Submit"
            />
          </form>
        </TradeListContainer>
      </div>
    );
  }
}
