import React from 'react';
import '../../../css/modal.css'

export default function ModalComponent () {
  return (
    <div id='modal'>
      <div className="wrap">
        <div className="container">
          <div className="content">
            <div className="msg-box">
              <p>
                인증번호가 전송되었습니다.
              </p>
            </div>
            <div className="btn-box">
              <button type='button'>확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

