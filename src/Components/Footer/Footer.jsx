import "./Footer.css";

import facebook from "../../Assets/footer-facebook-img.png";
import instagram from "../../Assets/footer-instagram-img.png";
import linkedin from "../../Assets/footer-linkedin-img.png";
import twitter from "../../Assets/footer-twitter-img.png";
import dribble from "../../Assets/footer-dribble-img.png";
import logo from "../../Assets/INWOOD-logo.png";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="footer-col-container">
          <div className="footer-col1-container footer-col-1">
            <div className="footer-col1-top-container">
              <div className="footer-col1-top">
                <div className="footer-col1-logo-container">
                  <img
                    alt="logo"
                    src={logo}
                  />
                </div>
                <div className="footer-col1-handle-plugins-container">
                  <img
                    src={facebook}
                    alt="facebook"
                  />
                  <img
                    src={instagram}
                    alt="instagram"
                  />
                  <img
                    src={linkedin}
                    alt=""
                  />
                  <img
                    src={dribble}
                    alt="dribble"
                  />
                  <img
                    src={twitter}
                    alt="twitter"
                  />
                </div>
              </div>
            </div>

            <div className="footer-col1-bottom-container">
              <div className="footer-col1-bottom">
                <div className="footer-col-heading">Address</div>
                <div className="footer-col1-links">
                  <div>+123456789</div>
                  <div>877 The Bronx, NY</div>
                  <div>14568, USA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col-container-common col-2to5-height footer-col-2">
            <div className="footer-col-header-container">
              <div className="footer-col-heading">My Account</div>
            </div>
            <div className="footer-col-links">
              <div>Sign In</div>
              <div>Register</div>
              <div>Order Status</div>
            </div>
          </div>

          <div className="footer-col-container-common col-2to5-height footer-col-3">
            <div className="footer-col-heading">Help</div>
            <div className="footer-col-links">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Sizing</div>
            </div>
          </div>

          <div className="footer-col-container-common col-2to5-height footer-col-4">
            <div className="footer-col-heading">Shop</div>
            <div className="footer-col-links">
              <div>All Products</div>
              <div>Bedroom</div>
              <div>Dining Room</div>
            </div>
          </div>

          <div className="footer-col-container-common col-2to5-height footer-col-5">
            <div className="footer-col-heading">Legal Stuff</div>
            <div className="footer-col-links">
              <div>Shipping & Delivery</div>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
        <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
      </section>
    </>
  );
}

export default Footer;
