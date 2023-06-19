import React from "react";
import {Link} from 'react-router-dom';

export default function NoticeRightListComponent({notice}) {
    
    const [list, setList] = React.useState(5);  // 한화면에 보여질 목록개수
    const [pageNumber, setPageNumber] = React.useState(1); // 페이지번호
    const [groupPage, setGroupPage] = React.useState(5); // 페이지번호
    const [cnt, setCnt] = React.useState(1); // 페이지번호

    const onClickPageNum=(e, num)=>{
        e.preventDefault();
        setPageNumber(num);
    }

    const onClickNextGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }
    const onClickPrevGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }

    return (
        <div id='noticeRight'>
            <div className="container">
                <div className="title">
                    <h3>공지사항<span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></h3>
                </div>           
                <div className="content">
                    <dl>
                        <dt>
                            <span>번호</span>
                            <span>제목</span>
                            <span>작성일</span>
                            <span>조회수</span>
                        </dt>                        

                        {
                            notice.map((item, idx)=>{

                                if( Math.ceil((idx+1)/list) === pageNumber ){ // 클릭번튼 번호 전달 1(100~86) 2(85~70) 3 4 5 6 7

                                    return(
                                        
                                            <dd key={item.NO}>
                                                <Link to={`/view_page?listNum=${item.NO}`}>  {/* 글보기 페이지 */}
                                                    <span>{item.NO}</span>
                                                    <span>{item.제목}</span>
                                                    <span>{item.날짜}</span>
                                                    <span>{item.조회수}</span>
                                                </Link>
                                            </dd>
                                    )
                                 }
                            })        

                        }
                    </dl>

                    <div className="page-button-box">
                        <button  onClick={onClickPrevGroup}>&lt;</button> 
                        {
                            notice.map((item, idx)=>{
                                if(idx < Math.ceil((notice.length/list/groupPage+1))){
                                    return(
                                        <a key={item.NO} href="!#" onClick={(e)=>onClickPageNum(e, idx+1)}>{idx+1}</a>
                                    )
                                }

                            })
                        }
                         <button onClick={onClickNextGroup}>&gt;</button>
                    </div>    

                </div>
            </div>
        </div>
    );
};