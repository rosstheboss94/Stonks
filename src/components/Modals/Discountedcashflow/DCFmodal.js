import  React, { Component } from "react";
import axios from "axios";
import "../Discountedcashflow/DCFmodal.css";



class DCFmodal extends Component {
 state ={
  status: '',
  stockData:'',
  stockDataList: [],
  cashFlowList: [],
  getting: "Getting stock data...",
  done: "Ready"
 }

  render (){
    let updatedStock;
    let stockDataArr;
    let cashFlow = [];
    console.log(this.prop)
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
        console.log(this.state.status);
        this.setState({ stockSubmit: false });
        
      }
      catch (err) {
        console.log(err);
      }
    }

    getStock(updatedStock, stockDataArr, cashFlow);

    return (
      <div>
        <div className="modal-backdrop">
          <div className="modal">
            <div className="cancel-modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                <button></button>
              </svg>
            </div>
            <div>spinner</div>
            <div className="modal-messages"></div>
            <div className="modal-done"><button>Done</button></div>
          </div>
        </div>
      </div>
    );
  };
}
 
export default DCFmodal;
   


  
  

  

