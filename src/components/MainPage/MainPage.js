import React from "react";
import MainPageBanner from './MainPageBanner'
import TradeListForm from "./TradeListForm";
import TradeListResult from "./TradeListResult";
import TokenService from "../../services/Token-Service"

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stocks: [
        {name: "Apple", price: 133.40}, 
        {name: "Microsoft", price: 243.90}, 
        ],
    };
  }

 componentDidMount(){
  this.getData()
 }

 componentWillUnmount(){
   this.handleDelete()
 }

  getData = () => {
    fetch("http://localhost:8000/watchlist/stocks", {
      method: "get",
      headers: {
        "content-type": "application/json",
        "authorization": "bearer " + TokenService.getAuthToken()
      }
    })
      .then(response => response.json())
      .then(data => this.setState({stocks: data}))
      .catch(console.error)
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const stock = {
      stock: (event.target.stock.value).toUpperCase()
    }
  
    //fetch for front end/ request for back end
    fetch(`http://localhost:8000/watchlist/stocks/${stock.stock}`, {
      method: "post", 
      headers: {
        "content-type": "application/json",
        "authorization": "bearer " + TokenService.getAuthToken()
      },
      body: JSON.stringify(stock)
    })
      .then(response => response.json())
      .then( data => this.getData() )

  };

  handleDelete = (id) => {

     fetch(`http://localhost:8000/watchlist/stocks/${id}`, {
      method: "delete", 
      headers: {
        "content-type": "application/json",
        "authorization": "bearer " + TokenService.getAuthToken()
      },
    })
      .then(data => this.getData())
    
  }

  render() {
    return (
      <>
        <MainPageBanner />
        <TradeListForm 
          stocks={this.state.stocks}
          handleSubmit = {this.handleSubmit}
        />
        <TradeListResult 
          handleDelete = {this.handleDelete}
          stocks={this.state.stocks}
        />
      </>
    );
  }
}
