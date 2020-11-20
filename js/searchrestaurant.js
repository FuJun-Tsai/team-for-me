$(document).ready(function(){
    conditionK = []; //kind搜尋條件
    conditionS = []; //style搜尋條件
    RK = []; //kind符合餐廳
    RS = []; //style符合餐廳
    show = []; //顯示的餐廳
    pages = Math.ceil($('.rest').length/4); //分頁
    index = 0; // 頁次

    
    $('.jap').text('日式');
    $('.usa').text('美式');
    $('.west').text('西式');
    $('.kor').text('韓式');
    $('.chi').text('中台');
    $('.sea').text('東南亞');

    $('.kind input').on('click',function(){
        if($(this).prop('checked')){
            $('.kind input:checkbox').prop('checked',false);
            $(this).prop('checked',true);
        };
    });
    
    $('.pot').text('火鍋');
    $('.bbq').text('燒烤');
    $('.fried').text('炸物');
    $('.stirfry').text('快炒');
    $('.light').text('簡餐');
    $('.steak').text('排餐');
    $('.cold').text('冷盤');
    
    // 項目
    for(let i=1;i<=$('.rest').length;i+=1){
        show.push($(`#R${i}`).attr('id'));
    };
    for(let i=1;i<=pages;i+=1){
        $('.page').append(`<li>${i}</li>`);
    };
    for(let i=0;i<=$('.page li').length;i+=1){
        $(`.page li:nth-child(${i})`).attr('data-page',`${i-1}`);
    }

    $('.page li:nth-child(1)').css({'color':'black'});

    function createpage(){
        $('.page').empty('li');
        // 分頁

        for(let i=1;i<=Math.ceil(show.length/4);i+=1){
            $('.page').append(`<li>${i}</li>`);
        };

        for(let i=0;i<=$('.page li').length;i+=1){
            $(`.page li:nth-child(${i})`).attr('data-page',`${i-1}`);
        }

        $('.page li').on('click',function(){
            // index = $('.page li').index(this);
            index = $(this).attr('data-page');
            $('.page li').css({
                'color':'cornflowerblue',
                'cursor':'pointer',
            });
            $(this).css({'color':'black'});
            showresult();
        });

        $('.page li:nth-child(1)').css({'color':'black'});

    }

    showresult();

    $('.kind input').on('click',function(){
        
        searchnone('kind',$(this).val());

    });

    $('.style input').on('click',function(){

        searchnone('style',$(this).val());

    });

    function searchnone(e,condition){

        if(e =='kind'){
            conditionK = [];
            RK = [];

            if($("input[name='kind']:checked").length>0){
                conditionK = $("input[name='kind']:checked").map(function(){
                    return $(this).val(); 
                }).get();
                
                let K = $('.rest').has(`.${conditionK}`);
                for(let i=0;i<=K.length-1;i+=1){
                    RK.push(K[i].id);
                }
            }


        }else if(e =='style'){
            conditionS = [];
            RS = [];

            if($("input[name='style[]']:checked").length>0){

                conditionS = $("input[name='style[]']:checked").map(function(){
                    return $(this).val(); 
                }).get();
                
                for(let i=0;i<=conditionS.length-1;i+=1){
                    let S = $('.rest').has(`.${conditionS[i]}`);

                    for(let j=0;j<=S.length-1;j+=1){
                        RS.push(S[j].id);

                    }
                }
            }
        }
        // 條件 餐廳

        // RK RS
        // console.log(conditionK);//kind搜尋條件
        // console.log(RK);        //style搜尋條件
        // console.log(conditionS);//kind符合餐廳
        // console.log(RS);        //style符合餐廳
        // console.log(show);          //要顯示的餐廳

        if(conditionK==0 && conditionS==0){
            show = [];
            $('.rest').css({'display':'block',});
            for(let i=1;i<=$('.rest').length;i+=1){
                show.push($(`#R${i}`).attr('id'));
            }
            createpage();
            showresult();
        }else{
            show = [];
            index = 0;
            if((RK.length+RS.length)==0){
                $('.rest').css({'display':'block',});
            }else if(RK.length==0^RS.length==0){
                let x = [];
                $('.rest').css({'display':'none'});
                if(RK.length>0){
                    x = RK;
                }else{
                    x = RS;
                }
                for(let i=0;i<=x.length-1;i+=1){
                    $(`#${x[i]}`).css({'display':'block'});
                    show.push(x[i]);

                }
                
            }else{
                let x = RK;
                let y = RS;
                $('.rest').css({'display':'none'});
                for(let i=0;i<=x.length-1;i+=1){
                    if($.inArray(x[i],y)!=-1){
                        $(`#${x[i]}`).css({'display':'block'});
                        show.push(x[i]);
                        
                    };
                    
                };

            };
            createpage();
            showresult();
        };

    };

    $('#searchwordbtn').on('click',function(){
        let word = $('#searchword').val();
        let total = $('.rest').length;
        
        if(word.length>0){
            show = [];
            for(let i=1;i<total;i+=1){
                if($(`#R${i} h2`).text().indexOf($.trim(word)) != -1){
                    show.push($(`#R${i}`).attr('id'));
                }
            }
        }

        createpage();
        showresult();

    });

    $('#searchword').on('click',function(){
        
        show = [];
        for(let i=1;i<=$('.rest').length;i+=1){
            show.push($(`#R${i}`).attr('id'));
        }

        createpage();
        showresult();
        
    });


    function showresult(){
        $('.rest').css({'display':'none',});
        $('.error').css({'display':'none'});

        for(let i=0;i<=3;i+=1){
            $(`#${show[i + index * 4]}`).css({'display':'block',});
            TweenLite.from(`#${show[i + index * 4]}`,.5,{
                opacity:-2,
                y:-300,
            },);
        };
        if(show.length == 0){
            $('.error').css({'display':'block'});
        }
    };
    
    $('.page li').on('click',function(){
        // index = $('.page li').index(this);
        index = $(this).attr('data-page');
        $('.page li').css({'color':'cornflowerblue'});
        $(this).css({'color':'black'});
        showresult();
        $('html,body').animate({ scrollTop: 0 }, 0);
    });

    imgcube();

    function imgcube(){
        let imgwidth = $('.rep div').width();
        if($(window).width()<600){
            $('.rep div').height(imgwidth);
        }else{
            $('.rep div').height(500);
        }
    };

    window.addEventListener('resize',function(){
            imgcube();
    });

});

