import "./Testimonials.css";

import double_quotes from "../../Assets/testiamonials-double-quote-img.png";

function Testimonials() {
  return (
    <section>
      <div className="testimonial-heading">
        <h1>Testinmonials</h1>
      </div>
      <div className="testimonials-sub-heading">
        <div>Over 15,000 happy customers.</div>
      </div>
      <div className="testimonial-main">
        <div className="testimonial-empty-frame"></div>
        <div>
          “My experience with Mark is a complete sucess, from customer service,
          wide range of products, clean store, purchasing experience, the
          newsletter.Thank you.”
        </div>
        <div className="testimonial-user">
          <div>Leona Paul</div>
          <div>CEO of Floatcom</div>
        </div>
        <button type="button">ltr</button>
        <button type="button">rtl</button>
      </div>
      <div>scroll line</div>
      <div>see all reviews</div>
    </section>
  );
}

export default Testimonials;
