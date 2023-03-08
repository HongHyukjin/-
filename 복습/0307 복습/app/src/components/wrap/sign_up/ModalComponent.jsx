import React from 'react';
import '../../../css/modal.css'

export default function ModalComponent ({modalMsg, modalCloseFn, timerCounter, isTimer, setId}) {

  const onClickModalClose = (e) => {
    e.preventDefault();
    modalCloseFn();
    clearInterval(setId);
    isTimer && timerCounter();
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
              <button onClick={onClickModalClose} type='button'>확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

