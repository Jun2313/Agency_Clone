import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { slidesData } from './MediaSliderData';

function MediaSlider(){

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;
  
  const updateProgress = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const gaugeWidth = (currentSlide / (totalSlides - 4.5)) * 100;

  return(
    <div style={{
      // backgroundColor: 'brown'
    }}>
      <Swiper
      spaceBetween={20}
      slidesPerView={4.5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true}}
      onSlideChange={updateProgress}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: 'calc(100% / 4.5 - 20px)', textAlign: 'left'}}>
            <img src={slide.src} style={{ width: '100%', height: 'auto' }} alt={`Gallery ${index + 1}`} />
            <p style={{
              fontSize: '20px',
              padding: '5% 0' 
            }}>{slide.text}</p>
            <span style={{
              fontSize: '15px',
              textAlign: 'left',
              color: '#aaa'
            }}>{slide.date}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ 
        height: '3px', 
        marginTop: '5%',
        backgroundColor: 'lightgray',
        }}>
        <div className="gauge-bar" style={{ 
          width: `${gaugeWidth}%`, 
          height: '100%', 
          backgroundColor: 'brown',
          
          }}
          >
          </div>
      </div>
    </div>
  )
}
export default MediaSlider;