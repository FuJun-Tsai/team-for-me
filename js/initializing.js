//sequence 初始化顺序
$(document).ready(function() {

    $('.close').on('click', function() {
        $('.purchasebox').css('visibility', 'hidden');
        $('.purchasebox_content_left').empty();
        $('.purchasebox_content_right').empty();
        $('.game_background').css('display', 'none');
    });


    var s = 1;
    //初始化人物位置
    var position = 0;
    var person = 0;
    var text = 0;
    var po1 = 0;
    //初始化人数
    var player = 1;
    //用来装玩家名字的数组
    var arr = [];
    // 初始速度
    var v = 800;
    // 快捷编号
    var dice = $(".dice");
    var spdice = $(".spdice");
    var choosechr = document.querySelector(".choosechr");
    var arrow = document.querySelector(".arrow");
    // var title = document.querySelector(".control").firstElementChild;
    var purchase = document.querySelector(".purchasebox");
    var upgrade = document.querySelector(".upgradebox");
    var info = document.querySelector(".infobox");
    var i1 = document.querySelector("#player1");
    var img = [i1];

    var construct = document.querySelector(".construct");
    // 创建待添加对象
    var l1 = "<img src='img/l1.png' class='house' alt=''>";


    var colorscheme = {
        joker: "#5E45AB",
        batman: "#121212",
        superman: "#274D7A",
        cat: "#B04E58",
        pink: "pink",
        red: "#FA2A14",
        green: "#5FAE2E",
    }

    var myName = "";
    var daysLeft = 0;
    var casinoMoney = 0;
    var randomMoney = 0;
    var fateText = 0;


    // 选择玩家数量
    player = 1;

    // 根据选择人数来分配角色选择界面

    function checkplayers() {
        if (player >= 1) {
            choosechr.style.visibility = "visible";
        }
    }


    // 选择角色
    var x = 0;
    $(document).ready(function() {

        for (var j = 0; j < 7; j++) {
            $('.choosechr').children()[1].children[j].firstElementChild.onclick = binding;
        }

    });



    function binding() {
        // console.log(this);
        this.parentElement.parentElement.parentElement.style.visibility = "hidden";
        arr.push(this.nextElementSibling.innerHTML);
        $('.game_background').css('display', 'none');
        x++;
        console.log(arr);
        // 游戏开局
        if (x == player) {
            for (var i = 0; i < arr.length; i++) {
                players[i].name = arr[i];
                players[i].state = "active";
                img[i].src = "image/den_image/allgif/" + arr[i] + ".gif"
                console.log(arr[i]);
                $('.player_name').text(arr[i]);
            }
            // title.style.visibility = "visible";
            // title.innerHTML = p1.name;
            // checkColor();
            // writeinfo();

        }
    }
});