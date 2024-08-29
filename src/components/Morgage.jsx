const Morgage = () => {

    return (
        <div>
            <body class="bg-dark">
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
                <input
                  type="submit"
                  value="Calculate"
                  class="btn btn-dark btn-block"
                />
              </div>
            </form>
           
            <div id="loading">
              <img
                src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                alt=""
              />
            </div>
          
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
          </div>
        </div>
      </div>
    </div>
  
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
        </div>
    )
}
export default Morgage;