import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId : 0,
        msg : '',
        isEnd : false,
        mapText : '',
        isMap : true,
        addr : '',
        주소1 : '',
        주소2 : '',
        isAddress : false   //주소검색 api 모달창 show & hide
    });
    //주소검색 API 모달창 열기(Open) 함수
    //하위 컴포넌트인 회원가입폼에 전달해서 주소검색 버튼클릭시 열린다.
    const addressOpenpostcode = () => {
        setState({
            ...state,
            isAddress : true
        })
    }

    const timerCounterFn = () => {
        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let msg = '';
        let isEnd = false;
        setId = setInterval(function(){
            seconds--;
            if(seconds < 0){
                seconds = 59;
                minutes --;
                if(minutes < 0){
                    clearInterval(setId);
                    seconds = 0;
                    minutes = 0;
                    msg = '유효시간이 경과되었습니다.';
                    isEnd = true;
                }
            }
            setState({
                ...state,
                seconds : seconds,
                minutes : minutes,
                setId : setId,
                msg : msg,
                isEnd : isEnd
            })
        }, 1000)
    }


    
    //카카오 주소검색 API
    const onCompletePostcode = (data) => {
        setState({
            ...state,
            주소1 : data.address
        })
    }

    const onChangeAddress2 = (e) => {
        const {value} = e.target;
        setState({
            ...state,
            주소2 : value
        })
    }

    //저장버튼 클릭이벤트
    const onClickSave = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isAddress : false
        })
    }

    const postcodeStyle = {
        zIndex: 2,
        position: 'absolute',
        width : '100%',
        minHeight: '100%',
        top : 0,
        left : 0,
        // display : 'none'
    }

    // React.useEffect(() => {
    //     onCompletePostcode();
    // },[])

    return (
        <div id='wrap'>
                <TopModalComponent/>
                <HeaderComponent mapText={state.mapText} isMap={state.isMap}/>
                <SignUpComponent addressOpenpostcode={addressOpenpostcode} 주소1={state.주소1} 주소2={state.주소2} timer={state} timerCounterFn={timerCounterFn}/>
                <FooterComponent/>
                {
                    state.isAddress && (
                        <div id="daumPostcode">
                    <div className="wrap">
                        <div className="container">
                            {/* 모달 사용자 입력상자 폼박스 */}
                            <div className="content">
                                <ul>
                                    <li>
                                        <h1><strong>샛별배송</strong><span> 지역입니다.</span></h1>
                                        <h2>매일 새벽, 문 앞까지 신선함을 전해드려요.</h2>
                                    </li>
                                    <li>
                                        <div className="input-box box1">
                                            <input type="text" name="modal_addr1" id="modalAddr1" placeholder="주소1" value={state.주소1}/>
                                            <button><img src="./images/sign_up/search.svg" alt="" />재검색</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="input-box box2">
                                            <input onChange={onChangeAddress2} type="text" name="modal_addr2" id="modalAddr2" placeholder="주소2" value={state.주소2} />
                                        </div>
                                    </li>
                                    <li>
                                        <p>
                                            ※ 저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다.<br/>
                                            로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.
                                        </p>
                                    </li>
                                    <li>
                                        <button onClick={onClickSave}>저장</button>
                                    </li>
                                    <li>
                                        <h3><img src="./images/pop_up/notice_14_14_f03f40.svg" alt="" />샛별배송 지역 중 배송불가 장소 안내</h3>
                                    </li>
                                    <li>
                                        <div className="sub-list">
                                            <h4>관공서 / 학교 / 병원 / 시장 / 공단지역 / 산간지역 / 백화점 등</h4>
                                            <a href="!#">
                                                <span>자세히보기</span>
                                                <img src="./images/sign_up/ico_arrow_down_11x10.svg" alt="" />
                                            </a>
                                            <div className="sub">
                                                <ul>
                                                    <li>가락동농수산물도매시장</li>
                                                    <li>가락동농수산물시장</li>
                                                    <li>가천대학교</li>
                                                    <li>고려대학교안암캠퍼스</li>
                                                    <li>고매동 일부(일부지역만 배송가능)</li>
                                                    <li>국립중앙박물관</li>
                                                    <li>국민대학교</li>
                                                    <li>덕성여자대학교</li>
                                                    <li>덕양구 신원동 일부(일부지역만 배송가능)</li>
                                                    <li>도내동 일부(원흥지구만 배송가능)</li>
                                                    <li>동덕여자대학교</li>
                                                    <li>반월특수지구</li>
                                                    <li>서경대학교</li>
                                                    <li>서울사이버대학교</li>
                                                    <li>서울시립대학교</li>
                                                    <li>서울여자대학교</li>
                                                    <li>성균관대학교</li>
                                                    <li>성신여자대학교</li>
                                                    <li>세종대학교</li>
                                                    <li>연세대학교</li>
                                                    <li>이화여자대학교</li>
                                                    <li>한국외국어대학교</li>
                                                    <li>홍익대학교</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* 주소검색 API */}
                            <DaumPostcode 
                                id="postcodeComponent"
                                style={postcodeStyle}
                                onComplete={onCompletePostcode}
                            />
                        </div>
                    </div>
                        </div>
                    )
                }   
        </div>
    );
};