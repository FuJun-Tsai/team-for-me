$(document).ready(function(){
    //餐廳與團渲染
    // let Res_NO = storeContainer.querySelectorAll('div input');
    // var aaa=Res_NO[1].value;
    // console.log(aaa);

    $.ajax({
        url: './home_second_screen.php',
        type: 'GET',
        // data:{
        //     RES_NO:aaa
        // },
        dataType: 'json',
        success(data) {
            console.log(data);
            // let groupData1=JSON.parse(data.responseText)[1];

            var resData = data[0];
            var groupData1 = data[1];

            // console.log(data[0]);
            // console.log(resData);


            // for(let i=0; i<5; i++){
            //     $('.container').append(
            //     `
            //     <div class="store" id="store${i+1}">
            //     <a href="#"><img src="./image/${resData[i].RES_IMAGE1}" alt="#"></a>
            //     <h4>${resData[i].RES_NAME}</h4>
            //     <input type="hidden" value="${resData[i].RES_NO}">
            //     </div>
            //     `
            //     )
            // }

            //餐廳渲染
            for(let i=0; i<5; i++){
                $('.container').append(
                `
                <div class="store" id="store${i+1}">
                <a href="http://140.115.236.71/demo-projects/ED103/ED103G4/G4/singlerestaurant.html?RES_NO=${resData[i].RES_NO}"><img src="./image/${resData[i].RES_IMAGE1}" alt="#"></a>
                <h4>${resData[i].RES_NAME}</h4>
                <input type="hidden" value="${resData[i].RES_NO}">
                </div>
                `
                )
            }

            // let Res_NO = storeContainer.querySelectorAll('div input');
            // var aaa=Res_NO[2].value;
            // console.log(aaa);

            // // var groupData = data[0];
            // // var firstFoodGroup = groupData[2];
            console.log(groupData1);
            

            for(let j=0; j<4 && groupData1.length; j++){
                $('.fourTeam').append(
                `
                <div class="team team_${j+1}">
                    <div class="content">
                        <p>團主：${groupData1[j].MEMBER_NAME}</p>
                        <p>團名：${groupData1[j].GROUP_NAME}</p>
                        <p>用餐日期：${groupData1[j].dMT}</p>
                        <p>用餐時間：${groupData1[j].hmMT}</p>
                    </div>
                    <button class="btn_5 btn_js">
                        參加 &#9658 
                        <span></span>
                    </button>
                </div>
                `
                )
            }
            left();

            // $('.team team_3').on('click',function(){
            // alert(3);
            // });
         
        },

    });
    //  let Res_NO = storeContainer.querySelectorAll('div input');
    //             var aaa=Res_NO[2].value;
    //             console.log(aaa);


    // let aaa=$('#store3 input').value;
    // var aaa=${resData[i].RES_NO}
    // var resData = data[0];
    // var aaa=resData[2].RES_NO;
    //             console.log(aaa);
    

    // $.ajax({    
    //     url: './home_second_screen.php',
    //     type: 'GET',
    //     data:{
    //         RES_NO:aaa
    //     },
    //     dataType: 'json',

    //     success(data){
    //             var groupData = data[0];
    //             var firstFoodGroup = groupData[2];
    //             console.log(groupData1);

    //             for(let j=0; j<4; j++){
    //                 $('.fourTeam').append(
    //                 `
    //                 <div class="team team_${j+1}">
    //                     <div class="content">
    //                         <p>團主：${groupData1[j].MEMBER_NAME}</p>
    //                         <p>團名：${groupData1[j].GROUP_NAME}</p>
    //                         <p>用餐日期：${groupData1[j].dMT}</p>
    //                         <p>用餐時間：${groupData1[j].hmMT}</p>
    //                     </div>
    //                     <button class="btn_5 btn_js">
    //                         參加 &#9658 
    //                         <span></span>
    //                     </button>
    //                 </div>
    //                 `
    //                 )
    //             }

    //         }
    // });

});


//左右鍵
var storeContainer = document.getElementById("storeContainer");
var Rarrow = document.getElementById("Rarrow");
var Larrow = document.getElementById("Larrow");

//右鍵
Rarrow.addEventListener("click",function(){
    let Res_NO = storeContainer.querySelectorAll('div input');
    var aaa=Res_NO[1].value;
    console.log(aaa);

    var s2nd = storeContainer.getElementsByTagName("div")[0];
    var last = storeContainer.getElementsByTagName("div")[4];
    storeContainer.insertBefore( last,s2nd);

    
    $.ajax({
        url: 'home_second_screen.php',
        type: 'GET',
        data:{
            RES_NO:aaa
        },
        dataType: 'json',

        complete(data) {
            console.log(data);
           
            // console.log(JSON.parse(data.responseText));
            let groupData1=JSON.parse(data.responseText)[1];
            // let groupData1=JSON.parse(date.responseText);

            console.log(groupData1);

            $('.fourTeam').empty();

            for(let j=0; j<4 && j<groupData1.length; j++){
                $('.fourTeam').append(
                `
                <div class="team team_${j+1}">
                    <div class="content">
                        <p>團主：${groupData1[j].MEMBER_NAME}</p>
                        <p>團名：${groupData1[j].GROUP_NAME}</p>
                        <p>用餐日期：${groupData1[j].dMT}</p>
                        <p>用餐時間：${groupData1[j].hmMT}</p>
                    </div>
                    <button class="btn_5 btn_js">
                        參加 &#9658 
                        <span></span>
                    </button>
                </div>
                `
                )
            }
        
        }
    });   

});


