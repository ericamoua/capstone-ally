import React, { useState } from "react";

const MortgageCalculator = () => {
  // these go into api
  const [home_value, setHome_value] = useState('');
  const [interest, setInterest] = useState('');
  const [duration_years, setDuration_years] = useState('');
  const [downpayment, setDownpayment] = useState('');
  const [monthly_hoa, setMonthly_hoa] = useState('');
  const [annual_property_tax, setAnnual_property_tax] = useState('');

  // these come from api
  const [monthly_payment, setMonthly_payment] = useState('');
  const [annual_payment, setAnnual_payment] = useState('');
  const [total_interest_paid, setTotal_interest_paid] = useState('');
  const [loanAmount, setLoanAmount] = useState('');

  // loading state
  const [isLoading, setIsLoading] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = async () => {
    let output;

    const response = await fetch(`https://api.api-ninjas.com/v1/mortgagecalculator?home_value=${home_value}&downpayment=${downpayment}&interest_rate=${interest}&duration_years=${duration_years}&monthly_hoa=${monthly_hoa}&annual_property_tax=${annual_property_tax}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_Mortgage_Calculator_API_KEY,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      output = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // Deconstruct the output object
    const { annual_payment, monthly_payment, total_interest_paid } = output;

    // Set the state with the output values
    setMonthly_payment(monthly_payment.total);
    setAnnual_payment(annual_payment.total);
    setTotal_interest_paid(total_interest_paid);
    setLoanAmount((home_value - downpayment));

    setIsLoading(true);
    setIsCalculated(true);

   // Perform your calculation here after 3 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto calculate-form">
          <div className="card card-body text-center">
            <h1 className="heading display-5 pb-3">Mortgage Calculator</h1>
            <form id="loan-form" onSubmit={handleCalculate}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="home_value"
                    placeholder="Home Value"
                    value={home_value}
                    onChange={(e) => setHome_value(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="downpayment"
                    placeholder="Down Payment"
                    value={downpayment}
                    onChange={(e) => setDownpayment(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">%</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="interest"
                    placeholder="Interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="years"
                  className="form-control"
                  placeholder="Years To Repay"
                  value={duration_years}
                  onChange={(e) => setDuration_years(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="hoa"
                    placeholder="Monthly HOA Payment"
                    value={monthly_hoa}
                    onChange={(e) => setMonthly_hoa(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">%</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="property_tax"
                    placeholder="Annual Property Tax"
                    value={annual_property_tax}
                    onChange={(e) => setAnnual_property_tax(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-dark btn-block m-lg-3"
                  type="button"
                  onClick={handleCalculate}
                >
                  Calculate
                </button>
              </div>
            </form>
           

              { isCalculated && <>
                {isLoading ? (
                  <div id="loading">
                    <img
                      style={{ width: '100%' }}
                      src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                      alt="Loading"
                    />
                  </div>
                ) : (
                  <div id="result">
                    <h5>Results</h5>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Monthly Payment</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="monthly-payment"
                          value={'$' + monthly_payment.toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Total Payment</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="total-payment"
                          value={'$' + annual_payment.toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Total Interest</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="total-interest"
                          value={'$' + total_interest_paid.toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Loan Amount</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="loan-amount"
                          value={'$' + loanAmount.toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Money Spent</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="amountSpent"
                          value={'$' + (loanAmount + total_interest_paid).toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
