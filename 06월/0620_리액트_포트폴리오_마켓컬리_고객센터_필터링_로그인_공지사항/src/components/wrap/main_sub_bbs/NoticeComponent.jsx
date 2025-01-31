import React from 'react';
import NoticeLeftNavComponent from './NoticeComponent/NoticeLeftNavComponent';
import NoticeRightListComponent from './NoticeComponent/NoticeRightListComponent';
import './notice_scss/notice.scss';
import {GlobalContext} from '../../../context/GlobalContext';
import axios from 'axios';

export default function NoticeComponent() {
   
    // 관리자 로그인 하면 글쓰기 가능
    const {isAdmin} = React.useContext(GlobalContext);

    const onClickWrite=(e)=>{
        window.location.pathname = '/notice_write';
    }

    const [notice, setNotice] = React.useState([]);

    React.useEffect(()=>{

        axios({
            url:'./data/notice_page/board.json',
            method:'GET'
        })
        .then((res)=>{
            // console.log( res.data );
            setNotice(res.data.notice);
        })
        .catch((err)=>{
            console.log( err );
        });

    },[]);    

    return (
        <div id='notice'>
            <div id="container">
                <NoticeLeftNavComponent/>
                <NoticeRightListComponent notice={notice}/>

                {
                    isAdmin && (
                    <div className="button-box">
                        <button onClick={onClickWrite}>글쓰기</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};