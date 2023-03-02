// 2.리액트 컴포넌트 생성(클래스 객체) 명명규칙 파스칼 케이스 기법
function WrapComponent(props){
  return (
    <div id="wrap">
      <SkipComponent 성별={props.성별}/>
      <HeaderComponent 성별={props.성별} 취미={props.취미}/>
      <MainComponent props={props}/>
      <FooterComponent 구분={props.구분}/>
      <GotopComponent />
      <h1>이름 : {props.이름}</h1>
      <h1>구분 : {props.구분}</h1>
    </div>
  )
}
// 랩퍼컴포넌트 프롭스(객체 속성 변수) 설정하기
// 프롭스(변수인데 객체를 사용하기 때문에 속성(프로퍼티스 Properties)는 부모 컴포넌트(상위컴포넌트 조상)가 
// 자식 컴포넌트(하위컴포넌트 자손)에게 전달 목적으로 생성 사용된다.
// 프롭스는 변경할 수 없다.
// WrapComponent.기본프롭스 = {}
WrapComponent.defaultProps = {
  이름 : '유관순',
  구분 : ' 독립운동가',
  성별 : '여성',
  취미 : '독서'
}

  // 4. 스킵 컴포넌트
  function SkipComponent({성별}){
    return(
      <div id="skip">
        <h1>SkipComponent 컴포넌트 입니다.</h1>
        <h2>프롭스 성별 입니다.{성별}</h2>
      </div>
    )
  }

  // 5. 헤더 컴포넌트
  function HeaderComponent({성별, 취미}){
    return(
      <header id="header">
        <h1>HeaderComponent 컴포넌트 입니다.</h1>
        <h2>프롭스 성별입니다. {성별}</h2>
        <h2>프롭스 취미입니다. {취미}</h2>
      </header>
    )
  }

  // 6. 메인 컴포넌트
  function MainComponent(props){
    const {이름, 구분, 성별, 취미} = props;
    return(
      <main id="main">
        <h1>메인 컴포넌트 프롭스 속성 이름 {이름}</h1>
        <h1>메인 컴포넌트 프롭스 속성 구분 {구분}</h1>
        <h1>메인 컴포넌트 프롭스 속성 성별 {성별}</h1>
        <h1>메인 컴포넌트 프롭스 속성 취미 {취미}</h1>
        <br/>
        <hr/>
        <br/>
        <h1>메인 컴포넌트 프롭스 속성 이름 {props.이름}</h1>
        <h1>메인 컴포넌트 프롭스 속성 구분 {props.구분}</h1>
        <h1>메인 컴포넌트 프롭스 속성 성별 {props.성별}</h1>
        <h1>메인 컴포넌트 프롭스 속성 취미 {props.취미}</h1>
        <Section1Component />
        <Section2Component />
        <Section3Component />
      </main>
    )
  }

    //6-1. 섹션1 컴포넌트
    function Section1Component(){
      return(
        <section id="section1">
          <h1>Section1Component 컴포넌트</h1>
          <Article1Component />
          <Article2Component />
        </section>
      )
    }
        function Article1Component(){
          return(
            <article id="article1">
              <h1>Article1Component 입니다.</h1>
            </article>
          )
        }
        function Article2Component(){
          return(
            <article id="article2">
              <h1>Article2Component 입니다.</h1>
            </article>
          )
        }



    //6-2. 섹션2 컴포넌트
    function Section2Component(){
      return(
        <section id="section2">
          <h1>Section2Component 컴포넌트</h1>
        </section>
      )
    }

    //6-3. 섹션3 컴포넌트
    function Section3Component(){
      return(
        <section id="section3">
          <h1>Section1Component 컴포넌트</h1>
        </section>
      )
    }

  // 7. 푸터 컴포넌트
  function FooterComponent(props){
    return(
      <footer id="footer">
        
        <h1>FooterComponent 컴포넌트입니다.</h1>
        <h2>푸터컴포넌트 프롭스 {props.구분}</h2>

      </footer>
    )
  }

  // 8. 고탑 컴포넌트
  function GotopComponent(){
    return(
      <div id="goTop">
        <h1>GotopComponent 컴포넌트입니다.</h1>
      </div>
    )
  }

// 1.리액트 돔(ReactDOM)이 리액트 & HTML DOM 컨테이너(id : #root) 연결
ReactDOM.render(
  //3.리액트 컴포넌트와 돔 컨테이너 연결 => 컴포넌트 이름 복사해서 가상태그를 만든다.
  <WrapComponent />,
  document.getElementById('root')
);