import React from 'react';
import '../../../css/modal.css'

export default function ModalComponent ({isTimerFn, timerCounter, modalClose, modalMsg, isTimer}) {

  const onClickModalClose = (e) => {
    e.preventDefault();
    modalClose(); //상위컴포넌트의 모달 닫기 함수 호출 실행
    // if(isTimer){
    //   timerCounter();
    // }
    isTimerFn();
    // isTimer && timerCounter();  //인증번호 전송 모달 닫았을 때만 timer실행
  }

  return (
    <div id='modal'>
      <div className="wrap">
        <div className="container">
          <div className="content">
            <div className="msg-box">
              <p>
                {modalMsg}
              </p>
            </div>
            <div className="btn-box">
              <button onClick={onClickModalClose}>확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

