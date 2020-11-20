let articleNo;
let memberNoNum;


function ppp(articleNo,memberNoNum) {
    // var articleNo = $('.articleNo').text();
    // var memberNoNum = $('.memberNoNum').text();
    // console.log(memberNoNum)

    // if (bbb == '登入') {
    $.ajax({
        url: 'home_fourth_screen_HeartCollection_select.php',
        type: 'GET',
        dataType: 'json',
        data: {
            articleNo: articleNo,
            memberNoNum: memberNoNum
        },
        success(data) {
            let loveyesorno = 0;
            let bbb = $('#spanLogin').text();
            // alert(bbb);
            console.log(data);
            console.log(data.responseText);

            
            if (data.responseText == '他有收藏') {
                loveyesorno = 1;

                $('.chu_left_icon3 img').attr('src', './image/home/fourth_screen_redHollowHeart.png');
            } else {
                $('.chu_left_icon3 img').attr('src', './image/home/fourth_screen_redHeart.png');
            }
            
        },

    })

}



$(document).ready(function () {

    
    $.ajax({
        url: 'home_fourth_screen.php',
        type: 'GET',
        dataType: 'json',
        success(data) {
            var collectionData = data[0];
            var messageData = data[1];
            var sharingData = data[2];
            
            console.log(data);
            console.log(collectionData[0]);
            console.log(messageData[0]);
            // console.log(sharingData[0]);
            
            let loveyesorno = 0;
            let bbb = $('#spanLogin').text();
            console.log(bbb);
            
     

            let html = '';
            html +=
                `
                    <div class="chu_left">
                    <div class="chu_left_icon1">
                        <img src="./image/member/${collectionData[0].MEMBER_IMAGE}" alt="">
                    </div>
                    <div class="chu_left_icon3">
                `
            if (loveyesorno == 1) {
                html +=
                    `<img class="heart" src="./image/home/fourth_screen_redHeart.png" alt="">
                    `
            } else {
                html +=
                    `<img class="heart" src="./image/home/fourth_screen_redHollowHeart.png" alt="">
                    `
            }

            html += `
                        <p>${collectionData[0].ARTICLE_LIKE}</p>
                        <p class="articleNo" style="display:none">${collectionData[0].ARTICLE_NO}</p>
                        <p></p>
                    </div>
                    <p class="chu_left_content"><img src="./image/home/fourth_screen_speaker.svg" alt="">${collectionData[0].ARTICLE_TITLE}</p>
                    <span>＜最多收藏貼文＞</span>

                </div>

                <div class="chu_center">
                    <div class="chu_center_icon1">
                        <img src="./image/member/${messageData[0].MEMBER_IMAGE}" alt="">
                    </div>
                    <div class="chu_center_icon3">
                        <img src="./image/home/fourth_screen_comment.svg" alt="">
                        <p>${messageData[0].MESSAGE_TOTAL}</p>
                    </div>
                    <p class="chu_center_content"><img src="./image/home/fourth_screen_speaker.svg" alt="">${messageData[0].ARTICLE_TITLE}</p>
                    <span>＜最多留言貼文＞</span>

                </div>
            `

            $('.chu_row1').append(html);

            var toggle1 = true;
            $('.chu_left_icon3').click(function () {
                let aaa = $('#spanLogin').text();
                // console.log(aaa);
                if (aaa == '登出') {
                    if (toggle1) {
                        // 這裡是黑色愛心變成紅色愛心的地方
                        $('.chu_left_icon3 img').attr('src', './image/home/fourth_screen_redHeart.png');
                        toggle1 = false;

                        let ggg = parseInt($('.chu_left_icon3 p:nth-child(2)').text());
                        console.log(ggg)
                        $('.chu_left_icon3 p:nth-child(2)').text(ggg + 1);

                        // console.log(ggg);
                        articleNo = $('.articleNo').text();
                        memberNoNum = $('.memberNoNum').text();

                        ppp(articleNo,memberNoNum);

                        $.ajax({
                            url: 'home_fourth_screen_HeartCollection_insert.php',
                            type: 'GET',
                            data: {
                                articleNo: articleNo,
                                memberNoNum: memberNoNum
                            },
                            dataType: 'JSON'
                        });

                    } else {
                        var articleNo = parseInt($('.articleNo').text());
                        console.log(articleNo);
                        var memberNoNum = parseInt($('.memberNoNum').text());
                        console.log(memberNoNum);
                        // 這裡是紅色愛心變成黑色愛心的地方
                        $('.chu_left_icon3 img').attr('src', './image/home/fourth_screen_redHollowHeart.png');
                        toggle1 = true;
                        let ggg = parseInt($('.chu_left_icon3 p:nth-child(2)').text());
                        console.log(ggg)
                        $('.chu_left_icon3 p:nth-child(2)').text(ggg - 1);

                        $.ajax({
                            url: 'home_fourth_screen_HeartCollection_delete.php',
                            type: 'GET',
                            data: {
                                articleNo: articleNo,
                                memberNoNum: memberNoNum
                            },
                            dataType: 'JSON'
                        });

                    }
                }
                if (aaa == '登入') {
                    $('.section_res').css('display', 'flex');
                }
            });
                articleNo = $('.articleNo').text();
                memberNoNum = $('.memberNoNum').text();
                // alert(`articleNo: ${articleNo}`);
                // alert(memberNoNum);
                ppp(articleNo,memberNoNum);

            // }
            

        },


    });
});






//  <div class="chu_right">
// <div class="chu_right_icon1">
//     <img src="./image/member/${sharingData.MEMBER_IMAGE}" alt="">
// </div>
// <div class="chu_right_icon3">
//     <img src="./image/home/fourth_screen_share.svg" alt="">
//     <p>13</p>
// </div>
// <p class="chu_right_content"><img src="./image/home/fourth_screen_speaker.svg" alt=""> 爭鮮好好吃
// </p>
// <span>＜最多分享貼文＞</span>
// <div class="chu_right_icon2">
//     <img src="./image/home/arrow_right.svg" alt="">
// </div>
// </div> 




// $(".heart").click(function(){

//     if($('.heart').attr('src')=='./image/home/fourth_screen_redHollowHeart.png'){
//         $('.heart').attr('src','./image/home/fourth_screen_redHeart.png');
//     }

// });

// $(".heart").click(function(){

//     if($('.heart').attr('src')=='./image/home/fourth_screen_redHeart.png'){
//         $('.heart').attr('src','./image/home/fourth_screen_redHollowHeart.png');
//     }

// });



//1.抓圓圈
//2.判斷有沒有登入
//3.如果有登入 用他的會員編號去抓他圓圈的文章是否有收藏
//4.選染出圓圈的html架構 其中在呈現愛心的時候我們要用if else判斷他在步驟三時撈出來的資料有沒有符合