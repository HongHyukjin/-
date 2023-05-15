
;(($)=>{


    $('.member-grade-xml-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
              url:'./data/member.xml',
              type:'GET',
              dataType:'XML',
              success(res){
                let a = [];
                $(res).find('record').each(function(idx, item){
                  console.log(idx, $(item).find('hakbun').text(), $(item).find('irum').text(), $(item).find('hakgwa').text(), $(item).find('addr').text(), $(item).find('hp').text());
                  a[idx] = [];
                  a[idx][0] = $(item).find('hakbun').text();
                  a[idx][1] = $(item).find('irum').text();
                  a[idx][2] = $(item).find('hakgwa').text();
                  a[idx][3] = $(item).find('addr').text();
                  a[idx][4] = $(item).find('hp').text();
                })

                $('.tbody-grade-xml').empty();
                for(let i=0; i<a.length; i++){
                    $('.tbody-grade-xml').append("<tr>");
                    for(let j=0; j<a[i].length; j++){
                        $('.tbody-grade-xml').append(`<td>${a[i][j]}</td>`);
                    }
                    $('.tbody-grade-xml').append("</tr>");
                }
              },
              error(err){
                  console.log(err);
              }
            })
        }
    })

})(jQuery);