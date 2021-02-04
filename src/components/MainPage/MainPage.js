import React from "react";
import MainPageBanner from './MainPageBanner'
import TradeListForm from "./TradeListForm";
import TradeListResult from "./TradeListResult";

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stocks: ["Apple", "Microsoft", "MongoDB"],
      last_price: [133, 243, 395 ]

    };
  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ stock: e.target.value });
  //   console.log(e.target.value);
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ stocks: this.state.stocks.concat(event.target.value) });
  };


  render() {
    return (
      <>
        <MainPageBanner />
        <TradeListForm 
        stocks={this.state.stocks}
        handleSubmit = {this.handleSubmit}
        />
        <TradeListResult 
        stocks={this.state.stocks}
        last_price = {this.state.last_price}
        />
      </>
    );
  }
}
