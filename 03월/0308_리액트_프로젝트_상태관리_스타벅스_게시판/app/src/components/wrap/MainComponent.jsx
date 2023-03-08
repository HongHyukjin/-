import React from 'react';
import '../../scss/style_main.scss'

export default function MainComponent ({notices}) {

  const notice_table = notices.map((item,idx) => {
    return (
      <tr key={item.NO}>
        <td>{item.NO}</td>
        <td><a href="#">{item.제목}</a></td>
        <td>{item.날짜}</td>
        <td>{item.조회수}</td>
      </tr>
    )
  })

  return (
    <main id="main">
      <section id="starbucks">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>공지사항</h1>
              <div>
                <a href="!#">
                  <img src="./img/icon_home.png" alt="" />
                </a>
                <img src="./img/icon_arrow.png" alt="" />
                <a href="!#">WHAT'S NEW</a>
                <img src="./img/icon_arrow.png" alt="" />
                <a href="!#">공지사항</a>
              </div>
            </div>
            <div className="content">
              <div className="search">
                <p>
                  <input type="text" name='search' id='search' placeholder='검색어를 입력해 주세요.' />
                  <button type='button'>검색</button>
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    notice_table
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

