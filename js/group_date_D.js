function doFirst() {
    //資料傳值到燈箱
    $('.den_button').on('click', function() {

        let resName = $('#resName').val();
        let groupName = $('#groupName').val();
        let resDate = $('#resDate').val();
        let resTime = $('#resTime').find('option:selected').text();
        let resMen = $('#resMen').find('option:selected').text();

        if (resName != false) {
            // console.log(resName);
            $('.box2_row_right div:nth-child(1) h3:nth-child(8)').append(resName); {}
        } else {
            alert('請輸入餐廳');
            $('.den_box2').css('display', 'none');
            $('.box_background').css('display', 'none');
        }
        if (groupName != false) {
            // console.log(groupName);
            $('.box2_row_right div:nth-child(1) h3:nth-child(5)').append(groupName);
        } else {
            alert('請輸入團名');
            $('.den_box2').css('display', 'none');
            $('.box_background').css('display', 'none');
        }
        if (resDate != false) {
            // console.log(resDate);
            $('.mealDate').append(resDate);
        } else {
            alert('請選擇日期');
            $('.den_box2').css('display', 'none');
            $('.box_background').css('display', 'none');
        }
        if (resTime != '請選擇用餐時間') {
            // console.log(resTime);
            $('.mealDate').append(' / ' + resTime);
        } else {
            alert('請選擇用餐時間');
            $('.den_box2').css('display', 'none');
            $('.box_background').css('display', 'none');
        }
        if (resMen != '請選擇參加人數') {
            // console.log(resMen);
            $('.box2_row_right div:nth-child(2) h3:nth-child(5)').append('1' + '/' + resMen);
        } else {
            alert('請選擇參加人數');
            $('.den_box2').css('display', 'none');
            $('.box_background').css('display', 'none');
        }
        // console.log(resMen);

        //好友checkbox
        var check = $("input[name='friendCheckbox[]']:checked").length; //判斷有多少個方框被勾選
        if (check == 0) {
            alert("您尚未邀請好友喔");
            return false; //不要提交表單
        } else {
            // alert("你勾選了" + check + "個項目");
            return true; //提交表單
        }

    });

}
window.addEventListener('load', doFirst);