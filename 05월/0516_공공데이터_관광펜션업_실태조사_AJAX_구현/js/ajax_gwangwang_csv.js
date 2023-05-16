(($) => {
  $('.gwangwang-csv-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/관광펜션업_영업실태조사.csv',
        type:'GET',
        dataType:'TEXT',
        success(res){
          // console.log(res);
          let arr = [];
          const result = res.split('\n');
          $.each(result, function(i, item){
            arr[i] = [];
            arr[i][0]  = item.split(',')[0];
            arr[i][1]  = item.split(',')[1];
            arr[i][2]  = item.split(',')[5];
            arr[i][3]  = item.split(',')[8];
            arr[i][4]  = item.split(',')[10];
            arr[i][5]  = item.split(',')[16];
            arr[i][6]  = item.split(',')[17];
            arr[i][7]  = item.split(',')[18];
          })

          let num1 = 0;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          for(let i=0; i<arr.length; i++){
            if(arr[i][3] === "휴업"){
              num1++;
            }
            if(arr[i][3] === "폐업"){
              num2++;
            }
            if(arr[i][3] === "영업/정상"){
              num3++;
            }
            if(arr[i][3] === "취소/말소/만료/정지/중지"){
              num4++;
            }
          }

          for(let i=0; i<arr.length; i++){
            $('.tbody-gwangwang-csv').append("<tr>");
            for(let j=0; j<arr[i].length; j++){
              $('.tbody-gwangwang-csv').append(`<td>${arr[i][j]}</td>`);
            }
            $('.tbody-gwangwang-csv').append("</tr>");
          }

          $('.tbody-gwangwang-total-csv').append("<tr>");
          $('.tbody-gwangwang-total-csv').append(`<td>${num1}</td><td>${num2}</td><td>${num3}</td><td>${num4}</td>`);
          $('.tbody-gwangwang-total-csv').append("</tr>");

        },
        error(err){
          console.log(err);
        }
      })
    }
  })

})(jQuery);