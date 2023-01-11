import React from "react";

import Benefits from "./Components/Benefits/Benefits";
import ExploreByCategory from "./Components/ExploreByCategory/ExploreByCategory";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Newsletter from "./Components/Newsletter/Newsletter";
import OurOwnCreation from "./Components/OurOwnCreation/OurOwnCreation";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import SpecialPackage from "./Components/SpecialPackage/SpecialPackage";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <ExploreByCategory />
      {/* <PopularProducts /> */}
      <SpecialPackage />
      <OurOwnCreation />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
