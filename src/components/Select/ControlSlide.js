import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ControlSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="ControlSlide_bg" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '40%', textAlign: 'left' }}>
        <p>ONLY SECRET</p>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '200',
          paddingTop: '20px',
        }}>
          시크릿 성형외과의 오랜 경험과
          다양한 노하우로 안심하고 수술 
          받아보실 수 있습니다
        </h2>
      </div>
      <div style={{ width: '60%', position: 'relative' }}>
        <Slider {...settings}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', marginRight: '10px' }}>
            <img src="/img/select/select_slide_01.jpg" alt="Image 1" style={{ width: '360px' }} />
            <p>Image 1 description</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', marginRight: '10px' }}>
            <img src="/img/select/select_slide_02.jpg" alt="Image 2" style={{ width: '360px' }} />
            <p>Image 2 description</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', marginRight: '10px' }}>
            <img src="/img/select/select_slide_03.jpg" alt="Image 3" style={{ width: '360px' }} />
            <p>Image 3 description</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', marginRight: '10px' }}>
            <img src="/img/select/select_slide_04.jpg" alt="Image 4" style={{ width: '360px' }} />
            <p>Image 4 description</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', marginRight: '10px' }}>
            <img src="/img/select/select_slide_05.png" alt="Image 5" style={{ width: '360px' }} />
            <p>Image 5 description</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default ControlSlide;