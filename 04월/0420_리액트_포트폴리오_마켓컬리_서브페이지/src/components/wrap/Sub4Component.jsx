import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Sub4ComponentChild from './Sub4ComponentChild';

export default function Sub4Component () {

  const [state, setstate] = React.useState({
    특가혜택 : []
  })

  const getTProduct = () => {
    axios({
        url:'./data/product.json',
        method:'GET'
    })
    .then((res)=>{
        setstate({
            ...state,
            특가혜택 : res.data.특가혜택,
        })
    })
    .catch((err)=>{
        console.log("AXIOS ERROR");
    });
}

  React.useEffect(() => {
    getTProduct();
  }, [])

  return (
    <main id='sub4'>
        <Sub4ComponentChild 특가혜택={state.특가혜택} />
    </main>
  );
};

