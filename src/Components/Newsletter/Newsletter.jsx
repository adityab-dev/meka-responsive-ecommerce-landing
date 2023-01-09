import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="news-container">
      <div className="news-left-container"></div>
      <div className="news-right-container">
        <div className="news-right-container-center">
          <div className="news-right">
            <div className="news-right-upper">
              <h2 className="news-right-heading-1">Join Our</h2>
              <h2 className="news-right-heading-2">Newsletter</h2>
              <p>Receive exclusive deals, discounts and many offers.</p>
            </div>
            <div className="news-right-input-container">
              <input
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="news-right-btn-container">
              <button
                type="button"
                className="news-right-btn"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
