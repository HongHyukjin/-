import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [state, setState] = useState({
        hello : ''
   })

    useEffect(() => {
        axios.get('/api/hello')
        .then((res) => {
            setState({
            ...state,
            hello : 'Hello World!'
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {state.hello}
        </div>
    );
}

export default App;