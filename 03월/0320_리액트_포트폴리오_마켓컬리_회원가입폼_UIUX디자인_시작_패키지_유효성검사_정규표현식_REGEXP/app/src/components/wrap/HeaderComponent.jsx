import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import $ from 'jquery'

export default function HeaderComponent () {

  const [state, setState] = React.useState({
    isFix : false,
    isSub1 : false,
    isSub2 : false
  })

  React.useEffect(() => {
    const row3Top = $('#header .row3').offset().top;
    $(window).scroll(function() {
      let isFix = false;
      if($(window).scrollTop() >= row3Top){
        isFix = true;
      }  
      else{
        isFix = false;
      }
      setState({
        isFix : isFix
      })
    })
  })

  //고객센터 서브메뉴(툴팁메뉴) 마우스 엔터 이벤트
  const onMouseEnterSub1 = () => {
    setState({
      ...state,
      isSub1 : true
    })
  }
  
  const onMouseLeaveSub1 = () => {
    setState({
      ...state,
      isSub1 : false
    })
  }

  //배송지 등록 서브2 메뉴를 마우스 오버 이벤트
  //isSub2 : false
  const onMouseOverSub2 = () => {
    setState({
      ...state,
      isSub2 : true
    })
  }

  const onMouseLeaveSub2 = () => {
    setState({
      ...state,
      isSub2 : false
    })
  }

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="row1">
                <div className="container">
                  <ul>
                    <li><Link to="/회원가입" title='회원가입'>회원가입</Link></li>
                    <li><i>|</i></li>
                    <li><Link to="/로그인" title='로그인'>로그인</Link></li>
                    <li><i>|</i></li>
                    <li>
                      <Link onMouseEnter={onMouseEnterSub1} to="/고객센터" title='고객센터'>고객센터 <img src="./img/ico_down_16x10.png" alt="" /></Link>
                      {
                        state.isSub1 && (
                            <div className="sub" onMouseLeave={onMouseLeaveSub1}>
                              <ul>
                                <li><a href="!#">공지사항</a></li>
                                <li><a href="!#">자주하는 질문</a></li>
                                <li><a href="!#">1:1 문의</a></li>
                                <li><a href="!#">대량주문 문의</a></li>
                              </ul>
                            </div>
                        )
                      }
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`row2 ${state.isFix?' on' : ''}`}>
                <div className="container">
                  <div className="left">
                    <h1>
                      <img src="./img/logo.svg" alt="" />
                      <span><Link to="/">마켓컬리</Link></span>
                      <span><i>|</i></span>
                      <span><Link to="/뷰티컬리">뷰티컬리</Link></span>
                    </h1>
                  </div>
                  <div className="center">
                    <div>
                      <input type="text" name='' id='' placeholder='검색어를 입력해주세요' />
                      <a href="!#"><img src="./img/search.svg" alt="" /></a>
                    </div>
                  </div>
                  <div className="right">
                    <span onMouseLeave={onMouseLeaveSub2}>
                      <Link onMouseOver={onMouseOverSub2} to=''><img src="./img/map.svg" alt="" /></Link>
                      {
                        state.isSub2&&(
                            <div className="sub2">
                              <ul>
                                <li>
                                  <span>배송지를 등록</span>하고
                                </li>
                                <li>구매 가능한 상품을 확인하세요!</li>
                                <li>
                                  <button>로그인</button>
                                  <button><img src="./img/ico_search.svg" alt="" />주소 검색</button>
                                </li>
                              </ul>
                            </div>
                            )
                      }
                    </span>
                    <span><Link to=''><img src="./img/heart.svg" alt="" /></Link></span>
                    <span><Link to=''><img src="./img/cart.svg" alt="" /></Link></span>
                  </div>
                </div>
              </div>
              <nav className={`row3 ${state.isFix?' on' : ''}`}>
                <div className="container">
                  <div className="left">
                    <Link to="#"><img src="./img/ham.svg" alt="" /><span>카테고리</span></Link>
                  </div>
                  <div className="center">
                    <ul>
                      <li><Link to='#'>신상품</Link></li>
                      <li><Link to='#'>베스트</Link></li>
                      <li><Link to='#'>알뜰쇼핑</Link></li>
                      <li><Link to='#'>특가/혜택</Link></li>
                    </ul>
                  </div>
                  <div className="right">
                    <Link to="#"><span>샛별・택배</span>배송안내</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* // 링크페이지 노출될 서브페이지 장소 */}
      <Outlet />
    </>
  );
};

