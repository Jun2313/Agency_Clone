import React, { useEffect } from 'react';

function SelectHeader({ sliderRef }) {

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const originalSlickNext = slider.slickNext.bind(slider);
      const originalSlickPrev = slider.slickPrev.bind(slider);
  
      slider.slickNext = () => {
        originalSlickNext();
      };
  
      slider.slickPrev = () => {
        originalSlickPrev();
      };
    }
  }, [sliderRef]);

  return (
    <div className='SelectHeader_bg' style={{ 
      width: '40%', 
      textAlign: 'left', 
      padding: '0 5%',
      position: 'relative'
      }}>
      <p style={{
        color: '#ae7762',
        fontWeight: '500',
        fontSize: '20px'
      }}>ONLY SECRET</p>
      <h2 style={{
        fontSize: '40px',
        fontWeight: '200',
        paddingTop: '20px',
        lineHeight: '1.45',

      }}>
        시크릿 성형외과의 오랜 경험과
        다양한 노하우로 안심하고 수술 
        받아보실 수 있습니다
      </h2>
      <div style={{display: 'flex', padding: '20px'}}>
      <div onClick={() => sliderRef.current && sliderRef.current.slickPrev()} 
            style={{ background: 'url(/img/select/Prev_icon.svg)', width: '20px', height: '24px', marginRight: '20px', cursor:'pointer' }}
          ></div>
          <div onClick={() => sliderRef.current && sliderRef.current.slickNext()} 
            style={{ background: 'url(/img/select/Next_icon.svg)', width: '20px', height: '24px', marginLeft: '20px', cursor:'pointer' }}
          ></div>
          </div>
        </div>
  );
}

export default SelectHeader;