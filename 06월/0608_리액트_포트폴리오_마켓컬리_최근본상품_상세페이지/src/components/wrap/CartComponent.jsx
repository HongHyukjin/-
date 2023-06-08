import React from 'react';
import './scss/cart.scss';

export default function CartComponent() {
    return (
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
                                    <dl>
                                        <dt>
                                            <div><img src="./images/cart/icon_01.svg" alt="" /><h3>냉장 상품</h3></div> 
                                            <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" name='chk' id='chk1' value='PRODUCT0001' />  
                                                </li>
                                                <li>
                                                    <span className='cart-small-bgimg  blind'>Cart Small Image</span>
                                                </li>
                                                <li>
                                                    <a href="!#">스팀에 데친 문어_200g + 증정 초고추장 40g</a>
                                                </li>
                                                <li>
                                                    <div>
                                                        <button className='sub-bgimg-btn blind'>빼기</button>
                                                        <strong>2</strong>
                                                        <button className='add-bgimg-btn blind'>더하기</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>31,300원</span>    
                                                </li>
                                                <li>
                                                    <a href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
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
                                        <em>배송지를 등록</em> 하고<br/>
                                        구매 가능한 상품을 확인하세요!
                                    </p>
                                    <button><img src="./images/cart/icon_zoom.svg" alt="" />주소 검색</button>
                                </li>
                                <li>
                                    <div>
                                        <div className="row1">
                                            <p><strong>상금금액</strong><strong>309,900원</strong></p>
                                            <p>
                                                <strong>상금금액</strong><strong>309,900원</strong>
                                                <span>로그인 후 할인 금액 적용</span>
                                            </p>
                                            <p><strong>배송비</strong><strong>0원</strong></p>
                                        </div>
                                        <div className="row2">
                                            <p><strong>결제예정금액</strong><strong>309,900원</strong></p>
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
    );
};