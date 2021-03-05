import React from "react";
import Discountedcashflow from '../Stockmodels/Discountedcashflow/Discountedcashflow';
import Dividenddiscount from '../Stockmodels/Dividenddiscount/Divienddiscountmodel';
import '../Modelselection/Modelselection.css';
import { Route, NavLink } from "react-router-dom";

const modelSelection = () => {
  return (
    <div>
      <div className="model-selection">
        <button className="dcf-button" onClick={this.modelSubmitInputHandler}>
          Discounted Cashflow Model
        </button>
        <button className="dd-button" onClick={this.modelSubmitInputHandler}>
          <NavLink className="dd-link" to="/dividenddiscount">
            Dividend Discount Model
          </NavLink>
        </button>
      </div>
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
};

export default modelSelection;
