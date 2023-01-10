import "./OurOwnCreation.css";

function OurOwnCreation() {
  return (
    <section className="creation-container">
      <div className="creation-col1-container">
        <div className="creation-col1-container-center">
          <h2 className="creation-heading-1">Our</h2>
          <h2 className="creation-heading-2">Own Creation</h2>
          <p className="creation-p">Designed in our studio</p>

          <div className="creation-col1-buttom-container">
            <div className="creation-more-container">
              <div>More</div>
            </div>
            <div className="creation-scroll-container">
              <div className="creation-scroll-button"></div>
              <div className="creation-scroll-line"></div>
            </div>
            <div className="creation-buttons-contianer">
              <button className="creation-btn-rtl">&larr;</button>
              <button className="creation-btn-ltr">&rarr;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="creation-col2to5">
        <div className="creation-col-common grow">
          <div className="creation-col-btn-container-placement">
            <div className="creation-col-btn-container">
              <button type="button">Explore All Rooms</button>
            </div>
          </div>
        </div>

        <div className="creation-col-common"></div>
        <div className="creation-col-common"></div>
        <div className="creation-col-common"></div>
      </div>
    </section>
  );
}

export default OurOwnCreation;
