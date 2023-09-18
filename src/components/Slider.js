import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MainSlider() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: current => setCurrentSlide( current +1 )
  };


  return (
    <div className='Slide_container' style={{ overflowX: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Slider {...settings}>
          <div>
            <img src="/slide_01.jpg" alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src="/slide_02.jpg" alt="Slide 2" className="slide-image" />
          </div>
          <div>
            <img src="/slide_03.jpg" alt="Slide 3" className="slide-image" />
          </div>
          <div>
            <img src="/slide_04.jpg" alt="Slide 4" className="slide-image" />
          </div>
          <div>
            <img src="/slide_05.jpg" alt="Slide 5" className="slide-image" />
          </div>
        </Slider>
        <div style={{ position: 'absolute', left: '10px', bottom: '10px', background: 'rgba(0, 0, 0, 0.5)', padding: '5px', borderRadius: '5px', color: '#fff' }}>
          <span>{currentSlide} / {totalSlides}</span>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;