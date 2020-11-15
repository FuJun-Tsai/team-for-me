// $(document).ready(function(){


//     $('.single_small img').not('.single_small img:nth-child(1)').addClass('togray');

//     $('.single_small img').on('click',function(){
//         $('.single_small img').addClass('togray');
//         $(this).removeClass('togray');
//         let src = $(this).attr('src');
//         $('#mainimg').attr('src',src);
//     });

//     $('#send').on('submit',function(){
//         let content = $('#send textarea').val();
//         let array = content.split('');
//         let id = $('#leavemessage div:last-child').attr('id').split('L')[1];
//         id = parseInt(id);
//         id+=1;
//         for(let i=0;i<=array.length-1;i+=1){
//             if(array[i].charCodeAt()==10){
//                 array[i]='<br>';
//             }
//             content = array.join('');
//         }

//         $('#leavemessage').append(`
//         <div id='L${id}' class='single_L'  >
//             <img src="http://fakeimg.pl/60x60" alt="">
//             <p>${content}</p>
//             <i class="fas fa-exclamation-triangle">檢舉</i>
//         </div>` 
//         );
//         content = '';
//         $('textarea').val('');
//         return false;
//     });

//     let today = new Date();
//     day = today.getDay();

//     $(`#${day}`).css({
//         'color':'red',
//         'fontSize':'20px',
//     });
    
//     $(`#${day} span`).css({
//         'color':'red',
//         'fontSize':'20px',
//     });

//     function largeH(){
//         let ww = $(window).width()+17;
//         if(ww<600){
//             $('.single_large').css({
//                 'height':`${ww}px`,
//             });
//         }
//     }

//     largeH();

//     window.addEventListener('resize',function(){
//         largeH();
//     });

//     $('.single_L i').on('click',function(){
//         $('#report').css({'display':'inline-block'});
//         $('.jun_back').css({'display':'inline-block'});
//     });

//     $('.single_cancel').on('click',function(){
//         $('#report').css({'display':'none'});
//         $('.jun_back').css({'display':'none'});
//     });

// });


//-------------------------------------------------------------

function itemfunction(){

    $('.single_small img').not('.single_small img:nth-child(1)').addClass('togray');

    $('.single_small img').on('click',function(){
        $('.single_small img').addClass('togray');
        $(this).removeClass('togray');
        let src = $(this).attr('src');
        $('#mainimg').attr('src',src);
    });

    let today = new Date();
    day = today.getDay();

    $(`#${day}`).css({
        'color':'red',
        'fontSize':'20px',
    });
    $(`#${day} span`).css({
        'color':'red',
        'fontSize':'20px',
    });

    function largeH(){
        let ww = $(window).width();
        if(ww<600){
            $('.single_large').css({
                'height':`${ww - 40 }px`,
            });
        }
    }

    largeH();

    window.addEventListener('resize',function(){
        largeH();
    });

    $('.single_L i').on('click',function(){
        let id = $(this).closest('.single_L').attr('id');

        $('.single_reportback button').val(`${id.split('L')[1]}&${location.search}`);

        $('.single_report').css({'display':'inline-block'});
        $('.jun_back').css({'display':'inline-block'});
        $('.single_reportback form').css({'display':'block'});
        $('.single_reportback button').css({'display':'block'});
        $('.single_reportback .single_thank').css({'display':'none'});
        $('.single_reportback form textarea').val('');

    });

    $('.single_cancel').on('click',function(){
        $('.single_report').css({'display':'none'});
        $('.jun_back').css({'display':'none'});
        $(this).siblings('textarea').val('');
        $(this).siblings('textarea').css({'display':'block'});
        $(this).siblings('h4').css({'display':'block'});
    });
    
    ///--------------------------------
    
    $('#send').on('submit', function(){

        $.ajax({
            url: `singleInsertRLM.php`,
            method: 'POST',               
            dataType: 'json',             
            data: {
                RES_MEM:$('#send .btn_js').val(),
                RES_MESSAGE_WORD:$('#send textarea').val()
            },
            success(data,Status){
                console.log('success');
            },
            error(){
                console.log('error');
            },
            complete(data,Status){
                console.log(`complete-${data}`);
                console.log(`${Status}`);
                let nowtime = new Date();
                let todate = String(nowtime.getDate());
                let word = $('.single_messaging textarea').val();
                let item = word.split('');
                let img = $('.single_messaging img').attr('src');

                for(let i=0;i<=item.length-1;i+=1){
                    if(item[i].charCodeAt()==10){
                        item[i]='<br>';
                    }
                    word = item.join('');
                }
                console.log(word);

                if(todate.length == 1){
                    todate = `0${todate}`;
                }
                let timetext = `${nowtime.getFullYear()}-${nowtime.getMonth()+1}-${todate} ${nowtime.getHours()}:${nowtime.getMinutes()}:${nowtime.getSeconds()}`;

                $('#leavemessage').append(`
                <div class="single_L">
                    <img src="${img}" alt="">
                    <p>${word}</p>
                    <p class="time">${timetext}</p>
                    <i class="fas fa-exclamation-triangle">檢舉</i>
                </div>              
                `);
                $('.single_messaging textarea').val('');
            },
        });
        return false; 

    });

    $('.single_reportback button').on('click',function(){
        console.log('here');
        $.ajax({
            url: `singleInsertRP.php`,
            method: 'POST',               
            dataType: 'json',             
            data: {
                MESSAGE_NO:$('.single_reportback button').val(),
                RES_MES_REPORT_REASON:$('.single_reportback textarea').val(),
                
            },
            complete(e){
                console.log(e);
            }

        });
        return false; 

    });

    $('.single_reportback button').on('click',function(){

        if($('.single_reportback textarea').val().length==0){
            $('.single_reportback').append(`
                <p class="reporterror" style="color:red">請輸入內容</p>
            `);
        }else{
            // $('.single_reportback').css({'display':'none'});
            $('.single_reportback textarea').css({'display':'none'});
            $('.single_reportback h4').css({'display':'none'});
            $('.single_thank').css({'display':'inline-block'});
            $('.single_reportback .reporterror').remove();
            $('.single_reportback button').css({'display':'none'});

        }

    });

}