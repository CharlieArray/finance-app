import React from "react";
import MainPageBanner from './MainPageBanner'
import TradeListForm from "./TradeListForm";
import TradeListResult from "./TradeListResult";
import TokenService from "../../services/Token-Service"

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

  //componentDidMount for GET all stocks currently


  componentDidMount(){
    fetch("http://localhost:8000/watchlist/stocks", {
      method: "get",
      headers: {
        "content-type": "application/json",
        "authorization": "bearer " + TokenService.getAuthToken()
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error)
      //put data in setState
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //post request
  }

    // displayResults = (data) => { 
    //   this.setState({ stock: this.state.stock.concat(event.target.stock.value) });
    // }


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
