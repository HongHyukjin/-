(($) => {
  $('.mapo-caffe-txt-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/서울특별시_마포구_커피숍현황_20221213.txt',
        type:'GET',
        dataType:'TEXT',
        success(res){
          let arr = [];
          // console.log(res);
          const result = res.split('\n');
          $.each(result, function(i, item){
            // console.log(item);
            arr[i] = [];
            arr[i][0] = item.split(' ')[0];
            arr[i][1] = item.split(' ')[1];
            arr[i][2] = item.split(' ')[2];
            arr[i][3] = item.split(' ')[3];
            arr[i][4] = item.split(' ')[4];
          })
          for(let i=0; i<arr.length; i++){
            $('.tbody-caffe-txt').append("<tr>");
            for(let j=0; j<arr[i].length; j++){
              $('.tbody-caffe-txt').append(`<td>${arr[i][j]}</td>`);
            }
            $('.tbody-caffe-txt').append("</tr>");
          }
        },
        error(err){
          console.log(err);
        }
      })
    }
  })
})(jQuery);