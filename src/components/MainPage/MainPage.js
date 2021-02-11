import React from "react";
import MainPageBanner from './MainPageBanner'
import TradeListForm from "./TradeListForm";
import TradeListResult from "./TradeListResult";

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stock: ["Apple", "Microsoft", "MongoDB"],
      price: [133, 243, 395 ]
    };
  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ stock: e.target.value });
  //   console.log(e.target.value);
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ stock: this.state.stock.concat(event.target.stock.value) });
  };


  render() {
    return (
      <>
        <MainPageBanner />
        <TradeListForm 
        stock={this.state.stock}
        handleSubmit = {this.handleSubmit}
        />
        <TradeListResult 
        stock={this.state.stock}
        last_price = {this.state.price}
        />
      </>
    );
  }
}
