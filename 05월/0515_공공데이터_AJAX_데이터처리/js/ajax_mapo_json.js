(($) => {
  $('.mapo-caffe-json-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/서울특별시_마포구_커피숍현황_20221213.json',
        type:'GET',
        dataType:'JSON',
        success(res){
          let arr = [];
          $.each(res.마포구카페, function(i, item){
            arr[i] = [];
            arr[i][0] = item.업종명;
            arr[i][1] = item.업소명;
            arr[i][2] = item.도로명;
            arr[i][3] = item.지번;
            arr[i][4] = item.업태명;
          })
          for(let i=0; i<arr.length; i++){
            $('.tbody-caffe-json').append("<tr>");
            for(let j=0; j<arr[i].length; j++){
              $('.tbody-caffe-json').append(`<td>${arr[i][j]}</td>`);
            }
            $('.tbody-caffe-json').append("</tr>");
          }
        },
        error(err){
          console.log(err);
        }
      })
    }
  })
})(jQuery);