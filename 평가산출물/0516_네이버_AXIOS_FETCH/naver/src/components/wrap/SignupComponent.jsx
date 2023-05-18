import React from 'react';
import { ajax } from 'jquery';
import $ from 'jquery';
import axios from 'axios';

export default function SignupComponent() {

    const [state, setState] = React.useState({
        id : '',
        pw1 : '',
        pw2 : '',
        name : '',
        birthYear : '',
        birthMonth : '',
        birthDay : '',
        gender : '',
        email : '',
        nation : '',
        hp : ''
    })

    const onChangeId = (e) => {
        setState({
            ...state,
            id : e.target.value
        })
    }

    const onChangePw1 = (e) => {
        setState({
            ...state,
            pw1 : e.target.value
        })
    }

    const onChangePw2 = (e) => {
        setState({
            ...state,
            pw2 : e.target.value
        })
    }

    const onChangeName = (e) => {
        setState({
            ...state,
            name : e.target.value
        })
    }

    const onChangeBirthYear = (e) => {
        setState({
            ...state,
            birthYear : e.target.value
        })
    }

    const onChangeBirthMonth = (e) => {
        setState({
            ...state,
            birthMonth : e.target.value
        })
    }

    const onChangeBirthDay = (e) => {
        setState({
            ...state,
            birthDay : e.target.value
        })
    }

    const onChangeGender = (e) => {
        setState({
            ...state,
            gender : e.target.value
        })
    }

    const onChangeEmail = (e) => {
        setState({
            ...state,
            email : e.target.value
        })
    }

    const onChangeNation = (e) => {
        setState({
            ...state,
            nation : e.target.value
        })
    }

    const onChangeHp = (e) => {
        setState({
            ...state,
            hp : e.target.value
        })
    }

    const onSubmitSignupEvent = (e) => {
        e.preventDefault();

    // const formData = {
    //     "id" : state.id,
    //     "pw1" : state.pw1,
    //     "pw2" : state.pw2,
    //     "name" : state.name,
    //     "birthYear" : state.birthYear,
    //     "birthMonth" : state.birthMonth,
    //     "birthDay" : state.birthDay,
    //     "gender" : state.gender,
    //     "email" : state.email,
    //     "nation" : state.nation,
    //     "hp" : state.hp
    // }

    let formData = new URLSearchParams();
    formData.append("id", state.id);
    formData.append("pw1", state.pw1);
    formData.append("pw2", state.pw2);
    formData.append("name", state.name);
    formData.append("birthYear", state.birthYear);
    formData.append("birthMonth", state.birthMonth);
    formData.append("birthDay", state.birthDay);
    formData.append("gender", state.gender);
    formData.append("email", state.email);
    formData.append("nation", state.nation);
    formData.append("hp", state.hp);

    // $.ajax({
    //     url:'http://localhost:8080/JSP/0514/네이버_회원가입/naver_user_signup_action.jsp',
    //     type:'POST',
    //     data: formData,
    //     success(res){
    //         console.log('AJAX 성공!');
    //         console.log(res);
    //         console.log(JSON.parse(res));
    //     },
    //     error(err){
    //         console.log('AJAX 실패 : ' + err);
    //     }
    // });

    // axios.get('http://localhost:8080/JSP/0514_네이버_JSP/네이버_회원가입/naver_user_signup_action.jsp',
    // {
    //     params:formData
    // })
    // .then((res)=>{
    //     console.log('AXIOS 성공!');
    //     console.log(res);
    //     console.log(res.data);
    // })
    // .catch((err)=>{
    //     console.log('AXIOS 실패!');
    //     console.log(err);
    // })
    
    fetch('http://localhost:8080/JSP/0514_네이버_JSP/네이버_회원가입/naver_user_signup_action.jsp',{
        method:'POST',
        body:formData
    })
    .then((res)=>{
        console.log('FETCH 성공!');
        return res.json();
    })
    .then((res)=>{
        console.log(res);
    })



    }

    return (
        <div id="wrap">
            <div className="title">
                <a href="http://www.naver.com"></a>
            </div>
            <form onSubmit={onSubmitSignupEvent} name="sign_up" id="signUp" method="post" action="./naver_user_signup_action.jsp" >
                <label htmlFor="id">아이디</label>
                <div>
                    <input type="text" name="id" id="id" onChange={onChangeId}/>
                    <span>@naver.com</span>
                </div>
                <label htmlFor="pw1">비밀번호</label>
                <div>
                    <input type="text" name="pw1" id="pw1" onChange={onChangePw1}/>
                </div>
                <label htmlFor="pw2">비밀번호 재확인</label>
                <div>
                    <input type="text" name="pw2" id="pw2" onChange={onChangePw2}/>
                </div>
                <label htmlFor="name">이름</label>
                <div>
                    <input type="text" name="name" id="name" onChange={onChangeName}/>
                </div>
                <label htmlFor="birth_year">생년월일</label>
                <span>
                    <div className="birth">
                        <input className="year" type="text" name="birthYear" id="birthYear" placeholder="년(4자)" onChange={onChangeBirthYear}/>
                    </div>
                    <div className="birth">
                        <select className="month" name="birthMonth" id="birthMonth" onChange={onChangeBirthMonth}>
                            <option value="월">월</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="birth">
                        <input className="day" type="text" name="birthDay" id="birthDay" placeholder="일" onChange={onChangeBirthDay}/>
                    </div>
                </span>
                <label htmlFor="gender">성별</label>
                <div>
                    <select name="gender" id="gender" onChange={onChangeGender}>
                        <option value="성별">성별</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                        <option value="선택안함">선택안함</option>
                    </select>
                </div>
                <label htmlFor="email">본인 확인 이메일<span>(선택)</span></label>
                <div>
                    <input type="text" name="email" id="email" placeholder="선택입력" onChange={onChangeEmail}/>
                </div>
                <label htmlFor="hp">휴대전화</label>
                <div>
                    <select name="nation" id="nation" onChange={onChangeNation}>
                        <option value="대한민국 +82">대한민국 +82</option>
                        <option value="그리스 +30">그리스 +30</option>
                        <option value="나이지리아 +234">나이지리아 +234</option>
                        <option value="노르웨이 +47">노르웨이 +47</option>
                        <option value="독일 +49">독일 +49</option>
                    </select>
                </div>
                <label htmlFor="hp"></label>
                <div className="hp">
                        <input className="hp" type="text" name="hp" id="hp" placeholder="전화번호 입력" onChange={onChangeHp}/>
                        <button className="certification">인증번호 받기</button>
                </div>
                <button className="signup" type="submit">가입하기</button>
            </form>
    </div>
    );
};

