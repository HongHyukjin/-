import React from 'react';
import './scss/cart.scss';
import './scss/confirm_modal.scss';

export default function CartComponent({openPopupDaumPostApi, addr, confirmModalOpen}) {

    const [isDelete, setIsDelete] = React.useState(false);  // 로그인상태 true, 로그인안한상태 false
    const [delCode, setDelCode] = React.useState('');  // 로그인상태 true, 로그인안한상태 false
    const [isConfirm, setIsConfirm] = React.useState(false);  // 로그인상태 true, 로그인안한상태 false
    const [isButtonSUB, setIsButtonSUB] = React.useState(false);  // 로그인상태 true, 로그인안한상태 false
    const [isLogin, setLogin] = React.useState(true);  // 로그인상태 true, 로그인안한상태 false
    const [cart, setCart] = React.useState([]);
    const [arr1, setArr1] = React.useState([]);
    const [arr2, setArr2] = React.useState([]);
    const [arr3, setArr3] = React.useState([]);

    // 장바구니의 오측 금액 표기 집계표(피벗테이블) 상태변수
    const [state, setState] = React.useState({
        총상품금액: 0,    //  누계금액
        상품할인금액: 0, // 누계금액
        배송비: 0,      // 결정금액 
        결재예정금액: 0  // 결정금액
    });

    const {총상품금액,상품할인금액,배송비,결재예정금액} = state;

    // 수량 감소 카운트 => 1행 데이터 레코드(record)
    const onClickSUB=(e, record)=>{ // "PRODUCT0002"
        e.preventDefault();
        console.log( record );
        // 수량 감소 : 결과를 리턴받는다.
        // 현재 각 행마다 구분하는 제품코드(Primary key)
        // 비교문 다음 해당하지 않는 데이터는 그대로의 값으로 리턴한다. false
        // 해당하는 제품은 수량 수정, 금액수정 
        // 배열[
        //     {제품코드:PRODUCT0001,...수량:10, 총상품금액: 70000},
        //     {제품코드:PRODUCT0002,...수량:10, 총상품금액: 70000}
        // ]
        const result = cart.map((item)=>{
            return( 
                item.제품코드===record.제품코드 ? ({...item, 수량: (item.수량 >= 2 ? item.수량-1 : 1), 총상품금액: Math.round((item.수량 >= 2 ? item.수량-1 : 1)*(item.정가*(1-item.할인율))) }) : ({...item})
            )
        });

        // 리턴받는 결과 데이터를 cart 배열에 저장한다.
        setCart(result);
        // 리턴받는 결과 데이터를 로컬스토레이지에 저장한다.
        localStorage.setItem('MJ_KURLY_CART_PRODUCT', JSON.stringify(result));
    }
    

    // 수량 증가 카운트 => 1행 데이터 레코드(record)
    const onClickADD=(e, record)=>{
        e.preventDefault();
        console.log( record );
        const result = cart.map((item)=>{
            return( 
                item.제품코드===record.제품코드 ? ({...item, 수량: (item.수량+1), 총상품금액: Math.round((item.수량+1)*(item.정가*(1-item.할인율))) }) : ({...item})
            )
        });

        // 리턴받는 결과 데이터를 cart 배열에 저장한다.
        setCart(result);
        // 리턴받는 결과 데이터를 로컬스토레이지에 저장한다.
        localStorage.setItem('MJ_KURLY_CART_PRODUCT', JSON.stringify(result));
    }

    

    // 장바구니 제품삭제
    const onClickDel=(e, record)=>{

        e.preventDefault();
        setIsDelete(true);
        setDelCode(record.제품코드);  // 삭제 상태관리변수
    }

    React.useEffect(()=>{
        isDelete && setIsConfirm(true); // 모달창 취소 & 확인버튼
    },[delCode, isDelete]); // 삭제 상태관리변수가 변경되면 모달창 띄운다


    // 삭제 모달창 취소 & 확인 번튼 클릭이벤트 구현
    const onClickConfirmModalClose=(e, value)=>{
        e.preventDefault();
        if(value==='확인'){          
            const result = cart.filter((item)=>item.제품코드!==delCode);
            setCart( result );
            localStorage.setItem('MJ_KURLY_CART_PRODUCT',  JSON.stringify(result));
            // 초기 init
            initMethod();           
        }
        setDelCode('');      // 제품코드 상태변수삭제
        setIsConfirm(false); // 초기화
        setIsDelete(false);  // 초기화
    }





    //1. 냉장
    const res1 = cart.map((item, idx)=>{
        if(item.보관방법==='냉장'){
            return(                                                             
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button onClick={(e)=>onClickSUB(e, item)} className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button onClick={(e)=>onClickADD(e, item)} className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a onClick={(e)=>onClickDel(e, item)} href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )  
        } 
    }) 

    
    //2. 냉동
    const res2 = cart.map((item, idx)=>{  
        if(item.보관방법==='냉동'){
            return(                                                                
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button  onClick={(e)=>onClickSUB(e, item)}  className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button  onClick={(e)=>onClickADD(e, item)}  className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a  onClick={(e)=>onClickDel(e, item)} href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )     
        }
    }) 

    //3. 상온
    const res3 = cart.map((item, idx)=>{  
        if(item.보관방법==='상온'){
            return(
                                                                
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button  onClick={(e)=>onClickSUB(e, item)}  className={`sub-bgimg-btn blind${item.수량===1?' on':''}`}>빼기</button>
                                <strong>{item.수량}</strong>
                                <button onClick={(e)=>onClickADD(e, item)}  className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a  onClick={(e)=>onClickDel(e, item)}  href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
                                                                                                                                
            )
        }
    }) 


    // 장바구니(CART) 가져오기

    const initMethod=()=>{
        if( localStorage.getItem('MJ_KURLY_CART_PRODUCT')!==null ){
            let result = JSON.parse(localStorage.getItem('MJ_KURLY_CART_PRODUCT'));
            
            // 정렬 : 보관방법 오름차순 ASC
            result.sort((a,b)=>{                
                if(a.보관방법  >  b.보관방법) return  1;
                if(a.보관방법  <  b.보관방법) return -1;
                if(a.보관방법 === b.보관방법) return  0;
            });

            
            setCart(result);

            let arr1 =[];
            let arr2 =[];
            let arr3 =[];
            

            // console.log( result );
            result.map((item, idx)=>{
                if( item.보관방법 === '냉장' ){
                    arr1 = [...arr1, item];
                }                
                else if( item.보관방법 === '냉동' ){
                    arr2 = [...arr2, item];
                }                
                else if( item.보관방법 === '상온' ){
                    arr3 = [...arr3, item];
                }                
            });

            // console.log( arr1 );
            // console.log( arr2 );
            // console.log( arr3 );
            setArr1(arr1)
            setArr2(arr2)
            setArr3(arr3)
        }
    }

    React.useEffect(()=>{
        initMethod();
    },[]);


    
    // 카트가 들어오면 계산
    React.useEffect(()=>{
      
        let 총상품금액 = 0;
        let 상품할인금액 = 0;
        let 배송비 = 0;
        let 결재예정금액 = 0;

        cart.map((item, idx)=>{
            if(item.수량!==undefined && item.총상품금액!==undefined){
                총상품금액 += Number(item.총상품금액);
                상품할인금액 += Math.round(Number(item.정가)*Number(item.할인율));
                배송비 = ((총상품금액-상품할인금액) < 40000 ? 3000 : 0);
                결재예정금액 = (총상품금액-상품할인금액)+배송비
            }
        });

        setState({
            총상품금액: 총상품금액,
            상품할인금액: 상품할인금액,
            배송비: 배송비,
            결재예정금액: 결재예정금액
        })

    },[cart]);



    return (
        <>
            <div id='cart'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>장바구니</h1>
                        </div>
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li>
                                        <span>
                                            <button className='select-all-btn'>
                                                전체선택
                                                <strong>
                                                    (
                                                        <em className='select-count'>{3}</em> 
                                                        <i>/</i> 
                                                        <em className='cart-tot'>{5}</em>
                                                    )
                                                </strong>
                                            </button>
                                            <i>|</i>
                                            <button className='delete-btn'>
                                                선택삭제
                                            </button>
                                        </span>

                                    </li>


                                    <li>
                                        
                                        {
                                            cart.length===0 ? 
                                            (
                                                <p className='empty-box'>장바구니에 담긴 상품이 없습니다</p>
                                            )
                                            :
                                            (
                                                <dl>
                                                    {/* 장바구니 상품 목록 시작  */}

                                                    {
                                                        arr1.length >=1 && (
                                                            <div className='acodian'>
                                                                <dt>
                                                                    <div><img src="./images/cart/icon_01.svg" alt="" /><h3>냉장 상품</h3></div> 
                                                                    <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                </dt>
                                                                { res1 }
                                                            </div>
                                                        )
                                                    }


                                                                
                                                    {
                                                        arr2.length >=1 && (
                                                            <>
                                                                <dt>
                                                                    <div><img src="./images/cart/icon_02.svg" alt="" /><h3>냉동 상품</h3></div> 
                                                                    <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                </dt>
                                                                { res2 }
                                                            </>
                                                        )
                                                    }
                                                                        
                                                                        {
                                                        arr3.length >=1 && (
                                                            <>
                                                                <dt>
                                                                    <div><img src="./images/cart/icon_03.svg" alt="" /><h3>상온 상품</h3></div> 
                                                                    <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                                </dt>
                                                                { res3 }
                                                            </>
                                                        )
                                                    }
                                                            
                                                    
                                                        
                                                    {/* 상품 목록 반복문 끝    */}

                                                </dl>
                                            )
                                        }   
                                    </li>

                                    
                                    <li>
                                        <span>
                                            <button className='select-btn'>
                                                전체선택
                                                <strong>
                                                    <em className='select-count'>3</em>  
                                                    <em className='cart-tot'>5</em>
                                                </strong>
                                            </button>
                                                <i>|</i>
                                            <button className='delete-btn'>
                                                선택삭제
                                            </button>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <h3>
                                            <img src="./images/cart/icon_94.svg" alt="" />
                                            배송지
                                        </h3>
                                        <p>
                                        {
                                            addr.isAddr===true ? 
                                                (     
                                                    `${addr.주소1} ${addr.주소2}`

                                                )
                                                : 
                                                (
                                                    <>
                                                        <em>배송지를 등록</em> 하고<br/>
                                                        구매 가능한 상품을 확인하세요!
                                                    </>                                                   
                                                )
                                        }
                                        </p>
                                        <button onClick={openPopupDaumPostApi}>
                                        {
                                            addr.isAddr===true ? 
                                            (

                                                <>배송지변경</>
                                                
                                            )
                                            :
                                            (
                                                <><img src="./images/cart/icon_zoom.svg" alt="" />주소 검색</>
                                            )                                                
                                        }
                                        </button>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="row1">
                                                <p><strong>상품금액</strong><strong>{Number(총상품금액).toLocaleString('ko-KR')}원</strong></p>
                                                <p>
                                                    <strong>상품할인금액</strong><strong>{ isLogin===true ? `-${Number(상품할인금액).toLocaleString('ko-KR')}` : 0 }원</strong>
                                                    {isLogin===true ? '' : <span>로그인 후 할인 금액 적용</span>}
                                                </p>
                                                <p><strong>배송비</strong><strong>{배송비 > 0 ? `+${Number(배송비).toLocaleString('ko-KR')}` : 0}원</strong></p>
                                                {Number(총상품금액) < 40000 && <p>{(40000-(Number(총상품금액)-Number(상품할인금액))).toLocaleString('ko-KR')}원 추가주문 시, <em>무료배송</em></p>}
                                            </div>
                                            <div className="row2">
                                                <p><strong>결제예정금액</strong><strong>{(결재예정금액).toLocaleString('ko-KR')}원</strong></p>
                                                <p><strong><em>적립</em>로그인 후 회원 등급에 따라 적립</strong></p>
                                            </div>
                                        </div>                                        
                                    </li>
                                    <li>
                                        <button>배송지를 입력해주세요</button>    
                                        <p>
                                            [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br/> 
                                            [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isConfirm && (
                    <div id="confirmModal2" className='confirm'>
                        <div className="wrap2">
                            <div className="container">
                                <div className="content">
                                    <div className="title-box">
                                        <h1>삭제하시겠습니까?</h1>
                                    </div>
                                    <div className="button-box">
                                        <button onClick={(e)=>onClickConfirmModalClose(e, "취소")}>취소</button>
                                        <button onClick={(e)=>onClickConfirmModalClose(e, "확인")}>확인</button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            }
        </>
    );
};