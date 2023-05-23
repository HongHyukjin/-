import React from 'react';
import { useRef } from 'react';

export default function Section1SlideComponent({슬라이드, n}) {
    
    const slideWrap = useRef();

    const [state,setState] = React.useState({
        cnt : 0
    })

    React.useEffect(()=>{
        mainSlide();
    },[state.cnt])

    const mainSlide = () => {
        slideWrap.current.style = 'transition : all 0.6s ease-in-out';
        slideWrap.current.style = `left:${-(100*state.cnt)}%`;
    }

    const onClickPrev = (e) => {
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt+1
        })
    }

    const onClickNext = (e) => {
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt-1
        })
    }

    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul ref={slideWrap} className="slide-wrap">


                {
                    슬라이드.map((item,idx)=>{
                        return(
                            <li className="slide" key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                        )
                    })

                }
                    

                </ul>
            </div>


            <a href="!#" onClick={onClickPrev} className='left-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
            <a href="!#" onClick={onClickNext} className='right-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
            
            <span className='page-count-box'>
            <em className='current-number'>1</em>
            <i>/</i>     
            <em className='total-number'>{n}</em>
            </span>

        </div>
    );
};

