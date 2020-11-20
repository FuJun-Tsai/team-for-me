//渲染
function memberrender(){
  let herehref = location.href.split('?')[0].split('/')[location.href.split('?')[0].split('/').length-1];

  if(herehref=='member.php'){
      // singleJS();
  };

  if(herehref=='member.php'){
      // searchJS();
  };

};

//側邊按鈕切換內容
function sidetab_change_content(){
  $("button.tabbtn").on("click", function(){
    $(this).closest("ul").find("button.tabbtn").removeClass("-on");
    $(this).addClass("-on");

    $("div.tabbtn_1").removeClass("-on");
    $("div.tabbtn_1." + $(this).attr("data-target")).addClass("-on");
  });
}
//內頁籤切換
function intab_change_content(){
  $("a.tab").on("click", function(){
    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");
  
    $(this).parent().parent().parent().siblings().children("div.tab").removeClass("-on");
    $("div." + $(this).attr("data-target")).addClass("-on");
    let tab01 = $("div." + $(this).attr("data-target")).attr('id');
    let page = $("div." + $(this).attr("data-target")).children('.page');
    return false;
  });
}
//btnhover效果
function btnhover(){
  $('.btn_js')
  .on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
    $(this).find('span').css({top:relY, left:relX})
  });
}
//上傳大頭貼是否為圖檔的hover
function pic_up_hover(){
  $("#theFileid").hover(
    function(){
      $(".upload").css("transform" , "translate(-50%,0%)");
    }, function(){
      $(".upload").css("transform" , "translate(-50%,100%)");
    }
  );
}
//第一頁功能
//換側邊圖片
function picChange() {
  $('#theFileid').on("change",function(){
    let res= $('#theFileid').val();
    let arr= res.split("\\");
    let filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
    console.log(res);
    console.log(arr);
    console.log(filename);
    console.log(filextension);
    console.log(filext);
    //如果檔案不是圖檔，我們秀出error icon, 紅色X,然後取消掉 submit按鈕
    if (valid.indexOf(filext.toLowerCase())==-1){
      $("#namefile").css({"color":"red","font-weight":700});
      $("#namefile").html(filename+"不是圖檔喔!");
      $(".btn2").hide()
      // $( "#submitbtn" ).hide();
      $( "#fakebtn" ).show();
    }else{
      let file = document.getElementById('theFileid').files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener('load',function(e){
        let image = document.getElementById('avatar_change');
        image.src = readFile.result;
      });

      $('#namefile').css({"color":"green","font-weight":700});
      $('#namefile').html(filename);

      $( ".btn2" ).show();
      $( "#fakebtn" ).hide();
    }
  });
}
//側邊圖片修改送出
function pic_modifyajax(){
  $( "#sub_pic" ).on( "click", function( event ) {
    event.preventDefault();
    let avatar = document.getElementById('avatar');
    let form = new FormData(avatar);
    console.log(avatar);
    MEMBER_NAME = $("#mem_name").text();
    $.ajax({
      url:'php/update_pic.php',
      method:'POST',
      dataType:'json',
      cache:'true',
      data: form,
      processData: false,
      contentType: false,  
      mimeType: 'multipart/form-data',
      success: function(){
  
      },
    });
    return false;
  });
}
//會員更改顯示修改鈕
function show_mem_modify(){
  $("#change_main").on('click',function(e){
    e.preventDefault();
    $('.change').toggle();
    // $(this).text("取消");
  });
}
//修改會員資料
function member_modify(){
  myname = 0;
  psw = 0;
  email = 0;
  introduce = 0;
  $('.change').on('click',function(e){
    e.preventDefault();
    let here = $(this).siblings('.content').attr('id');
    tochange(here);
  });

  function tochange(e){
    switch (e){
      case 'mem_name':
        changethis(myname,e);
        if(myname==0){
          myname+=1;
        }else{
          myname=0;
        }
      break;
      case 'mem_psw':
        changethis(psw,e);
        if(psw==0){
          psw+=1;
        }else{
          psw=0;
        }
      break;
      case 'mem_email':
        changethis(email,e);
        if(email==0){
          email+=1;
        }else{
          email=0;
        }
      break;
      case 'mem_introduction':
        changethis(introduce,e);
        if(introduce==0){
          introduce+=1;
        }else{
          introduce=0;
        }
      break;
    }
  }
  function changethis(e,id){
    e = parseInt(e);
    if(e==0){
      let value = $.trim($(`#${id}`).text());
      $(`#${id}`).siblings('.change').text('確認');
      $(`#${id}`).replaceWith(`<input type="text" class="content" id="${id}" value="${value}">`);
    }else{
      let value = $.trim($(`#${id}`).val());
      $(`#${id}`).siblings('.change').text('修改');
      $(`#${id}`).replaceWith(`<h5 class="content" id="${id}" name="${id}" >${value} </h5>`);
    }
  }
}
//會員資料修改送出
function member_modifyajax(){
  $( "#sub_main" ).on( "click", function( event ) {
    event.preventDefault();
    MEMBER_NAME = $("#mem_name").text();
    MEMBER_PSW = $("#mem_psw").text();
    MEMBER_EMAIL = $("#mem_email").text();
    MEMBER_INTRODUCTION = $("#mem_introduction").text();
    $.ajax({
      url:'php/update_mymain.php',
      method:'POST',
      dataType:'json',
      cache:'true',
      data: {
        MEMBER_NAME: MEMBER_NAME,
        MEMBER_PSW: MEMBER_PSW,
        MEMBER_EMAIL: MEMBER_EMAIL,
        MEMBER_INTRODUCTION: MEMBER_INTRODUCTION
      },
      success:function(res){
            console.log(res);
      },
    });
    return false;
  });
}
//第2、3頁功能
//確認/取消審核
function review(){
  $(".ok").off("click").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    let X =$(this).closest(".mid_content");
    let Y =$(this).parents().siblings(".sm_content").children('.num').text();
    let Y2 =$(this).parents().siblings(".sm_content").children('.group_num').text();
    let Z =$(this).closest(".doingcontent").attr('id');
    let Y3 =$('#JOIN_NUMBER').text();
    // console.log(Y);
    // console.log(Y2);
    // console.log(Z);
    // console.log(Y3);
    $(X).remove();
    okajax(Y,Y2,Z);
    updategroupnum(Y2,Y3);
  });
  $(".notok").on("click", function(e){
    let X =$(this).closest(".mid_content");
    // let Y =$(this).parents().siblings(".sm_content").children('.num').text();
    let Y2 =$(this).parents().siblings(".sm_content").children('.group_num').text();
    let Z =$(this).closest(".doingcontent").attr('id');
    e.preventDefault();
    $(X).remove();
    delajax(Y2,Z);
  });
}
//確認審核ajax
function okajax(Y,Y2,Z){
  $.ajax({
    url:'php/review.php',
    method:'POST',
    dataType:'json',
    cache:'true',
    data: {
      changefrom: Z,
      num: Y,
      group_num: Y2
    },
    success: function(){
      console.log("確認審核成功");
    },
  });
  return false;
}
function updategroupnum(Y2,Y3){
  var num = $("#JOIN_NUMBER").text();
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    $("#JOIN_NUMBER").text(parseInt(num) +1);
  }
  xhr.open("POST", "php/updategroup.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data = `group_num=${Y2}&group_people=${Y3}`;
  xhr.send(data);

}
//第4、5頁功能
//刪除收藏欄
function dotrash(){
  $(".fa-trash").on("click", function(e){
    e.preventDefault();
    let X =$(this).closest(".tab_box");
    let Y =$(this).closest(".tab_box").children('.num').text();
    let Z =$(this).closest(".tab").attr('id');
    $("div.overlay1").addClass("-on");
    $(".btn_modal_send").on("click", function(e){
      e.preventDefault();
      $(X).remove();
      $("div.overlay1").removeClass("-on");
      delajax(Y,Z);
    });
    $(".btn_modal_close").on("click", function(){
      $("div.overlay1").removeClass("-on");
    });
  });
}
//刪除用所有ajax
function delajax(Y,Z,Y2){
  $.ajax({
    url:'php/deletecol.php',
    method:'POST',
    dataType:'json',
    cache:'true',
    data: {
      num: Y,
      group_num: Y2,
      deletefrom: Z,
    },
    success: function(){
      console.log("刪除成功");
    },
  });
  return false;
}
//第六頁功能
//刪除好友
function del_friend(){
  $(".defriend").on("click", function(e){
    let X =$(this).closest(".mid_content");
    let Y =$(this).parents().siblings().children('.friend').text();
    let Z =$(this).closest(".doingcontent").attr('id');
    console.log(X);
    console.log(Y);
    console.log(Z);
    e.preventDefault();
    $(X).remove();
    delajax(Y,Z);
  });
}
//沒團按鈕hover 
function no_group_hover(){
  $("#no_group .btn_3").hover(
    function(){
      $("#no_groupbtn").css("color","#76AFAF");
    },function(){
      $("#no_groupbtn").css("color","#FFF");
    }
  );
}
//定義ID
function $id(id){
	return document.getElementById(id);
}
//渲染主頁+開團
function my_main(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      main = JSON.parse(xhr.responseText);
      $id('avatar_change').setAttribute("src",`./image/member/${member.MEMBER_IMAGE}`);            
      $id('user_name').innerHTML = `${main.MEMBER_NAME}`;
      $id('mem_name').innerHTML = `${main.MEMBER_NAME}`;
      $id('mem_account').innerHTML = `${main.MEMBER_ID}`;
      $id('mem_age').innerHTML = `${main.MEMBER_AGE}`;
      $id('mem_psw').innerHTML = `${main.MEMBER_PSW}`;
      $id('mem_sex').innerHTML = `${main.MEMBER_SEX}`;
      $id('mem_email').innerHTML = `${main.MEMBER_EMAIL}`;
      $id('mem_introduction').innerHTML = `${main.MEMBER_INTRODUCTION}`;
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/my_main.php", true);
  xhr.send(null);
}
function my_group(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      main = JSON.parse(xhr.responseText);
      $id('GROUP_NO').innerHTML = `${main.GROUP_NO}`;
      $id('GROUP_NAME').innerHTML = `${main.GROUP_NAME}`; 
      $id('RES_NAME').innerHTML = `${main.RES_NAME}`;
      $id('STYLE_NAME').innerHTML = `${main.STYLE_NAME}`;
      $id('KIND_NAME').innerHTML = `${main.KIND_NAME}`;
      $id('MEMBER_NAME').innerHTML = `${main.MEMBER_NAME}`;
      $id('JOIN_NUMBER').innerHTML = `${main.JOIN_NUMBER}`;
      $id('MAX_NUMBER').innerHTML = '/'+`${main.MAX_NUMBER}`;
      $id('MEAL_TIME').innerHTML = `${main.MEAL_TIME}`;
      $id('RES_ADDRESS').innerHTML = `${main.RES_ADDRESS}`;
      $id('RES_TEL').innerHTML = `${main.RES_TEL}`;
      $id('RES_BUS_HOURS').innerHTML = `${main.RES_BUS_HOURS}`;
      $id('MAIN_IMG').setAttribute("src",`./image/restaurant_management_img/${main.RES_IMAGE1}`);
      $id('RES_IMAGE1').setAttribute("src",`./image/restaurant_management_img/${main.RES_IMAGE1}`);
      $id('RES_IMAGE2').setAttribute("src",`./image/restaurant_management_img/${main.RES_IMAGE2}`);
      $id('RES_IMAGE3').setAttribute("src",`./image/restaurant_management_img/${main.RES_IMAGE3}`);
      $id('RES_IMAGE4').setAttribute("src",`./image/restaurant_management_img/${main.RES_IMAGE4}`);
      let a = $("#GROUP_NO").text();
      console.log(a);
      if( a == "undefined"){
        $("#have_group").css("display","none");
        $("#no_group").css("display","flex");
        no_group_hover();
      }
      else{
        if (`${main.JOIN_NUMBER}`==`${main.MAX_NUMBER}`) {
          $("#JOIN_NUMBER").css("color","red");
          $("#MAX_NUMBER").css("color","red");
        } 
      }
    }else{
    }
  }
  xhr.open("GET", "./php/my_group.php", true);
  xhr.send(null);

}
//渲染目前想加我開的團的陌生人
function myGroupNow(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      group = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.querySelector('.add_stranger_block');
      for (let i = 0; i < group.length; i++) {
        $(el).append(`
          <li class="stranger_name_list mid_content">
            <div class="stranger_name sm_content">
              <img id="CHECK_IMAGES" src="./image/member/${group[i].CHECK_IMAGES}" >
              <h5 id="CHECK_NAME">
              ${group[i].CHECK_NAME}
              </h5>
              <div class="group_num">${group[i].GROUP_NO}</div>
              <div class="num">${group[i].MEMBER_NO}</div>
            </div>
            <div class="button_box">
                <button class="btn_5 btn_js ok">
                    <i class="fas fa-check">確認</i>
                    <span></span>
                </button>
                <button class="btn_5 btn_js notok">
                    <i class="fas fa-minus">刪除</i>
                    <span></span>
                </button>
            </div>
        </li>
        `);
      }

      btnhover();
      review();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/my_group_now.php", true);
  xhr.send(null);
}
//渲染自己確認參加的團
function tab_ok(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      join = JSON.parse(xhr.responseText);
      var el = document.getElementById('tab_ok');
      for (let i = 0; i < join.length; i++) {
        $(el).append(`
        <div class="ice_eatGroup mid_content">
            <img src="./image/member/${join[i].MEMBER_IMAGE}">
            <div class="ice_eatGroup_content">
                <h5>團名:</h5>
                <h5>${join[i].GROUP_NAME}</h5>
                <br>
                <h5>店名:</h5>
                <h5>${join[i].RES_NAME}</h5>
                <br>
                <h5>用餐日期:</h5>
                <h5>${join[i].DATE}</h5>
                <br>
                <h5>用餐時間:</h5>
                <h5>${join[i].TIME}</h5>
            </div>
            <div class="ice_eatGroup_button">
                <button class="btn_5 btn_js">查看 &#9658<span></span></button>
            </div>
        </div>
        `);
      }
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/tab_ok.php", true);
  xhr.send(null);
}
//渲染被邀請尚未答應的團
function tab_notok(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      join = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('tab_notok');
      for (let i = 0; i < join.length; i++) {
        $(el).append(`
        <div class="ice_eatGroup mid_content">
            <img src="./image/member/${join[i].MEMBER_IMAGE}">
            <div class="ice_eatGroup_content sm_content">
                <h5>團名:</h5>
                <h5>${join[i].GROUP_NAME}</h5>
                <br>
                <h5>店名:</h5>
                <h5>${join[i].RES_NAME}</h5>
                <br>
                <h5>用餐日期:</h5>
                <h5>${join[i].DATE}</h5>
                <br>
                <h5>用餐時間:</h5>
                <h5>${join[i].TIME}</h5>
                <div class="num">${join[i].MEMBER_NO}</div>
                <div class="group_num">${join[i].GROUP_NO}</div>
            </div>
            <div class="ice_eatGroup_button">
                <button class="btn_5 btn_js ok">確認 &#9658<span></span></button>
                <button class="btn_5 btn_js notok">刪除 &#9658<span></span></button>
            </div>
        </div>
        `);
      }
      btnhover();
      review();
    }else{
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/tab_notok.php", true);
  xhr.send(null);
}
//美食團的收藏
function gruop_collection(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
    gc = JSON.parse(xhr.responseText);
    //選取元素
    var el = document.getElementById('gc_page1');
      for (let i = 0; i < gc.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${gc[i].GROUP_NAME}
              </h5>
              <div class="pic">
                  <img src="./image/member/${gc[i].MEMBER_IMAGE}">
              </div>
              <h6 class="author">團主:${gc[i].MEMBER_NAME}</h6>
              <h6 class="date">開團日:${gc[i].START_DATE}</h6>
              <div class="num">${gc[i].GROUP_NO}</div>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/gruop_collection.php", true);
  xhr.send(null);
}
//餐廳的收藏
function restaurant_collection(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      rc = JSON.parse(xhr.responseText);
      var el = document.getElementById('rc_page1');
      for (let i = 0; i < rc.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${rc[i].RES_NAME}
              </h5>
              <div class="pic">
              <img src="./image/restaurant_management_img/${rc[i].RES_IMAGE1}">
              </div>
              <h6 class="address">地址:${rc[i].RES_ADDRESS}</h6>
              <h6 class="tel">電話:${rc[i].RES_TEL}</h6>
              <h6 class="hours">營業時間:${rc[i].RES_HOURS}</h6>
              <div class="num">${rc[i].RES_NO}</div>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/restaurant_collection.php", true);
  xhr.send(null);
}
//文章的收藏
function article_collection(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      ac = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('ac_page1');
      //建立空字串
      for (let i = 0; i < ac.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${ac[i].ARTICLE_TITLE}
              </h5>
              <div class="pic">
              <img src="./image/article_share/${ac[i].ARTICLE_IMAGE1}">
              </div>
              <h6 class="address">作者:${ac[i].MEMBER_NAME}</h6>
              <h6 class="tel">時間:${ac[i].DATE}</h6>
              <h6 class="hours">按讚數:${ac[i].ARTICAL_LIKE}</h6>
              <div class="num">${ac[i].ARTICLE_NO}</div>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/article_collection.php", true);
  xhr.send(null);
}
//我的文章 日期排序
function my_article(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      ma = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('ma_page1');
      for (let i = 0; i < ma.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${ma[i].ARTICLE_TITLE}
              </h5>
              <div class="pic">
              <img src="./image/article_share/${ma[i].ARTICLE_IMAGE1}">
              </div>
              <h6 class="address">作者:${ma[i].MEMBER_NAME}</h6>
              <h6 class="tel">時間:${ma[i].DATE}</h6>
              <h6 class="hours">按讚數:${ma[i].ARTICLE_LIKE}</h6>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/article_select.php", true);
  xhr.send(null);
}
//我的文章 留言排序
function my_article2(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      ma = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('mes_page1');
      for (let i = 0; i < ma.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${ma[i].ARTICLE_TITLE}
              </h5>
              <div class="pic">
              <img src="./image/article_share/${ma[i].ARTICLE_IMAGE1}">
              </div>
              <h6 class="address">作者:${ma[i].MEMBER_NAME}</h6>
              <h6 class="tel">時間:${ma[i].DATE}</h6>
              <h6 class="hours">留言數:${ma[i].MESSAGE_TOTAL}</h6>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/article_select_2.php", true);
  xhr.send(null);
}
//我的文章 愛心排序
function my_article3(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      ma = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('like_page1');
      for (let i = 0; i < ma.length; i++) {
        $(el).append(`
          <div class="tab_box">
              <h5 class="small-title">
                  <i class="fas fa-trash"></i> ${ma[i].ARTICLE_TITLE}
              </h5>
              <div class="pic">
              <img src="./image/article_share/${ma[i].ARTICLE_IMAGE1}">
              </div>
              <h6 class="address">作者:${ma[i].MEMBER_NAME}</h6>
              <h6 class="tel">時間:${ma[i].DATE}</h6>
              <h6 class="hours">按讚數:${ma[i].ARTICLE_LIKE}</h6>
          </div>
        `);
      }
      dotrash();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/article_select_3.php", true);
  xhr.send(null);
}
//我的好友
function my_friend(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //success
      mf = JSON.parse(xhr.responseText);
      //選取元素
      var el = document.getElementById('fd_ul');
      for (let i = 0; i < mf.length; i++) {
        $(el).append(`
        <li class="mid_content">
            <div class="fd_name ">
                <div>
                    <img src="./image/member/${mf[i].MEMBER_IMAGE}">
                </div>
                <h4>
                    ${mf[i].MEMBER_NAME}
                </h4>
                <div class="friend">${mf[i].FRIENDS_NO}</div>
            </div>
            <div class="ice_btn_box col-md-6">
                <button class="go_h btn_5 btn_js"><i class="fas fa-home" aria-hidden="true">小屋</i><span></span></button>
                <button class="invite btn_5 btn_js"><i class="fa fa-user-plus" aria-hidden="true">邀團</i><span></span></button>
                <button class="de_fd btn_5 btn_js"><i class="fas fa-minus-circle defriend" aria-hidden="true">刪除</i><span></span></button>
            </div>
        </li>
        `);
      }
      btnhover();
      del_friend();
    }else{ //error
      //console.log(xhr.status);
    }
  }
  xhr.open("GET", "./php/my_friend.php", true);
  xhr.send(null);
}
//loading就執行
function start(){
      //渲染
      memberrender();
      //註冊
      // registered();
      //側邊按鈕切換內容
      sidetab_change_content();
      //內頁籤切換
      intab_change_content();
      //btnhover效果
      btnhover();
      //上傳大頭貼是否為圖檔的hover
      pic_up_hover();
      //更換側邊圖片
      picChange();
      //照片修改送出
      pic_modifyajax();
      //會員更改顯示修改鈕
      show_mem_modify();
      //會員修改
      member_modify();
      //會員修改送出
      member_modifyajax();
      //個人資訊
      my_main();
      //開團資訊
      my_group();
      //審核陌生團員
      myGroupNow();
      //確認餐團
      tab_ok();  
      //被邀請待回
      tab_notok();
      //美食團收藏
      gruop_collection();
      //餐廳收藏
      restaurant_collection();
      //文章收藏
      article_collection();
      //我的文章
      my_article();
      my_article2();
      my_article3();
      //我的朋友
      my_friend();
}
window.addEventListener("load",start,false); 


// //上下頁切換
// //下一頁
// let Next_page1 = document.getElementsByClassName('Next_page')[0];
// let Next_page2 = document.getElementsByClassName('Next_page')[1];
// let Previous_page1 = document.getElementsByClassName('Previous_page')[0];
// let Previous_page2 = document.getElementsByClassName('Previous_page')[1];
// let asd =1;
// Next_page1.addEventListener('click',nextPageChange);
// function nextPageChange(){
//     document.getElementsByClassName(`page${asd}`).classList.remove('-on');
//     document.getElementsByClassName(`page${asd+1}`).classList.add('-on');
//     asd++;
// }


// Previous_page1.addEventListener('click',PreviousPageChange);
// function PreviousPageChange(){
//     document.getElementById(`page${asd}`).classList.remove('-on');
//     document.getElementById(`page${asd-1}`).classList.add('-on');
//     asd--;
// }

// //上一頁
// $(".Previous_page").click(function(){
//   var num = $(this).parent().siblings().children().children('-on').index() - 1;
//   console.log(num);
//   page.removeClass("-on");
//   $(".tab_gruop_collection .page").eq(num).addClass("-on");
// });


