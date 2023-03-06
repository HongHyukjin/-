import React from 'react';
import WrapComponent from './WrapComponent';

export default function CountComponent (props) {

    const [state, setState] = React.useState(props);

    //카운트 함수
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
          cnt : cnt,
          setId : setId
        })
      }, 200)
    }
  
    React.useEffect(() =>{
      countDown();
    }, []);   //빈배열 로딩시 1회 실행 끝 state.cnt 넣으면 이 값이 바뀔때마다 countDown()이 실행됨

  return (
    <>
        <WrapComponent cnt={state.cnt}/>
    </>
  );
};

CountComponent.defaultProps = {
  cnt : 0,
  setId : 0
}
