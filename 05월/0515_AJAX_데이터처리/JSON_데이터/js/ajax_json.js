(($)=>{

  $('.member-hp-json-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/member.json',
        type:'GET',
        dataType:'JSON',
        success(res){
          console.log('AJAX 성공!');
          let txt = '';
          let arr = [];
          $.each(res.연락처, function(i, item){
            arr[i] = [];
            arr[i][0] = item.번호;
            arr[i][1] = item.이름;
            arr[i][2] = item.휴대폰;
          });
          for(let i=0; i<arr.length; i++){
            txt += "<tr>";
            for(let j=0; j<arr[i].length; j++){
              txt += "<td>" + arr[i][j] + "</td>";
            }
            txt += "</tr>";
          }
          $('table .tbody-hp').append(txt);
        },
        error(err){
          console.log(`AJAX 실패! ${err}`);

        }
      })
    }
  })

  $('.member-grade-json-btn').on({
    click(e){
      e.preventDefault();
      $.ajax({
        url:'./data/member.json',
        type:'GET',
        dataType:'JSON',
        success(res){
          console.log('AJAX 성공!');
          let txt = '';
          let arr = [];
          let rank = 1;
          $.each(res.성적표, function(i, item){
            arr[i] = [];
            arr[i][0] = item.번호;
            arr[i][1] = item.이름;
            arr[i][2] = item.국어;
            arr[i][3] = item.영어;
            arr[i][4] = item.수학;
            arr[i][5] = arr[i][2] + arr[i][3]+ arr[i][4];
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
          });

          let imsi = [];
          for(let i=0; i<arr.length-1; i++){
            for(let j=i+1; j<arr.length; j++){
              if(arr[i][7] > arr[j][7]){
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
          $('table .tbody-grade-json').append(txt);
        },
        error(err){
          console.log(`AJAX 실패! ${err}`);

        }
      })
    }
  })


})(jQuery);