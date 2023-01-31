import React from 'react'
import {Slider,FeaturedProducts,Categories, Contact} from "../../Components/exportComponetns"
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      <Contact/>
    </div>
  );
}
