import React from "react";
import './Hero.css';
 function Hero ({subtitle, title, highlight, description, backgroundImage }) {
    return(
        <section className= "hero-custom  d-flex text-center text-white   " style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-bg-overlay"></div>
            <div className="container content-wrapper  position-relative text-white ">
            <div className="row">
                <div className=" ms-1   ">
             
                <h1 className="hero-title fw-bold mb-4  ">
                    {title} <span className="text-purple">{highlight}</span>
                </h1>
<p className="hero-descripition fs-5 me-5  ">
    {description}
</p>
     </div></div></div></section>
    );};
  export default Hero ;