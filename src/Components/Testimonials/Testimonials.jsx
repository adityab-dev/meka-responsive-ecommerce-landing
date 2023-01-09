import "./Testimonials.css";

import double_quotes from "../../Assets/testiamonials-double-quote-img.png";

function Testimonials() {
  return (
    <section className="testimonial-container">
      <div className="testimonial-container-center">
        <div className="testimonial-heading">
          <h1>Testinmonials</h1>
        </div>
        <div className="testimonials-sub-heading">
          <div>Over 15,000 happy customers.</div>
        </div>
        <div className="testimonial-main">
          <div className="testimonial-main-right">
            <div className="testimonial-empty-frame"></div>
            <div className="testimonial-main-user-description">
              <p className="testimonial-main-user-para">
                “My experience with Mark is a complete sucess, from customer
                service, wide range of products, clean store, purchasing
                experience, the newsletter.Thank you.”
              </p>
              <div className="testimonial-main-user">
                <div className="user-name">Leona Paul</div>
                <div className="user-position">CEO of Floatcom</div>
              </div>
            </div>
          </div>
          <div className="testimonial-main-left">
            <div className="testimonial-button-position">
              <div className="button-ltr">
                <button type="button">&larr;</button>
              </div>
              <div className="button-rtl">
                <button type="button">&rarr;</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="testimonial-footer">
          <div className="testimonial-footer-scroll">
            <div className="testimonial-scroll-btn"></div>
            <div className="testimonial-scroll-line"></div>
          </div>
          <div className="reviews">See all reviews &rarr;</div>
        </footer>
      </div>
    </section>
  );
}

export default Testimonials;
