import React from "react";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";
import { useState } from "react";
export default function Slider() {

  const [currentSlide , setCurrentSlide] = useState(0);
  const data = [
    "img/1.png", 
    "img/2.png",
    "img/3.png",
  ];

  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1 );
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw) `}}>
        <img src={data[0]} alt="img" />
        <img src={data[1]} alt="img" />
        <img src={data[2]} alt="img" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
