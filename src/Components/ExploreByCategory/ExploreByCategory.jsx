import "./ExploreByCategory.css";

import { RxHamburgerMenu } from "react-icons/rx";

function ExploreByCategory() {
  return (
    <section className="category-container">
      <div className="category-heading">
        <h1>Explore by Category</h1>
      </div>

      <div className="category-content">
        <nav className="category-navbar-container">
          <div className="category-navbar-input">
            <input
              type="text"
              id="category-navbar-input"
              placeholder="Search"
            />
            <div className="category-navbar-hamburger">
              <RxHamburgerMenu />
            </div>
          </div>
          <ul className="category-navbar-links">
            <div className="category-navbar-links-col-1">
              <li>Bedroom</li>
              <li>Dining Room</li>
              <li>Meeting Room</li>
              <li>Workspace</li>
            </div>

            <div className="category-navbar-links-col-2">
              <li>Living Room</li>
              <li>Kitchen</li>
              <li>Living Space</li>
            </div>
          </ul>
          <button type="button">All Categories </button>
        </nav>

        <section className="category-cards-container">
          <article className="card selected-card">
            <div className="category-card-center">
              <h1>Bedroom</h1>
              <button type="button">Explore</button>
            </div>
          </article>
          <article className="card">
            <div className="category-card-shrinking">Dining Room</div>
          </article>
          <article className="card">
            <div className="category-card-shrinking">Meeting Room</div>
          </article>
          <article className="card">
            <div className="category-card-shrinking">Workspace</div>
          </article>
          <article className="card">
            <div className="category-card-shrinking">Living Room</div>
          </article>
          <article className="card">
            <div className="category-card-shrinking">Kitchen</div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default ExploreByCategory;
