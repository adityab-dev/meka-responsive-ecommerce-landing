import React from "react";

function Newsletter() {
  return (
    <section className="news-container">
      <div className="news-left"></div>
      <div className="news-right">
        <h2>Join Our</h2>
        <h2>Newsletter</h2>
        <p>Receive exclusive deals, discounts and many offers.</p>
      </div>
      <input
        type="text"
        placeholder="Enter your email"
      />
      <button type="button">Subscribe</button>
    </section>
  );
}

export default Newsletter;
