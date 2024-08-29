import React, { useState } from "react";
import '../styles/mortgage.module.css'

const MortgageCalculator = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsLoading(true);
    setIsCalculated(true);

    // Perform your calculation here after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      // Example calculation for demonstration purposes
      const principal = parseFloat(amount);
      const calculatedInterest = parseFloat(interest) / 100 / 12;
      const calculatedPayments = parseFloat(years) * 12;

      // Compute monthly payment
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * x * calculatedInterest) / (x - 1);

      if (isFinite(monthly)) {
        setMonthlyPayment(monthly.toFixed(2));
        setTotalPayment((monthly * calculatedPayments).toFixed(2));
        setTotalInterest((monthly * calculatedPayments - principal).toFixed(2));
      } else {
        // Handle case where calculation is not possible
        setMonthlyPayment('');
        setTotalPayment('');
        setTotalInterest('');
      }
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto calculate-form">
          <div className="card card-body text-center mt-5">
            <h1 className="heading display-5 pb-3">Loan Calculator</h1>
            <form id="loan-form" onSubmit={handleCalculate}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Loan Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-dark btn-block"
                  type="submit"
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
                          type="number"
                          className="form-control"
                          id="monthly-payment"
                          value={monthlyPayment}
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
                          type="number"
                          className="form-control"
                          id="total-payment"
                          value={totalPayment}
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
                          type="number"
                          className="form-control"
                          id="total-interest"
                          value={totalInterest}
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
  );
};

export default MortgageCalculator;
