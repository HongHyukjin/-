import React from 'react';
import HeaderCompponent from './HeaderCompponent';

export default function NoticeComponent() {
  return (
    <>
      <HeaderCompponent />
      <div id='notice'>
        <div className="container">
          <div className="title">
            <h1>공지사항</h1>
          </div>
          <div className="content">
            <div className="listbox">
              <h4 className='num'>번호</h4>
              <h4 className='head'>제목</h4>
              <h4 className='date'>등록일</h4>
              <h4 className='view'>조회수</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

