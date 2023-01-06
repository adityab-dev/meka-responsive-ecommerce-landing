import React from "react";

function PopularProducts() {
  return (
    <section style={{border: 'solid black 1px'}}>
      <h1>Popular Products</h1>

      <article><img src="" alt="chair-1" />
        <div>
          <div>ArmChair</div>
          <div>description</div>
          <div>$145</div>
        </div>
      </article>
      <article><img src="" alt="chair-2" />
        <div>
          <div>ArmChair</div>
          <div>description</div>
          <div>$145</div>
        </div>
      </article>
      <article><img src="" alt="chair-3" />
        <div>
          <div>ArmChair</div>
          <div>description</div>
          <div>$145</div>
        </div>
      </article>
      <article><img src="" alt="chair-4" />
        <div>
          <div>ArmChair</div>
          <div>description</div>
          <div>$145</div>
        </div>
      </article>

      <div>
        <div>scrollbar</div>
        <div>
          <div>left</div>
          <div>right</div>
        </div>
      </div>
      
    </section>
  );
}

export default PopularProducts;
