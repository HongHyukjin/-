import React,{useState, useEffect} from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import '../scss/style_wrap.scss';

export default function WrapComponent (props){

  const [state, setState] = useState(props);


  useEffect(() => {
    // console.log(state.fruits);
    // console.log(state.cars);
    // console.log(state.성적);
  },[])

  return (
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent 성적={state.성적}/>
      <FooterComponent />
    </div>
  );
};

WrapComponent.defaultProps = {
  fruits : ['딸기', '바나나', '사과', '포도', '자몽'],
  cars : ['벤츠', 'BMW', '현대', '기아'],
  성적 : [
    {번호 : 1, 이름 : '홍혁진', 국어 : 100, 영어 : 95, 수학 : 90},
    {번호 : 2, 이름 : '홍길동', 국어 : 75, 영어 : 85, 수학 : 70},
    {번호 : 3, 이름 : '이순신', 국어 : 100, 영어 : 100, 수학 : 100}
  ]
}
