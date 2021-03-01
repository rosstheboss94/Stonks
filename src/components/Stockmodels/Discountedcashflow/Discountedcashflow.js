import React from "react";
import "../Discountedcashflow/Discountedcashflow.css";

const discountedcashflow = (props) => {
  let DCF = props.cf1 / 2;
  console.log(props);

  

  return (
    <div className="discountedcashflow">
      <div className="flex-container">
        <h1>Discounted Cash Flow (DCF)</h1>
        <h2>Your DCF is {DCF}{console.log(props)}</h2>
        <p>
          How Discounted Cash Flow Works The purpose of DCF analysis is to
          estimate the money an investor would receive from an investment,
          adjusted for the time value of money. The time value of money assumes
          that a dollar today is worth more than a dollar tomorrow because it
          can be invested. As such, a DCF analysis is appropriate in any
          situation where a person is paying money in the present with
          expectations of receiving more money in the future.
        </p>
        <p>
          For example, assuming a 5% annual interest rate, $1.00 in a savings
          account will be worth $1.05 in a year. Similarly, if a $1 payment is
          delayed for a year, its present value is $.95 because it cannot be put
          in your savings account to earn interest.
        </p>
        <p>
          DCF analysis finds the present value of expected future cash flows
          using a discount rate. Investors can use the concept of the present
          value of money to determine whether future cash flows of an investment
          or project are equal to or greater than the value of the initial
          investment. If the value calculated through DCF is higher than the
          current cost of the investment, the opportunity should be considered.
        </p>
        <p>
          In order to conduct a DCF analysis, an investor must make estimates
          about future cash flows and the ending value of the investment,
          equipment, or other asset. The investor must also determine an
          appropriate discount rate for the DCF model, which will vary depending
          on the project or investment under consideration, such as the company
          or investor's risk profile and the conditions of the capital markets.
          If the investor cannot access the future cash flows, or the project is
          very complex, DCF will not have much value and alternative models
          should be employed.
        </p>
      </div>
    </div>
  );
};

export default discountedcashflow;
