// 棋格数据
var b0 = {
    RES_NAME: "起點",
    owner: "none",
    state: 0,
};

$(document).ready(function() {


    $.ajax({
        url: './gamedata.php',
        type: 'GET',
        dataType: 'JSON',
        success(data) {
            // console.log(data);
            places = [];
            for (let key in data) {
                // console.log(key); //找key
                // console.log(data[key]);
                //找value
                places.push(data[key]);
            }
            places.sort(function() {
                return (0.5 - Math.random());
            });
            places.unshift(b0);
            // console.log(places);

            //绑定棋格数据到棋格盒子上
            boxes = [];
            for (var i = 0; i < 20; i++) {
                boxes.push(document.querySelector("#b" + i + ""))
            }
            // console.log(boxes[2]);
            //把数据中的名字写入棋格
            for (var i = 0; i < 20; i++) {
                $(`#b${i}`).append(
                    `
                    <h3>${places[i].RES_NAME}</h3>
                    <img src="./image/restaurant_management_img/${places[i].RES_IMAGE1}">
                    `
                )
            }
            doFirst(places);
            // p1move(boxes);
            // playing(places);
        },
        complete() {},
    });

});
//定义角色
var p1 = { name: "player1", index: 1, money: 15000, state: "", stop: 0, control: 1, }
var p2 = { name: "player2", index: 2, money: 15000, state: "", stop: 0, control: 1, }
var p3 = { name: "player3", index: 3, money: 15000, state: "", stop: 0, control: 1, }
var p4 = { name: "player4", index: 4, money: 15000, state: "", stop: 0, control: 1, }
var players = [p1, p2, p3, p4];