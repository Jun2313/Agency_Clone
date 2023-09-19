import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SelectHeader from './SelectHeader';
import SelectSlide  from './SelectSlide';

function ControlSlide() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    customPaging: () => <div style={{ outline: "none" }} />,
  };

  return (
    <div className="ControlSlide_bg" style={{ display: 'flex', justifyContent: 'space-between',overflow: 'hidden'}}>
      <SelectHeader sliderRef={sliderRef} />
      <div style={{ width: '55%', position: 'relative' }}>
        <Slider ref={sliderRef} {...settings}>
          <SelectSlide 
            src="/img/select/select_slide_01.jpg" 
            alt="Image 1" 
            text1="앞 · 뒤트임 복원술" 
            text2="1mm의 섬세한 차이로 달라지는 눈매" 
            
          />
          <SelectSlide 
            src="/img/select/select_slide_02.jpg" 
            alt="Image 2" 
            text1="꺼진 눈 지방이식" 
            text2="볼륨 없는 눈매를 생기 있는 눈매로 만드는 방법" 
          />
          <SelectSlide 
            src="/img/select/select_slide_03.jpg" 
            alt="Image 3" 
            text1="시크릿 브이라인 윤곽술" 
            text2="지방 흡입으로 얼굴의 숨어있던 브이라인을 찾는 방법" 
          />
          <SelectSlide 
            src="/img/select/select_slide_04.jpg" 
            alt="Image 4" 
            text1="3D CT기능 코성형" 
            text2="정확한 진단으로 기능과 미용까지 고려한 코 성형" 
          />
          <SelectSlide 
            src="/img/select/select_slide_05.png" 
            alt="Image 5" 
            text1="울써마지 (울쎄라 + 써마지)" 
            text2="강력한 타이트닝으로 주름을 개선하고 탄력을 찾는 방법" 
          />
        </Slider>
      </div>
    </div>
  );
}

export default ControlSlide;