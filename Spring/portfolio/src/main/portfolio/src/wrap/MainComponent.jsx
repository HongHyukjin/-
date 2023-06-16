import React from 'react';

export default function MainComponent() {
  return (
    <div className="wrap">
      <header>
        <div class="header">
          <a href="/home" class="logo"><img src="./img/logo.c33abdcc.png" />발자취</a>
          <div>
            <a href="#!" class="menutext">공지사항</a>
            <a href="#!" class="item"><button>배달 같이하기</button></a>
            <a href="#!" class="item">로그인</a> |
            <a href="#!" class="item">회원가입</a>
          </div>
        </div>
      </header>
      <div id="content">
        <section id="sec1" className="sec">
          <div>
            <h2>혼자 시키기 힘든 배달을 함께</h2>
            <p>1인분 배달 안되는 곳의 음식을 함께 주문해요</p>
          </div>
          <img src="./img/home1.bb233536.png" alt="" />
        </section>
        <section id="sec2" className="sec">
          <img src="./img/home2.c2209343.png" alt="" />
          <div className="textBox">
            <h2>부담을 나눠요</h2>
            <p>나날이 비싸지는 최소주문 금액과 배달팁을 함께 나눠요</p>
          </div>
        </section>
        <section id="sec3" className="sec">
          <img src="./img/home3.75af1e78.png" alt="" />
          <div className="textBox">
            <h2>개인정보 공유 노!</h2>
            <p>연락처를 따로 공유하지 않고 사이트 내의 채팅으로 연락해요!</p>
          </div>
        </section>
        <section id="sec4" className="sec">
          <div>
            <h2>쉽게 만나도록 도와드려요</h2>
            <p>동네 사람들끼리 부르는 장소 별명을 지정할 수 있어요!<br />또한 실제 주소와 지도로 장소에 찾아가실 수 있도록 도와드립니다.</p>
          </div>
          <img src="./img/home4.6fccd6d0.png" alt="" />
        </section>
      </div>
      <up-button id="up_button"></up-button>
      <footer-area id="footer"></footer-area>
    </div>
  );
};

