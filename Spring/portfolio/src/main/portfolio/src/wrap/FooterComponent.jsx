import React from 'react';

export default function FooterComponent () {
  return (
    <footer id='footer'>
      <div className="intro">
        <div className="logo">
          <img src="./img/logo_gray.51fa9ebd.png" alt="" />
          <span>발자취</span>
        </div>
        <p><b>Since 2023</b></p>
        <p>이메일 (문의 및 피드백): <a href="">gurwlszx@naver.com</a></p>
        <p>
          <a href="">개인정보 수집·이용 안내</a>
        </p>
      </div>
      <div className="contact">
        <p><b>CATEGORY</b></p>
        <p>
          <a href="">회원가입 및 로그인</a>
        </p>
        <p>
          <a href="">배달 함께하기</a>
        </p>
        <p>
          <a href="">오류신고 및 피드백</a>
        </p>
      </div>
    </footer>
  );
};

