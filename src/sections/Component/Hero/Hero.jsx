import React from "react";
import './Hero.css';
 const Hero= ({subtitle, title, highlight, description, backgroundImage }) =>{
    return(
        <section className= "hero-custom  d-flex text-center text-white   " style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-bg-overlay"></div>
            <div className="container content-wrapper  position-relative text-white ">
            <div className="row">
                <div className="col-lg-8 ms-1   ">
                <h6 className="text-uppercase mb-3-50 tracking-widest">
                    {subtitle}
                </h6>
                <h1 className="hero-title display-5 fw-bold mb-4 fs-1 ">
                    {title} <span className="text-purple">{highlight}</span>
                </h1>
<p className="hero-descripition fs-8 me-5  ">
    {description}
</p>
     </div></div></div></section>
    );};
  export default Hero ;