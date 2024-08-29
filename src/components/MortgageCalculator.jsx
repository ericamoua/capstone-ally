import React, { useState } from "react";
import './styles/morgage.module.css';

const MortgageCalculator = () => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const handleCalculate = () => {
    setIsLoading(true);
    setIsCalculated(true);
  
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  
    // Perform your calculation here...
  };
    return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto calculate-form">
          <div class="card card-body text-center mt-5">
            <h1 class="heading display-5 pb-3">Loan Calculator</h1>
            <form id="loan-form">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    id="amount"
                    placeholder="Loan Amount"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">%</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    id="interest"
                    placeholder="Interest"
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="number"
                  id="years"
                  class="form-control"
                  placeholder="Years To Repay"
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-dark btn-block"
                  onClick={handleCalculate}
                >
                  Calculate
                </button>
              </div>
            </form>
           
            {isCalculated && (
            <>
              {isLoading ? (
            <div id="loading">
              <img
                src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                alt="HZ"
              />
            </div>

            ) : (
          
            <div id="result">
              <h5>Results</h5>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Monthly Payment</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    id="monthly-payment"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Total Payment</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    id="total-payment"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Total Interest</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    id="total-interest"
                    disabled
                  />
                </div>
              </div>
            </div>
              )}
          </>
              )}
          </div>
        </div>
      </div>
    </div>

    )
}
export default MortgageCalculator;