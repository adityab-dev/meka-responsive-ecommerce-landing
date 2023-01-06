import "./Benefits.css";

import payment_method from "../../Assets/benfits-payment-method-img.png";
import return_policy from "../../Assets/benefits-return-policy-img.png";
import customer_support from "../../Assets/benfits-customer-support-img.png";

function Benefits() {
  return (
    <section>
      <div className="benefits-container">
        <div className="benefits-heading-container">
          <h1>Benefits for your expediency</h1>
        </div>

        <div className="benefits-content-container">
          <div className="benefits-content-container__width">
            <div className="benefits-content-container__center">
              <div className="benefits-card">
                <div className="benfits-card-image">
                  <img
                    src={payment_method}
                    alt="payment"
                  />
                </div>

                <div className="benefits-card-heading">
                  <h2>Payment Method</h2>
                </div>

                <div className="benefits-card-text">
                  <p>We offer flexible payment options, to make easier.</p>
                </div>
              </div>

              <div className="benefits-card">
                <div className="benfits-card-image">
                  <img
                    src={return_policy}
                    alt="Return Policy"
                  />
                </div>

                <div className="benefits-card-heading">
                  <h2>Return Policy</h2>
                </div>

                <div className="benefits-card-text">
                  <p>You can return a product within 30 days.</p>
                </div>
              </div>

              <div className="benefits-card">
                <div className="benfits-card-image">
                  <img
                    src={customer_support}
                    alt="Customer Support"
                  />
                </div>

                <div className="benefits-card-heading">
                  <h2>Customer Support</h2>
                </div>

                <div className="benefits-card-text">
                  <p>Our customer support is 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
