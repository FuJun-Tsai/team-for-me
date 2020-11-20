function doFirst(e) {
    let a = $('#player1').attr('src', './image/den_image/white.png');

    let boxss = document.querySelectorAll('.box'); //list是陣列



    for (let i = 0; i < boxss.length; i++) {

        boxss[i].addEventListener('click', function() {

            let boxss1 = boxss[i].id;
            let boxId = boxss1.substr(1, 2)
            let ccc = boxss[i].getElementsByTagName('img')[0];

            var newImg01

            $('.purchasebox_content_left').append(
                `
                    <div class="main_img">
                        <img src="./image/restaurant_management_img/${e[boxId].RES_IMAGE1}">            
                    </div>
                    <div class="vice_img">
                        <img src="./image/restaurant_management_img/${e[boxId].RES_IMAGE1}">            
                        <img src="./image/restaurant_management_img/${e[boxId].RES_IMAGE2}">            
                        <img src="./image/restaurant_management_img/${e[boxId].RES_IMAGE3}">            
                        <img src="./image/restaurant_management_img/${e[boxId].RES_IMAGE4}">                              
                    </div>                    
                    `
            );
            $('.purchasebox_content_right').append(
                `
                    <h2>今晚！我想來點～</h2>
                    <h3>店名:</h3>
                    <h4>  ${e[boxId].RES_NAME}</h4>
                    <br>
                    <h3>簡介:</h3>
                    <p>${e[boxId].RES_SUMMARY}</p>
                `
            );
            $('.purchasebox').css('visibility', ' visible');
            $('.game_background').css('display', 'block');

            //圖片換選

            function clickGameImg() {

                $('.purchasebox_content_left .vice_img > img').not('.purchasebox_content_left .vice_img > img:nth-child(1)').addClass('togray');
                $('.purchasebox_content_left .vice_img > img').on('click', function() {
                    $('.main_img img').attr('src', `${$(this).attr('src')}`);
                    $('.purchasebox_content_left .vice_img > img').addClass('togray');
                    $(this).removeClass('togray');
                });
            }
            clickGameImg();
        });

    }

    $('#b0 img:nth-child(3)').remove();
}