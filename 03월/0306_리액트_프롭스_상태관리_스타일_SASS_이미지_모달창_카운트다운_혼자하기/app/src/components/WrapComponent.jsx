import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import '../css/style_wrap.css'
import ModalComponent from './wrap/ModalComponent';

export default function WrapComponent (props){

  const [state,setState] = React.useState(props);

  const onClickNameUpdate = (e) => {
    e.preventDefault();
    setState({
      ...state,
      이름 : 'HongHyukJin'
    })
  }
  
  const onClickCount = () =>{
    setState({
      ...state,
      cnt : state.cnt + 1
    })
  }

  const onClickPhone = () => {
    setState({
      ...state,
      전화번호 : '01012345678'
    })
  }

  const modalCloseFn = () => {
    setState({
      ...state,
      isModal : false
    })
  }

  const modalOpenFn = () => {
    setState({
      ...state,
      isModal : true
    })
  }

  const countDown = () => {
    let cnt = 59;
    let setId = 0;
    setId = setInterval(function(){
      cnt --;
      if(cnt <= 0){
        clearInterval(setId);
      }
      setState({
        ...state,
        cnt1 : cnt,
        setId : setId
      })
    }, 200)
  }

  React.useEffect(() => {
    countDown();
  }, [])

  return (
    <div id="wrap">
      <h1>WrapComponent</h1>
      <h1 onClick={onClickNameUpdate}>{state.이름}</h1>
      <h1 onClick={onClickPhone}>{state.전화번호}</h1>
      <HeaderComponent 전화번호={state.전화번호} 이름={state.이름} cnt={state.cnt} cnt1={state.cnt1} onClickCount={onClickCount} onClickPhone={onClickPhone} modalOpenFn={modalOpenFn}/>
      {
        state.isModal && <ModalComponent modalCloseFn={modalCloseFn}/>
      } 
    </div>
  );
};

WrapComponent.defaultProps = {
  이름 :' 홍혁진',
  나이 : 27,
  전화번호 : '01096629052',
  성별 : '남자',
  cnt : 0,
  cnt1 : 0,
  setId : 0,
  isModal : false
}

