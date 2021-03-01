import React, { Component } from "react";
import axios from "axios";
import Dividenddiscount from "../../components/Stockmodels/Dividenddiscount/Divienddiscountmodel";
import Discountedcashflow from "../../components/Stockmodels/Discountedcashflow/Discountedcashflow";
import DCFmodal from "../../components/Modals/Discountedcashflow/DCFmodal";
import "../Stockpick/Stockpick.css";
import { Route, NavLink } from "react-router-dom";


axios.defaults.validateStatus = (status) => {
      
  return status >= 200 && status < 300;
}


class Stockpick extends Component {
  state = {
    stockPick: "",
    stockSubmit: false,
    modelSubmit: false,
    stockData: "",
    stockDataList: [],
    cashFlowList: [],
    rate: "",
    modal: false,
    status: '',
    checkStatus: false
  };

  

  stockInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  yearsInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  stockSubmitInput = (event) => {
    event.preventDefault();
    this.setState({
      stockSubmit: true,
      modelSubmit: false,
      modal: true
    });
  };

  modelSubmitInputHandler = (event) => {
    event.preventDefault();
    this.setState({
      modelSubmit: true,
    });
  };

  shouldComponentUpdate() {
    if (this.state.stockSubmit === false) {
      return true;
    } else if (this.state.modelSubmit === true) {
      return true;
    } else if (this.state.checkStatus === true) {
      return true;
    } 
    else{
      return false;
    }
  }

  render() {
    let updatedStock;
    let stockDataArr;
    let cashFlow = [];
    let stockInput;
    let dcfModal;
    
    
    if (this.state.modelSubmit === true) {
      stockInput = (
        <div className="input">
          <form>
            <input
              type="text"
              name="stockPick"
              value={this.state.stockPick}
              onChange={this.stockInputHandler}
            />
            <button onClick={this.stockSubmitInput}> Submit</button>
          </form>
        </div>
      );
    }
    
    const getStock = async (updatedStock, stockDataArr, cashFlow) => {
      try{
        let response = await axios.get(
          "https://api.polygon.io/v2/reference/financials/" +
            updatedStock +
            "?limit=10&type=Y&sort=-reportPeriod&apiKey=UGuFwEQXJHjqRevkHueNpGxY2bREKkBF"
        );
        await this.setState({status: response.status});
        await this.setState({ stockData: response.data });
        console.log(this.state.stockData);
        console.log(response.status);
        stockDataArr = Object.entries(this.state.stockData);
        await this.setState({ stockDataList: stockDataArr });
        console.log(this.state.stockDataList);
        for (let index = 0; index <= 9; index++) {
          cashFlow.push(stockDataArr[1][1][index].freeCashFlow);
          console.log(cashFlow);
          if (index == 9) {
            await this.setState({ cashFlowList: cashFlow });
            console.log(this.state.cashFlowList);
          }
        }
        
        
       // await this.setState({checkStatus: true})
        console.log(this.state.status);
        this.setState({ stockSubmit: false });
        
      }
      catch (err) {
        console.log(err);
      }
    }
    
    if (this.state.stockSubmit === true) {
      updatedStock = this.state.stockPick 
      getStock(updatedStock, stockDataArr, cashFlow);
      dcfModal = <DCFmodal  status={this.state.status}  />
       
    }
    
    
    return (
      <div>
        <div className="model-selection">
          <button className="dcf-button" onClick={this.modelSubmitInputHandler}>Discounted Cashflow Model
          </button>
          <button className="dd-button" onClick={this.modelSubmitInputHandler}>
            <NavLink className="dd-link" to="/dividenddiscount">
              Dividend Discount Model
            </NavLink>
          </button>
        </div>
        {stockInput}
        {dcfModal}
        
        <div>
          <Route
            path="/discountedcashflow"
            exact
            render={() => <Discountedcashflow
              cf1={this.state.cashFlowList[0]}
              cf2={this.state.cashFlowList[1]}
              cf3={this.state.cashFlowList[2]} />
            }
          />
          <Route path="/dividenddiscount" exact component={Dividenddiscount} />
        </div>
      </div>
    );
  }
}

export default Stockpick;





