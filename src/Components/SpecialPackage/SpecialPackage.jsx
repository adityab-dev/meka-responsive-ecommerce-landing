import "./SpecialPackage.css";

import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";

function SpecialPackage() {
  return (
    <section className="special-container">
      <div className="special-heading">
        <h1>Special package</h1>
      </div>
      <div className="special-container-main">
        <div className="special-container-center">
          <section className="special-content-left">
            <div className="special-big-empty"></div>
            <div className="special-big-content-container">
              <div className="special-big-content-left">
                <div className="special-big-empty-label">Larkin Wood Full Set</div>
                <div className="special-5stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <div className="spcial-big-empty-price">$729.99</div>
              </div>

              <div className="special-big-btn-container">
                <button type="button">
                  Add to cart <AiOutlineShoppingCart />
                </button>
              </div>

              <div className="special-content-breakpoint-laptop">
                <h3>Description</h3>
                <p>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast...</p>
              </div>
            </div>
          </section>

          <section className="special-content-right">
            <div className="special-content-right-description">Description</div>
            <p className="special-content-right-p">
              Description Cast Aluminum Outdoor Chaise Lounge As an elegant and
              classic touch to your outdoor space, this cast Aluminum Chaise
              Lounge combines the appearance, function and quality all together,
              offering you with the best experience.
            </p>
            <div className="special-content-right-more">
              See More <AiOutlineDown />
            </div>

            <div className="special-cards-content">
              <div className="special-small-cards">
              <div className="special-card">
                  <div className="special-small1-empty"></div>

                  <div className="special-description-header-price special-card-background-color">
                    <div className="special-description-header-price-center">
                      <div className="special-small1-card-description-top">
                        <h2>Livin Room Special Set</h2>
                        <div className="special-small1-price">$229.99</div>
                      </div>

                      <div className="special-small1-description">
                        <div className="special-small1-5stars">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </div>
                        <p>
                          See Details
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

                <div className="special-card">
                  <div className="special-small1-empty"></div>

                  <div className="special-description-header-price">
                    <div className="special-small1-card-description-top">
                      <h2>Livin Room Special Set</h2>
                      <div className="special-small1-price">$329.99</div>
                    </div>

                    <div className="special-small1-description">
                      <div className="special-small1-5stars">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                  

                <div className="special-card">
                  <div className="special-small1-empty"></div>

                  <div className="special-description-header-price">
                    <div className="special-small1-card-description-top">
                      <h2>Livin Room Special Set</h2>
                      <div className="special-small1-price">$587.99</div>
                    </div>

                    <div className="special-small1-description">
                      <div className="special-small1-5stars">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="special-small-cards-left">
                <div className="special-scroll">
                  <div className="special-scroll-btn"></div>
                  <div className="special-scroll-line"></div>
                </div>

                <div className="special-btn-container">
                  <button>&#8593;</button>
                  <button>&#8595;</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default SpecialPackage;
