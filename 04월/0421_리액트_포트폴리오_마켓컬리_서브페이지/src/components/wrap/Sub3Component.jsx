import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Sub3ComponentChild from './Sub3ComponentChild';

export default function Sub3Component () {

  const [state, setstate] = React.useState({
    알뜰쇼핑 : []
  })

  const getAlProduct = () => {
    axios({
        url:'./data/product.json',
        method:'GET'
    })
    .then((res)=>{
        setstate({
            ...state,
            알뜰쇼핑 : res.data.알뜰쇼핑,
        })
    })
    .catch((err)=>{
        console.log("AXIOS ERROR");
    });
}

  React.useEffect(() => {
    getAlProduct();
  }, [])

  return (
    <main id='sub3'>
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
                        <h2>알뜰쇼핑</h2>    
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
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'샐러드 간편식'} />
                                                    샐러드 간편식
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk2">
                                                    <input type="checkbox" name='category1_chk2' id='category1Chk2'  value={'과일·견과·쌀'} />
                                                    과일·견과·쌀
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk3">
                                                    <input type="checkbox" name='category1_chk3' id='category1Chk3'  value={'국·반찬·메인요리'} />
                                                    국·반찬·메인요리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk4">
                                                    <input type="checkbox" name='category1_chk4' id='category1Chk4'  value={'면·양념·오일'} />
                                                    면·양념·오일
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk5">
                                                    <input type="checkbox" name='category1_chk5' id='category1Chk5'  value={'수산·해산·건어물'} />
                                                    수산·해산·건어물
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk6">
                                                    <input type="checkbox" name='category1_chk6' id='category1Chk6'  value={'생활용품·리빙·캠핑'} />
                                                    생활용품·리빙·캠핑
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk7">
                                                    <input type="checkbox" name='category1_chk7' id='category1Chk7'  value={'헤어·바디·구강'} />
                                                    헤어·바디·구강
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk8">
                                                    <input type="checkbox" name='category1_chk8' id='category1Chk8'  value={'베이커리·치즈·델리'} />
                                                    베이커리·치즈·델리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk9">
                                                    <input type="checkbox" name='category1_chk9' id='category1Chk9'  value={'베이비·키즈·완구'} />
                                                    베이비·키즈·완구
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk10">
                                                    <input type="checkbox" name='category1_chk10' id='category1Chk10'  value={'생수·음료·우유·커피'} />
                                                    생수·음료·우유·커피
                                               </label>
                                            </li> 
                                        </ul>
                                    </div>
                                    <a href="!#" className='category-btn category2'><span>브랜드</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                    <div className="sub">
                                        <ul>
                                           <li>
                                               <label htmlFor="category2Chk1">
                                                    <input type="checkbox" name='category2_chk1' id='category2Chk1'  value={'샐러드 간편식'} />
                                                    샐러드 간편식
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                    과일·견과·쌀
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'국·반찬·메인요리'} />
                                                    국·반찬·메인요리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'면·양념·오일'} />
                                                    면·양념·오일
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'수산·해산·건어물'} />
                                                    수산·해산·건어물
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생활용품·리빙·캠핑'} />
                                                    생활용품·리빙·캠핑
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'헤어·바디·구강'} />
                                                    헤어·바디·구강
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이커리·치즈·델리'} />
                                                    베이커리·치즈·델리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이비·키즈·완구'} />
                                                    베이비·키즈·완구
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생수·음료·우유·커피'} />
                                                    생수·음료·우유·커피
                                               </label>
                                            </li> 
                                        </ul>
                                    </div>
                                    <a href="!#" className='category-btn category3'><span>가격</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                    <div className="sub">
                                        <ul>
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'샐러드 간편식'} />
                                                    샐러드 간편식
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                    과일·견과·쌀
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'국·반찬·메인요리'} />
                                                    국·반찬·메인요리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'면·양념·오일'} />
                                                    면·양념·오일
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'수산·해산·건어물'} />
                                                    수산·해산·건어물
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생활용품·리빙·캠핑'} />
                                                    생활용품·리빙·캠핑
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'헤어·바디·구강'} />
                                                    헤어·바디·구강
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이커리·치즈·델리'} />
                                                    베이커리·치즈·델리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이비·키즈·완구'} />
                                                    베이비·키즈·완구
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생수·음료·우유·커피'} />
                                                    생수·음료·우유·커피
                                               </label>
                                            </li> 
                                        </ul>
                                    </div>
                                    <a href="!#" className='category-btn category4'><span>혜택</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                    <div className="sub">
                                        <ul>
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'샐러드 간편식'} />
                                                    샐러드 간편식
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                    과일·견과·쌀
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'국·반찬·메인요리'} />
                                                    국·반찬·메인요리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'면·양념·오일'} />
                                                    면·양념·오일
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'수산·해산·건어물'} />
                                                    수산·해산·건어물
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생활용품·리빙·캠핑'} />
                                                    생활용품·리빙·캠핑
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'헤어·바디·구강'} />
                                                    헤어·바디·구강
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이커리·치즈·델리'} />
                                                    베이커리·치즈·델리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이비·키즈·완구'} />
                                                    베이비·키즈·완구
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생수·음료·우유·커피'} />
                                                    생수·음료·우유·커피
                                               </label>
                                            </li> 
                                        </ul>
                                    </div>
                                    <a href="!#" className='category-btn category5'><span>유형</span><img src="./images/sub1/icon_arrow_up.svg" alt="" /></a>
                                    <div className="sub">
                                        <ul>
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'샐러드 간편식'} />
                                                    샐러드 간편식
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'과일·견과·쌀'} />
                                                    과일·견과·쌀
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'국·반찬·메인요리'} />
                                                    국·반찬·메인요리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'면·양념·오일'} />
                                                    면·양념·오일
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'수산·해산·건어물'} />
                                                    수산·해산·건어물
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생활용품·리빙·캠핑'} />
                                                    생활용품·리빙·캠핑
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'헤어·바디·구강'} />
                                                    헤어·바디·구강
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이커리·치즈·델리'} />
                                                    베이커리·치즈·델리
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'베이비·키즈·완구'} />
                                                    베이비·키즈·완구
                                               </label>
                                            </li> 
                                           <li>
                                               <label htmlFor="category1Chk1">
                                                    <input type="checkbox" name='category1_chk1' id='category1Chk1'  value={'생수·음료·우유·커피'} />
                                                    생수·음료·우유·커피
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
                                <Sub3ComponentChild 알뜰쇼핑={state.알뜰쇼핑}/>
                            </div>
                        </div>
                   </div>     
                </div>     
            </div>     
        </section>
    </main>
  );
};

