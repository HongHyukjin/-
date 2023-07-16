import React from 'react';
import HeaderCompponent from './HeaderCompponent';
import $ from 'jquery';
const {kakao} = window;

export default function PostComponent () {

  const [state,setState] = React.useState({
    category : '',
    postTTL : '',
    peopleNum : 2,
    subject : '',
    content : ''
  })

  const [LatLng, setLetLng] = React.useState({
    lat : '',
    lng : ''
  })

  React.useEffect(() => {
    // 최소시간, 현재시간 설정
    let datetime = document.getElementById('datetime')
    let min_date = new Date(new Date().getTime() - new Date().getTimezoneOffset()*60000).toISOString().slice(0,-5);
    let max_date = new Date(new Date().getTime() - new Date().getTimezoneOffset()*220000).toISOString().slice(0,-5);
    datetime.value = min_date;
    datetime.setAttribute('min', min_date);
    datetime.setAttribute('max', max_date);

    // 지도에 마커 표시

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var marker = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    });

    marker.setMap(map);

    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
      // 클릭한 위도, 경도 정보를 가져옵니다 
      var latlng = mouseEvent.latLng; 
      
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      setLetLng({
        ...LatLng,
        lat : latlng.getLat(),
        lng : latlng.getLng()
      })
      
      
  });

  }, [])

  const onChangeCategory = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      category : value
    })
  }

  const onChangePostTTL = (e) => {
    const {value} = e.target;
    let min_date = new Date(new Date().getTime() - new Date().getTimezoneOffset()*60000).toISOString().slice(0,-5);
    let max_date = new Date(new Date().getTime() - new Date().getTimezoneOffset()*220000).toISOString().slice(0,-5);
    if(min_date > value || value > max_date){
      alert("현재시간부터 24시간 이내만 설정할수 있습니다.")
    }
    setState({
      ...state,
      postTTL : value
    })
  }

  const onChangePeopleNum = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      peopleNum : Number(value)
    })
  }

  const onChangeSubject = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      subject : value
    })
  }

  const onChangeContent = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      content : value
    })
  }

  const onSubmitPost = (e) => {
    e.preventDefault();
    const formData = {
      "category" : state.category,
      "postTTL" : state.postTTL,
      "peopleNum" : state.peopleNum,
      "subject" : state.subject,
      "content" : state.content
    }

    $.ajax({
      url : '/postwrite',
      type : 'POST',
      data : JSON.stringify(formData),
      contentType : 'application/json; charset=utf-8',
      success(res){
        console.log('AJAX 성공')
        console.log(res);
        window.location.href = "#/postlist";
      },
      error(err){
        console.log('AJAX 실패!', err);
      }
    })
  }

  return (
    <>
      <HeaderCompponent />
      <div id='post'>
        <div className="container">
          <div className="content">
            <div className="left-box">
              <div className="category">
                <p>음식 카테고리를 설정해주세요.</p>
                <select name="category" id="category" onChange={onChangeCategory}>
                  <option value="카테고리" selected>카테고리</option>
                  <option value="한식">한식</option>
                  <option value="중식">중식</option>
                  <option value="일식">일식</option>
                </select>
              </div>
              <div className="postTTL">
                <p>게시물이 유효한 시간을 정해주세요.</p>
                <input type="datetime-local" id='datetime'  onChange={onChangePostTTL}  />
              </div>
              <div className="peopleNum">
                <select name="peopleNum" id="peopleNum" onChange={onChangePeopleNum}>
                  <option value="2" selected>2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명</option>
                </select>
              </div>
              <div className="place">
                <p>음식을 나눌 장소를 지정해주세요</p>
                <div id="map">

                </div>
              </div>
            </div>
            <div className="right-box">
              <input type="text" name='subject' id='subject' placeholder='제목을 입력하세요.' onChange={onChangeSubject} />
              <hr />
              <textarea name="content" id="content" placeholder='배달팁, 최소주문 금액을 적어주세요!' onChange={onChangeContent} ></textarea>
              <button type='submit' onClick={onSubmitPost}>등록</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

