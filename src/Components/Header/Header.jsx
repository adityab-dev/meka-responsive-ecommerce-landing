import "./Header.css";

import logo from "../../Assets/INWOOD-logo.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <section className="header-container">
      <div className="header-content__center">
        <section className="navbar-container">
          <div className="logo-container">
            <img
              src={logo}
              alt="logo"
            />
          </div>

          <nav className="navbar-links">
            <div>Home</div>
            <div>Products</div>
            <div>Categories</div>
            <div>About</div>
            <div>Contact Us</div>
          </nav>

          <div className="hamburger-container">
            <RxHamburgerMenu />
          </div>

          <section className="navbar-icons">
            <AiOutlineSearch />
            <AiOutlineShoppingCart />
            <BiUser />
          </section>
        </section>

        <section className="header-mainText">
          <div className="content-div">
            <h1>Exclusive Deals of Furniture Collection</h1>
            <p className="header-mainText">
              Explore different categories. Find the best deals.
            </p>
            <button type="button">Shop Now</button>
          </div>
          <div className="empty-div"></div>
        </section>
      </div>
    </section>
  );
}

export default Header;
