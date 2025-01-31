import React from 'react';
import Sub3ComponentChild from './Sub3ComponentChild';
import axios from 'axios';

export default function Sub3Component({setViewProduct}) {
    const [state, setState] = React.useState({
        알뜰상품: []
    });

    // 알뜰상품 가져오기
    const getAlProduct=()=>{
        axios({
            url:'./data/sub_page/product.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                알뜰상품: res.data.알뜰상품
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류!" + err);
        });  
    }
 

    React.useEffect(()=>{
        getAlProduct();
    },[]);

    return (
        <main id='sub1'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <a href="!#">
                                <img src="./images/sub1/0HpXehniZlRXiBeSfEFpPK8rSl35tGLPMUOwNNWK.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section2'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>알뜰상품</h2>    
                        </div>
                        <div className="content">                        
                            <div className="left">
                                <div className="left-title">
                                    <strong>필터</strong>
                                    <span>
                                        <img src="" alt="" />
                                        <em>초기화</em>
                                    </span>
                                </div>
                                <div className="left-content">
                                    <div>
                                        <a href="!#" className='category-btn category1'><span>카테고리</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk2' id='category1Chk2'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk3' id='category1Chk3'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk4' id='category1Chk4'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk5' id='category1Chk5'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk6' id='category1Chk6'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk7' id='category1Chk7'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk8' id='category1Chk8'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk9' id='category1Chk9'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk10' id='category1Chk10'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk11' id='category1Chk11'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a href="!#" className='category-btn category2'><span>브랜드</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category2_chk1' id='category2Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category2_chk2' id='category2Chk2'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category2_chk3' id='category2Chk3'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a href="!#" className='category-btn category3'><span>가격</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a href="!#" className='category-btn category4'><span>혜택</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                        <a href="!#" className='category-btn category5'><span>유형</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                        <div className="sub">
                                            <ul>
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        셀러드 간편식
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                               <li>
                                                   <label>
                                                        <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'셀러드 간편식'} />
                                                        과일·견과·쌀
                                                   </label>
                                                </li> 
                                            </ul>
                                        </div>
                                    </div>                                    

                                </div>
                            </div>
                            <div className="right">
                                <div className="right-title">
                                    <strong>총 215건</strong>
                                    <span>
                                        <a href="!#" className='order-btn'><span>추천순</span><img src="./images/sub1/icon_quet.svg" alt="" /></a>
                                        <i>|</i>
                                        <a href="!#" className='order-btn on'>신상품순</a>
                                        <i>|</i>
                                        <a href="!#" className='order-btn'>판매량순</a>
                                        <i>|</i>
                                        <a href="!#" className='order-btn'>혜택순</a>
                                        <i>|</i>
                                        <a href="!#" className='order-btn'>낮은 가격순</a>
                                        <i>|</i>
                                        <a href="!#" className='order-btn'>높은 가격순</a>                                        
                                    </span>  
                                </div>
                                <div className="right-content">
                                    {/* state.알뜰상품 => 하위컴포넌트 프롭스 데이터 내려주기 */}

                                   <Sub3ComponentChild 알뜰상품={state.알뜰상품}  setViewProduct={setViewProduct} />  

                                </div>
                            </div>
                       </div>     
                    </div>     
                </div>     
            </section>
        </main>
    );
};
 