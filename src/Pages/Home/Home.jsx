import React from 'react'
import {Slider,FeaturedProducts} from "../../Components/exportComponetns"
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
}
