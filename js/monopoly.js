$(document).ready(function() {

    var s = 1;
    var v = 800;
    var po1 = 0;
    var boxes = [];
    var i1 = document.querySelector("#player1");
    console.log('123');

    //點擊執行骰子
    $('#platform').on('click', dado);

    //骰子function();
    function dado() {
        $('#platform').removeClass('stop').addClass('playing');
        $('#dice');
        setTimeout(function() {
            $('#platform').removeClass('playing').addClass('stop');
            var number = Math.floor(Math.random() * 6) + 1;
            var x = 0,
                y = 20,
                z = -20;
            switch (number) {
                case 1:
                    x = 0;
                    y = 20;
                    z = -20;
                    break;
                case 2:
                    x = -100;
                    y = -150;
                    z = 10;
                    break;
                case 3:
                    x = 0;
                    y = -100;
                    z = -10;
                    break;
                case 4:
                    x = 0;
                    y = 100;
                    z = -10;
                    break;
                case 5:
                    x = 80;
                    y = 120;
                    z = -10;
                    break;
                case 6:
                    x = 0;
                    y = 200;
                    x = 10;
                    break;
            }
            $('#dice').css({
                'transform': 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
            });

            $('#platform').css({
                'transform': 'translate3d(0,0, 0px)'
            });

            $('#result').html(number);
            game(number);

        }, 1120);


    };

    //遊戲開始，人物跑動
    function game(num) {
        let result = $('#result').text()
        var bgi = Math.ceil(Math.random() * 2);
        console.log(num);

        if (s == 1) {
            var move = setInterval(p1move, v);
            text = "p1";
            playing(places);
            console.log(places);
        }
        // 游戏核心
        function playing(e) {
            // console.log(e);
            setTimeout(function() {
                clearInterval(move);
                //绑定对应角色
                if (text == "p1") {
                    position = po1;
                    console.log(po1)
                    person = p1;
                    $('.purchasebox').css('visibility', 'visible');
                    $('.game_background').css('display', 'block');

                }
                if (e[0].owner == "none") {

                    if (person.control == 0) {
                        $('.purchasebox').css('visibility', 'visible');
                    } else {
                        $('.purchasebox').css('visibility', 'visible');
                        $('.game_background').css('display', 'block');
                    }
                    if (e[0].state == 0) {
                        $('.purchasebox_content_left').append(
                            `
                                <div class="main_img">
                                    <img src="./image/restaurant_management_img/${e[position].RES_IMAGE1}">            
                                </div>
                                <div class="vice_img">
                                    <img src="./image/restaurant_management_img/${e[position].RES_IMAGE1}">            
                                    <img src="./image/restaurant_management_img/${e[position].RES_IMAGE2}">            
                                    <img src="./image/restaurant_management_img/${e[position].RES_IMAGE3}">            
                                    <img src="./image/restaurant_management_img/${e[position].RES_IMAGE4}">                              
                                </div>                  
                            `
                        );
                        $('.purchasebox_content_right').append(
                            `
                                <h2>今晚！我想來點～</h2>
                                <h3>店名:</h3>
                                <h4>${e[position].RES_NAME}</h4>
                                <br>
                                <h3>簡介:</h3>
                                <p>${e[position].RES_SUMMARY}</p>
                            `
                        );

                        function clickGameImg() {

                            $('.purchasebox_content_left .vice_img > img').not('.purchasebox_content_left .vice_img > img:nth-child(1)').addClass('togray');
                            $('.purchasebox_content_left .vice_img > img').on('click', function() {
                                $('.main_img img').attr('src', `${$(this).attr('src')}`);
                                $('.purchasebox_content_left .vice_img > img').addClass('togray');
                                $(this).removeClass('togray');
                            });
                        }
                        clickGameImg();


                    }
                }
                //查看变化
                // console.log(person.name + "现在有$" + person.money);
            }, v * num + v * 0.9);
            // clickGameImg();

        }

    }


    // 轮骰顺序
    function gameSequence() {
        if (text == "p1") {
            p1checkState();

        }

    }

    function p1checkState() {
        if (p2.stop !== 0) {
            setTimeout(function() {
                p2checkState();
                p2.stop -= 1;
                myName = p1.name;
                daysLeft = p2.stop + 1;
                if (po2 == 11) {
                    msgtype = "injail";
                } else {
                    msgtype = "intrip";
                }
                showMsgbox();
            }, v * 2);
        } else if (p2.state == "bankrupt") {
            p2checkState();
        } else {
            if (p2.control == 0) {
                setTimeout(function() {
                    game();
                }, v * 2)
            } else {
                dice.css("pointer-events", "auto");
            }
            s = 1; //第一個角色跑
            // title.innerHTML = p2.name;
            checkColor();
        }
        //     // game();  //game function 是自動跑

    }

    // 角色移动
    function p1move() {
        var boxes = [];
        for (var i = 0; i < 20; i++) {
            boxes.push(document.querySelector("#b" + i + ""))
        }
        var i1 = document.querySelector("#player1");
        if (po1 == 19) {
            po1 = -1;
            boxes[0].append(i1);
        }
        po1++;
        boxes[po1].append(i1);
        boxes[po1].children[1].style.filter = 'brightness(1)';
        boxes[po1 - 1].children[1].style.filter = 'brightness(.7)';
        // filter: brightness(.7);


        //圖片換選
        function clickGameImg() {
            // console.log(1);
            $('.purchasebox_content_left > img').not('.purchasebox_content_left > img:nth-child(2)').addClass('togray');
            $('.purchasebox_content_left > img').on('click', function() {
                $('.main_img img').attr('src', `${$(this).attr('src')}`);
                $('.purchasebox_content_left > img').addClass('togray');
                $(this).removeClass('togray');
            });
        }







        if (po1 == 0 || po1 == 1 || po1 == 2 || po1 == 3 || po1 == 4 || po1 == 5) {

            console.log(po1);
            let aaa = $('.player_name').text();
            let bbb = aaa.substr(0, 1)
            console.log(bbb);

            switch (bbb) {
                case '乂':
                    $('#player1').attr('src', './image/den_image/allgif/乂小壞乂.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '大':
                    $('#player1').attr('src', './image/den_image/allgif/大番薯.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '方':
                    $('#player1').attr('src', './image/den_image/allgif/方塊號.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '眼':
                    $('#player1').attr('src', './image/den_image/allgif/眼鏡仔.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '煞':
                    $('#player1').attr('src', './image/den_image/allgif/煞氣乂流氓.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '辣':
                    $('#player1').attr('src', './image/den_image/allgif/辣個男人.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '德':
                    $('#player1').attr('src', './image/den_image/allgif/德克斯特.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    // $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
            }
        }


        if (po1 == 11 || po1 == 12 || po1 == 13 || po1 == 14 || po1 == 15) {

            let aaa = $('.player_name').text();
            let bbb = aaa.substr(0, 1)
            console.log(bbb);

            switch (bbb) {
                case '乂':
                    $('#player1').attr('src', './image/den_image/allgif/乂小壞乂.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '大':
                    $('#player1').attr('src', './image/den_image/allgif/大番薯.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '方':
                    $('#player1').attr('src', './image/den_image/allgif/方塊號.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '眼':
                    $('#player1').attr('src', './image/den_image/allgif/眼鏡仔.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '煞':
                    $('#player1').attr('src', './image/den_image/allgif/煞氣乂流氓.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '辣':
                    $('#player1').attr('src', './image/den_image/allgif/辣個男人.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '德':
                    $('#player1').attr('src', './image/den_image/allgif/德克斯特.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
            }
        }


        if (po1 == 6 || po1 == 7 || po1 == 8 || po1 == 9 || po1 == 10) {

            let aaa = $('.player_name').text();
            let bbb = aaa.substr(0, 1)
            console.log(bbb);

            switch (bbb) {
                case '乂':
                    $('#player1').attr('src', './image/den_image/allgif/乂小壞乂_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '大':
                    $('#player1').attr('src', './image/den_image/allgif/大番薯_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '方':
                    $('#player1').attr('src', './image/den_image/allgif/方塊號_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '眼':
                    $('#player1').attr('src', './image/den_image/allgif/眼鏡仔_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '煞':
                    $('#player1').attr('src', './image/den_image/allgif/煞氣乂流氓_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '辣':
                    $('#player1').attr('src', './image/den_image/allgif/辣個男人_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '德':
                    $('#player1').attr('src', './image/den_image/allgif/德克斯特_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(-1)');
                    // $('#player1').width(190).height(190);
                    break;
            }
        }


        if (po1 == 16 || po1 == 17 || po1 == 18 || po1 == 19) {

            let aaa = $('.player_name').text();
            let bbb = aaa.substr(0, 1)
            console.log(bbb);

            switch (bbb) {
                case '乂':
                    $('#player1').attr('src', './image/den_image/allgif/乂小壞乂_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '大':
                    $('#player1').attr('src', './image/den_image/allgif/大番薯_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '方':
                    $('#player1').attr('src', './image/den_image/allgif/方塊號_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '眼':
                    $('#player1').attr('src', './image/den_image/allgif/眼鏡仔_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '煞':
                    $('#player1').attr('src', './image/den_image/allgif/煞氣乂流氓_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '辣':
                    $('#player1').attr('src', './image/den_image/allgif/辣個男人_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
                case '德':
                    $('#player1').attr('src', './image/den_image/allgif/德克斯特_jump.gif');
                    // $('#player1').css('transform', 'translate(-80px,-20px) scaleX(-1)');
                    $('#player1').css('transform', 'scaleX(1)');
                    // $('#player1').width(190).height(190);
                    break;
            }
        }




    }
});