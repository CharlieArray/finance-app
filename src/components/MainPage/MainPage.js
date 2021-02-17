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
      {name: "MongoDB" , price: 395.5},
       ],
    };
  }


  // for GET all stocks currently
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

  handleDelete = (event) => {
    event.preventDefault()
    const stockToDelete = {
      id: ("20")
    }

    // NEED TO PASS IN TICKER NAME FROM RESULT COMPONENT TO PASS INTO FETCH REQUEST TEMPLATE LITERAL
    
     fetch(`http://localhost:8000/watchlist/stocks/${stockToDelete.id}`, {
      method: "delete", 
      headers: {
        "content-type": "application/json",
        "authorization": "bearer " + TokenService.getAuthToken()
      },
    })
      .then(response => response.json())
      .then(data => console.log('deleted'))
    
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
