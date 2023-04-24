import React from 'react';

export default function Sub4ComponentChild ({특가혜택}) {

  const newProductList = () => {
    특가혜택.map((item, idx) => {
      // console.log(idx, item);
      // console.log(item.이미지);
    })
  }

  React.useEffect(() => {
    newProductList();
  }, [특가혜택]);




  const result = 특가혜택.map((item) => {
    return (
      <li key={item.제품코드}>
        <a href="!#">
            <div className="img-box">
                <img src={`./images/sub4/${item.이미지}`} alt="" />
            </div>
        </a>
      </li> 
    )
  })

  return (
            <ul>
              
              { result }

            </ul>     
  );
};

