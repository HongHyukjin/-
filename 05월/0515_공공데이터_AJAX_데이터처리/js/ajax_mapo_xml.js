(($) => {
  $('.mapo-caffe-xml-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/서울특별시_마포구_커피숍현황_20221213.xml',
        type:'GET',
        dataType:'TEXT',
        success(res){
          let arr = [];
          const result = res.split('\n');
          $.each($(res).find('record'), function(i, item){
            arr[i] = [];
            arr[i][0] = $(item).find('field1').text();
            arr[i][1] = $(item).find('field2').text();
            arr[i][2] = $(item).find('field3').text();
            arr[i][3] = $(item).find('field4').text();
            arr[i][4] = $(item).find('field5').text();
          });
          for(let i=0; i<arr.length; i++){
            $('.tbody-caffe-xml').append("<tr>");
            for(let j=0; j<arr[i].length; j++){
              $('.tbody-caffe-xml').append(`<td>${arr[i][j]}</td>`);
            }
            $('.tbody-caffe-xml').append("</tr>");
          }
        },
        error(err){
          console.log(err);
        }
      })
    }
  })
})(jQuery);