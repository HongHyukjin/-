import React from 'react';
import HeaderCompponent from './HeaderCompponent';
import {Link} from 'react-router-dom';

export default function PostListComponent() {

  const [postlist, setPostlist] = React.useState([]);

  const getPost = () => {
    const formData = {
      
    }
  }

  return (
    <>
      <HeaderCompponent />
      <div id='postlist'>
        <div className="container">
          <div className="content">
            <div className="area">
              <h1>현재 설정된 지역은 <b> 서울 은평구 대조동</b> 입니다.</h1>
            </div>
            <div className="category">
              <label htmlFor="">음식 카테고리</label>
              <div className="select-box">
                <select name="food" id="food">
                  <option value selected="selected" disabled>----선택----</option>
                  <option value="KOR">한식</option>
                  <option value="CHI">중식</option>
                  <option value="JAP">일식</option>
                  <option value="PIZ">피자</option>
                  <option value="FRI">치킨</option>
                  <option value="BUN">분식</option>
                  <option value="FAS">패스트푸드</option>
                  <option value="JOK">족발/보쌈</option>
                  <option value="DES">디저트</option>
                  <option value="ETC">기타</option>
                </select>
              </div>
              <label htmlFor="">정렬 기준</label>
              <div className="select-box">
                <select name="food" id="food">
                  <option value selected="selected" disabled>----선택----</option>
                  <option value="default">글 작성 시간 순</option>
                  <option value="near">마감기한 가까운 순</option>
                  <option value="far">마감기한 먼 순</option>
                </select>
              </div>
              <div className="search-area">
                <button className='btn'>지역검색</button>
              </div>
              <div className="add-btn">
                <Link to="/post" class="link">
                  <i class="fa-solid fa-circle-plus"></i>
                </Link>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <img src="./img/category/CHI.png" alt="" />
                  <div className="listbox-content">
                    <div className="listbox-head">
                      <div className="name">
                        <a href="/postlist/postview/1">중국음식 배달시간</a>
                      </div>
                      <div className="category">중식</div>
                      <div className="time">
                        <small>130일 남음</small>
                      </div>
                    </div>
                    <a href="/postlist/postview/1">
                      <p>중국음식 배달시간4 내용</p>
                    </a>
                    <div className="listbox-foot">
                      <div className="detail-info">
                        <small>서울 성북구 정릉동</small>
                        <button className="area-btn">
                          <img src="./img/icon.png" alt="" />
                          북악
                        </button>
                        <img src="./img/people.png" alt="" />
                        <small>1/5</small>
                      </div>
                      <div className="ago">
                        <small>5일 전 게시</small>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

