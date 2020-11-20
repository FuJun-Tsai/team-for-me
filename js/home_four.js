// $(document).ready(function() {
    

    alert(1);
    let btns = document.querySelectorAll(".btn_5");
    console.log(btns.length);
    $('.btn_5').on('click', function() {
        alert(2);
        // var foodGroupBox = data[2];
        // var yyy9 = this.children[0].innerText;
        // let denEatGroupNum = $('.btn_5 btn_js').index(this);
        // console.log("Hello world!");        
        // // $('.den_box3').css('display','flex');
        // // $('.den_box3').css('position','absolute');
        // $('.den_box3_row').empty();
        // $('.den_box3_row').append(`
        // <div class="box3_row_left">
        //     <div class="main_img">
        //         <img src="./image/restaurant_management_img/${foodGroupBox[denEatGroupNum].RES_IMAGE1}">
        //     </div>
        //     <img src="./image/restaurant_management_img/${foodGroupBox[denEatGroupNum].RES_IMAGE1}">
        //     <img src="./image/restaurant_management_img/${foodGroupBox[denEatGroupNum].RES_IMAGE2}">
        //     <img src="./image/restaurant_management_img/${foodGroupBox[denEatGroupNum].RES_IMAGE3}">
        //     <img src="./image/restaurant_management_img/${foodGroupBox[denEatGroupNum].RES_IMAGE4}">
        // </div>
        // <div class="box3_row_right">
        //     <div>
        //         <div class="collection">           
        //             <span>收藏</span>         
        //             <img src="./image/den_image/fourth_screen_redHollowHeart.png">
        //         </div>
        //         <br>
        //         <h3>團號:</h3>
        //         <h3 class="groupNo">${foodGroupBox[denEatGroupNum].GROUP_NO}</h3>
        //         <br>
        //         <h3>團名:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].GROUP_NAME}</h3>
        //         <br>
        //         <h3>店名:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].RES_NAME}</h3>
        //         <br>
        //         <h6>${foodGroupBox[denEatGroupNum].KIND_NAME}</h6>
        //         <h6>${foodGroupBox[denEatGroupNum].STYLE_NAME}</h6>
                
        //     </div>
        //     <div>
        //         <h3>開團團主:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].MEMBER_NAME}</h3>
        //         <br>
        //         <div class="den_groupPeople">
        //             <h3>目前人數:</h3>
        //         </div>                               
        //         <h3>用餐時間:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].MEAL_TIME}</h3>
        //         <br>
        //     </div>
        //     <div>
        //         <h3>店家資訊</h3>
        //         <br>
        //         <h3>地址:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].RES_ADDRESS}</h3>
        //         <a href="">
        //             <img src="" alt="">
        //         </a>
        //         <br>
        //         <h3>電話:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].RES_TEL}</h3>
        //         <br>
        //         <h3>營業時間:</h3>
        //         <h3>${foodGroupBox[denEatGroupNum].RES_START}-${foodGroupBox[denEatGroupNum].RES_CLOSE}</h3>
        //     </div>
        // </div>
        // `)
        // $('.den_box3').css('display', 'block');
        // $('.box_background').css('display', 'block');
        

        //-----------------------------------
        // --------------------------------------
        // $.ajax({
        //     url: './open_group.php',
        //     data: {
        //         GROUP_NO: yyy9,
        //     },
        //     type: 'GET',
        //     dataType: 'json',
        //     complete(data) {
        //         let memberName = data.responseJSON[3];

        //         for (let i = 0; i < memberName.length; i++) {
        //             $('.box3_row_right div:nth-child(2) .den_groupPeople').append(
        //                 `
        //             <p>${memberName[i].MEMBER_NAME}</p>
        //             `)
        //         }
        //     }
        // });
        // clickImg3();
    });
   

// });