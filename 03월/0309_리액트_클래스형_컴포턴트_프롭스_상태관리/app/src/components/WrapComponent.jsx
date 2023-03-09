import React,{Component} from 'react';
import MainComponent from './wrap/MainComponent';
import female from '../img/wedding-img5.jpg'
import male from '../img/wedding-img6.jpg'
import '../scss/wrap.scss'

class WrapComponent extends React.Component {

  //생성자 Constructor
  constructor(props){
    super(props); //this 사용 가능
    this.state = {
      title : '클래스형 컴포넌트 타이틀',
      cnt : 0,
      과일 : this.props.과일,
      회원 : {
        아이디 : '',
        비밀번호 : '',
        이름 : '',
        이메일 : ''
      },
      isGender : true,
      할일 : '',  //입력상자 온체인지 이벤트
      todoList : [] //버튼클릭해서 할일 내용 누적 저장
    }
  }

  //TODO LIST
  onChangeTodoWrite = (e) => {
    this.setState({
      할일 : e.target.value
    })
  }

  //1. 버튼 클릭 이벤트 : 배열에 데이터 추가 ...전개 연산자 이용 추가한다
  //* 배열에 저장 목록은 새로고침하면 브라우저가 새로 렌더링되면서 모두 초기화
  
  onClickTodoListAdd = (e) => {
    e.preventDefault();
    this.setState({
      todoList : [
        ...this.state.todoList,
        {
          할일 : this.state.할일  //입력상자에서 입력된 state.할일
        }
      ],
      할일 : ''
    })
  }
  //2. 추가된 배열에 목록을 브라우저 저장에서 저장한다.(영구저장된다.)
  //3. 스토리지 : localStorage [게터, 세터]
  onClickTodoListAddStorage = (e) => {
    e.preventDefault();
    const key='TODO';
    //로컬스토리지 저장하기 : 문자열로 저장된다. 객체 저장 Object 문자열로 변환하고 저장
    //localStorage.setItem(키 값)
    //문제점 : 새로고치고 배열이 비어있는 상태 또는 입력된 1개의 데이터인경우
    //스토리지에 저장하면 스토리지 데이터가 업데이트 되면서 모두 삭제되고 빈데이터 또는
    //최근 입력된 1개 이상의 데이터만 저장된다.(덮어쓰기)
    //스토리지 이전에 있는 데이터를 그대로 보관하고 배열에 있는 데이터는 추가로 저장한다.
    //그러려면 스토리지 데이터를 가져오기 하고 추가된 배열 데이터를 병합한다. 전개연산자를 이용
    //1. 로컬 스토리지 데이터 가져오기(게터)
    const getData = localStorage.getItem(key);
    //예외처리 빈값 null 널은 오류가 아니다. 그러나 잠정적으로 이후에 오류가ㅣ 발생할수있는 이유가 된다.
    
    let todo = []
    if (getData !== null) { //만약 가져올 데이터가 있다면 파싱처리(객체변환)
      todo = JSON.parse(getData);
    }
    todo = [
      ...todo,
      {
        할일: this.state.할일
      }
    ]
    //2. 로컬 스토리지 데이터 추가 저장하기(세터)
    localStorage.setItem(key, JSON.stringify(todo));
    this.setState({
      할일 : ''
    })
  }

  //`1씩 증가 클릭 이벤트 함수 : 상태 변경 세터함수 이용
  //this를 사용하면 전개연산자 사용안해도 가능
  onClickAdd = (e) => {
    e.preventDefault();
    this.setState({
      cnt : this.state.cnt + 1
    })
  }

  //1씩 감소 클릭 이벤트 함수 : 상태 변경 세터함수 이용
  onClickSub = (e) => {
    e.preventDefault();
    this.setState({
      cnt : this.state.cnt - 1
    })
  }

  onClickMember = (e) => {
    e.preventDefault();
    this.setState({
      회원 : {
        ...this.state.회원,
        아이디 : 'member123',
        비밀번호 : '1234',
        이름 : '홍혁진',
        이메일 : 'gurwlszx@naver.com'
      }
    })
  }

  //파라미터 변수 사용하기
  onClickParamAdd = (e, z) => {
    const {cnt} = this.state
    e.preventDefault();
    // alert(z);
    this.setState({
      cnt : cnt + 1
    })
  }

  onClickParamSub = (e, z) => {
    e.preventDefault();
    // alert(z);
    this.setState({
      cnt : this.state.cnt - 1
    })
  }

  

  render() {
    return (
      <div id='wrap' style={{textAlign : 'center', lineHeight : '200%'}}>
        <h1>{this.state.title}</h1>
        <h2>{this.props.과일}</h2>
        <h1>{this.state.cnt}</h1>
        <hr />
        <h1><em>{this.state.회원.아이디}</em></h1>
        <h1><em>{this.state.회원.비밀번호}</em></h1>
        <h1><em>{this.state.회원.이름}</em></h1>
        <h1><em>{this.state.회원.이메일}</em></h1>
        <hr />
        <br /><br /><br />
        {/* 컨스트럭터 함수 클릭 이벤트 */}
        <button onClick={this.onClickAdd}>증가</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.onClickSub}>감소</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.onClickMember}>회원정보</button>
        <hr />
        <br /><br /><br />
        {/* 클릭 이벤트와 매개변수 전달 구현 */}
        <button onClick={(e)=>this.onClickParamAdd(e, '1씩 증가')}>클릭 이벤트 매개변수 전달 구현 1씩증가</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={(e)=>this.onClickParamSub(e, '1씩 감소')}>클릭 이벤트 매개변수 전달 구현 1씩감소</button>
        <hr />
        <br /><br /><br />
        {/* 클릭 이벤트를 직접 구현 */}
        <button onClick={(e)=>this.setState({cnt:this.state.cnt+1})}>직접 클릭 이벤트 1씩증가</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={(e)=>this.setState({cnt:this.state.cnt-1})}>직접 클릭 이벤트 1씩감소</button>
        <div style={{width : '300px', margin : '50px auto'}}>
          {
            this.state.isGender===true ? <img src={female} alt="여성이미지" style={{width : '100%'}}/> : <img src={male} alt="남성이미지" style={{width : '100%'}}/>
          }          
        </div>
        <hr />
        <br /><br /><br /><br /><br /><br />
        <button onClick={()=>this.setState({isGender : !this.state.isGender})}>Gender</button>

        <hr />
        <div id="todo">
          <div className="container">
            <div className="title">
              <h1>TODO</h1>
            </div>
            <form name='todo' id='todo2' method='pose' action="./todo.php">
              <ul className='input-box'>
                <li><input
                       type="text" 
                       name='todoW' 
                       id='todoW' 
                       placeholder='할일을입력하세요.' 
                       onChange={this.onChangeTodoWrite} 
                       value ={this.state.할일}/>
                    </li>
              </ul>
              <div className="btn-box">
                <button onClick={this.onClickTodoListAdd}>배열저장</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.onClickTodoListAddStorage}>로컬스토리지 저장</button>
              </div>
            </form>
          </div>
        </div>
        {/* <MainComponent title={this.state.title}/> */}
      </div>
    );
  }
}

export default WrapComponent;

WrapComponent.defaultProps = {
  과일 : ['사과', '포도', '수박', '딸기', '귤', '배']
}