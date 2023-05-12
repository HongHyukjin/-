;(($)=>{

    $.ajax({
        url : '../data/member.xml',
        type : 'GET',
        success(res){
            let arr = [];
            let txt = "";
            let rank = 1;
            $(res).find('list').each(function(i, item){
                // console.log( idx, $(item).find('name').text(), Number($(item).find('kor').text()), Number($(item).find('eng').text()), Number($(item).find('mat').text()))
                arr[i] = [];
                arr[i][0] = $(item).find('name').text();    //이름
                arr[i][1] = Number($(item).find('kor').text());
                arr[i][2] = Number($(item).find('eng').text());
                arr[i][3] = Number($(item).find('mat').text());
                arr[i][4] = arr[i][1] + arr[i][2] + arr[i][3];
                arr[i][5] = Math.round(arr[i][4] / 3);
                
                // 학점 A B C D E F
                if(arr[i][5] > 95){
                    arr[i][6] = 'A';
                }
                else if(arr[i][5] > 85){
                    arr[i][6] = 'B';
                }
                else if(arr[i][5] > 75){
                    arr[i][6] = 'C';
                }
                else if(arr[i][5] > 65){
                    arr[i][6] = 'D';
                }
                else if(arr[i][5] > 55){
                    arr[i][6] = 'E';
                }
                else{
                    arr[i][6] = 'F';
                }

                for(let i=0; i<arr.length; i++){
                    rank = 1;
                    for(let j=0; j<arr.length; j++){
                        if(arr[i][5] < arr[j][5]){
                            rank++;
                        }
                    }
                    arr[i][7] = rank;
                }
                
                // 정렬하기 : 순위별 오름차순 정렬 출력
                let imsi = [];
                for(let i=0; i<arr.length-1; i++){  //처음부터 마지막-1
                    for(let j=i+1; j<arr.length; j++){
                        if(arr[i][7] > arr[j][7]){
                            imsi = arr[i];
                            arr[i] = arr[j];
                            arr[j] = imsi;
                        }
                    }
                }
                

            });

            for(let i=0; i<arr.length; i++){
                txt += "<tr>";
                for(let j=0; j<arr[i].length; j++){
                    txt += "<td>" + arr[i][j] + "</td>";
                }
                txt += "</tr>";
            }

            $('table tbody').append(txt);
        },
        error(err){

        }
    })    

})(jQuery);