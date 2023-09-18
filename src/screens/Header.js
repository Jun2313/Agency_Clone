import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  const handleScroll = () => {
    const offset = window.scrollY;
    const headerHeight = headerRef.current.offsetHeight;

    if (offset > headerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  let navbarClasses = ['header'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return(

    
    <div ref={headerRef}>
      <div className={navbarClasses.join(' ')}>
        <div style={{zIndex: '2'}}>
          <h1>
          <img src="./logo_img.svg"></img>
          </h1>
      </div>
      <ul className="nav">
        <li>눈성형</li>
        <li>코성형</li>
        <li>지방흡입 / 이식</li>
        <li>동안성형</li>
        <li>가슴성형</li>
        <li>쁘띠</li>
        <li>피부과</li>
        <li>시크릿소개</li>
        <li>커뮤니티</li>
        <li>상담예약 문의</li>
      </ul>
      <ul className="acount_nav">
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
      </div>

    </div>
  )
}

export default Header;