import React,{useState} from 'react';
import SignUpComponent from './wrap/SignUpComponent';

export default function Wrapcomponent () {

  const [state, setState] = useState({
    minutes : 3,
    seconds : 0,
    setId : 0
  });

  const timerCounter = () => {
    let minutes = 3;
    let seconds = 0;
    let setId = 0;
    setId = setInterval(function(){
      seconds--;
      if(seconds < 0){
        seconds = 59;
        minutes--;
        if(minutes < 0){
          clearInterval(setId);
          seconds = 0;
          minutes = 0;
        }
      }

      setState({
        ...state,
        minutes : minutes,
        seconds : seconds,
        setId : setId
      })
      console.log(minutes, seconds)
    }, 1000)
  }

  return (
    <div id='wrap'>
      <SignUpComponent timerCounter={timerCounter} minutes={state.minutes} seconds={state.seconds} setId={state.setId}/>
    </div>
  );
};

