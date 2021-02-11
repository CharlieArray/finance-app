import React from "react";
import styled from "styled-components";

const TradeListContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 5px;
  align-content: center;
  border-radius: 15px;
  width: 275px;
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
              name="stock" 
              type="text" 
              placeholder="Apple"
              onChange ={this.props.handleChange}
              ></input>
            </label>
              <br/>
            <label>
            
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
