import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import '../css/style_wrap.css' //SRC 내에 css 스타일 가져오기
import '../scss/style.scss'
import ModalComponent from './wrap/ModalComponent';

export default function WrapComponent({wrapProps, cnt}) {

  //상태관리 변수 대명사 :  스테이트 state
  //상태관리 변수 수정(설정 세터 setter) : 셋스테이트 setState
  //리액트에서 모든 프롭스(변수)를 상태관리에게 넘겨준다.
  const [state, setState] = React.useState(wrapProps); //리액트 상태관리 훅

  //h1 클릭 이벤트 => 타이틀 수정
  //1. JSX 태그요소에서 onClick={실행할 이벤트함수 생성}
  //2. 함수 등록하기 화살표함수 식으로 등록한다.
  //3. 이벤트 제거
  const onClickTitleUpdate = (e) =>{
    e.preventDefault();
    setState({
      ...state,
      타이틀 : '상태관리 타이틀 변수(속성 프로퍼티) 내용 setState() 함수 이용 변경'
    })
  }

  const onClickNameUpdate = (e) =>{
    e.preventDefault();
    setState({
      ...state,
      이름 : '홍혁진'
    })
  }

  //카운트 클릭 이벤트 : 부모(상위) 컴포넌트의 함수를 자식이 호출하여 사용하면 다양한 응용 가능
  const onClickCount = () =>{
    setState({
      ...state,
      cnt : state.cnt + 1
    })
  }



  //모달닫기함수 => 자식 컴포넌트 모달창에게 프롭스로 내려보낸다
  const modalCloseFn = () => {
    setState({
      ...state,
      isModal : false
    }, [state.isModal])
  }

  //모달열기함수 => 자식 컴포넌트 헤더컴포넌트에게 프롭스로 내려보낸다
  const modalOpenFn = () => {
    setState({
      ...state,
      isModal : true
    }, [state.isModal])
  }


    return (
      <div id="wrap">
        <h1 style = {style.h1} onClick={onClickTitleUpdate}>{state.타이틀}</h1>
        <h2 style = {style.h2} onClick={onClickNameUpdate}>{state.이름}</h2>
        

        <HeaderComponent modalOpenFn={modalOpenFn} 이름={state.이름} cnt={cnt} onClickCount = {onClickCount}/>

        {/* 모달창 ModalComponent */}
        {
         state.isModal && <ModalComponent modalCloseFn = {modalCloseFn}/>
        }

      </div>
    )
}

WrapComponent.defaultProps = {
  wrapProps : {
    타이틀 : '랩퍼 컴포넌트입니다.',
    이름 : '이순신',
    아이디 : 'leeshoonshin',
    비밀번호 : 'leeshoonshin123',
    isModal : false //모달창 초기값 false이면 숨기기(hide) / true이면 모달창 보이기
  }
}

// 랩퍼 컴포넌트 객체 속성 스타일 
const style = {
  h1 : {
    lineHeight : '200%',
    padding : '20px',
    fontSize : '100px',
    color : '#29c'
  },
  h2 : {
    lineHeight : '200%',
    padding : '10px',
    fontSize : '50px',
    color : '#c29'
  }
}