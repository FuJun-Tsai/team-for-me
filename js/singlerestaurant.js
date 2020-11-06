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
        let ww = $(window).width()+17;
        if(ww<600){
            $('.single_large').css({
                'height':`${ww}px`,
            });
        }
    }

    largeH();

    window.addEventListener('resize',function(){
        largeH();
    });

    $('.single_L i').on('click',function(){
        $('#report').css({'display':'inline-block'});
        $('.jun_back').css({'display':'inline-block'});
    });

    $('.single_cancel').on('click',function(){
        $('#report').css({'display':'none'});
        $('.jun_back').css({'display':'none'});
    });


    $('#send button').val('5,1');
    

}