//左鍵
function left(){
    
    var first = document.getElementById("store1");
    var second = document.getElementById("store2");
    var third = document.getElementById("store3");
    var fourth = document.getElementById("store4");
    var fifth = document.getElementById("store5");
    var imgArr = [first,second,third,fourth,fifth];
    var index = 0;

    Larrow.addEventListener("click",function(){
        // alert('123');
        storeContainer.appendChild(imgArr[index]);
        index++
        if(index > 4){
            index = 0;
        }

        let Res_NO = storeContainer.querySelectorAll('div input');
        var bbb=Res_NO[2].value;
        console.log(bbb);

        $.ajax({
            url: 'home_second_screen.php',
            type: 'GET',
            data:{
                RES_NO:bbb
            },
            dataType: 'json',
    
            complete(data) {
                let groupData2=JSON.parse(data.responseText)[1];
                console.log(groupData2);
    
                $('.fourTeam').empty();
    
                for(let j=0; j<4 && j<groupData2.length; j++){
                    $('.fourTeam').append(
                    `
                    <div class="team team_${j+1}">
                        <div class="content">
                            <p class="group_no">${groupData2[j].GROUP_NO}</p>
                            <p>團主：${groupData2[j].MEMBER_NAME}</p>
                            <p>團名：${groupData2[j].GROUP_NAME}</p>
                            <p>用餐日期：${groupData2[j].dMT}</p>
                            <p>用餐時間：${groupData2[j].hmMT}</p>
                        </div>
                        <button class="btn_5 btn_js">
                            參加 &#9658 
                            <span></span>
                        </button>
                    </div>
                    `
                    )
                }
                
                $('.btn_5').on('click', function() {
                    // alert(2);
                    // console.log(123);
                    // console.log(this);
                    var groupNo=this.previousSibling.previousSibling.children[0].innerText;
                    // let GROUP_NO = box.querySelectorAll('div');
                    // var ccc=GROUP_NO[2].value;
                    // console.log(ccc);
                   
                    
                    $.ajax({
                        url: 'home_fourTeam.php',
                        type: 'GET',
                        data: {
                            groupNo: groupNo
                        },
                        dataType: 'json',
                        success(data) {
                            // console.log(data[1]);
                            // let memberName = data.responseJSON[3];
                            // let group = data.responseJSON;

                            // console.log(group);
                            // for (let i = 0; i < memberName.length; i++) {
                            //     $('.box3_row_right div:nth-child(2) .den_groupPeople').append(
                            //         `
                            //     <p>${memberName[i].MEMBER_NAME}</p>
                            //     `)
                            // }
                            
                            var foodGroupBox = data;
                            console.log(foodGroupBox);
                            // var ccc = this.children[0].innerText;
                            // let denEatGroupNum = $('.btn_5 btn_js').index(this);
                            // $('.den_box3').css('display','flex');
                            // $('.den_box3').css('position','absolute');
                            $('.den_box3_row').empty();
                            $('.den_box3_row').append(`
                            <div class="box3_row_left">
                                <div class="main_img">
                                    <img src="./image/restaurant_management_img/${foodGroupBox[1].RES_IMAGE1}">
                                </div>
                                <img src="./image/restaurant_management_img/${foodGroupBox[1].RES_IMAGE1}">
                                <img src="./image/restaurant_management_img/${foodGroupBox[1].RES_IMAGE2}">
                                <img src="./image/restaurant_management_img/${foodGroupBox[1].RES_IMAGE3}">
                                <img src="./image/restaurant_management_img/${foodGroupBox[1].RES_IMAGE4}">
                            </div>
                            <div class="box3_row_right">
                                <div>
                                    <div class="collection">           
                                        <span>收藏</span>         
                                        <img src="./image/den_image/fourth_screen_redHollowHeart.png">
                                    </div>
                                    <br>
                                    <h3>團號:</h3>
                                    <h3 class="groupNo">${foodGroupBox[1].GROUP_NO}</h3>
                                    <br>
                                    <h3>團名:</h3>
                                    <h3>${foodGroupBox[1].GROUP_NAME}</h3>
                                    <br>
                                    <h3>店名:</h3>
                                    <h3>${foodGroupBox[1].RES_NAME}</h3>
                                    <br>
                                    <h6>${foodGroupBox[1].KIND_NAME}</h6>
                                    <h6>${foodGroupBox[1].STYLE_NAME}</h6>
                                    
                                </div>
                                <div>
                                    <h3>開團團主:</h3>
                                    <h3>${foodGroupBox[1].MEMBER_NAME}</h3>
                                    <br>
                                    <div class="den_groupPeople">
                                        <h3>目前人數:</h3>
                                    </div>                               
                                    <h3>用餐時間:</h3>
                                    <h3>${foodGroupBox[1].MEAL_TIME}</h3>
                                    <br>
                                </div>
                                <div>
                                    <h3>店家資訊</h3>
                                    <br>
                                    <h3>地址:</h3>
                                    <h3>${foodGroupBox[1].RES_ADDRESS}</h3>
                                    <a href="">
                                        <img src="" alt="">
                                    </a>
                                    <br>
                                    <h3>電話:</h3>
                                    <h3>${foodGroupBox[1].RES_TEL}</h3>
                                    <br>
                                    <h3>營業時間:</h3>
                                    <h3>${foodGroupBox[1].RES_START}-${foodGroupBox[1].RES_CLOSE}</h3>
                                </div>
                            </div>
                            `)
                            $('.den_box3').css('display', 'block');
                            $('.box_background').css('display', 'block');

                        }
                    });
                    // clickImg3();



                });
                //--------------------------
                // getNewGroup();
                //--------------------------
            }
        });

    },false);
    Larrow.click();

    
}


