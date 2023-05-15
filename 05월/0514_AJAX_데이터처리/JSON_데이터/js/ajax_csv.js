(($)=>{

  $('.member-grade-csv-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/member.csv',
        type:'GET',
        dataType:'TEXT',
        success(res){
          let txt = '';
          let arr = [];
          let rank = 1;
          const result = res.split('\n');
          $.each(result, function(i, item){
            console.log(item);
            arr[i] = [];
            arr[i][0] = Number(item.split(',')[0]);
            arr[i][1] = item.split(',')[1];
            arr[i][2] = Number(item.split(',')[2]);
            arr[i][3] = Number(item.split(',')[3]);
            arr[i][4] = Number(item.split(',')[4]);
            arr[i][5] = arr[i][2] + arr[i][3] + arr[i][4];
            arr[i][6] = Math.round(arr[i][5] / 3);
            for(let i=0; i<arr.length; i++){
              rank = 1;
              for(let j=0; j<arr.length; j++){
                if(arr[i][6] < arr[j][6]){
                  rank++;
                }
              }
              arr[i][7] = rank;
            }
          })

          let imsi = [];
          for(let i=0; i<arr.length-1; i++){
            for(let j=i+1; j<arr.length; j++){
              if(arr[i][6] > arr[j][6]){
                imsi = arr[i];
                arr[i] = arr[j];
                arr[j] = imsi;
              }
            }
          }


          for(let i=0; i<arr.length; i++){
            txt += "<tr>";
            for(let j=0; j<arr[i].length; j++){
              txt += "<td>" + arr[i][j] + "</td>";
            }
            txt += "</tr>";
          }

          $('#wrap table .tbody-grade-csv').empty();
          $('#wrap table .tbody-grade-csv').append(txt);
        },
        error(err){
          console.log(err);
        }
      })
    }
  })

})(jQuery);