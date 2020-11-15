function $id(id){
	return document.getElementById(id);
}	

let member;

    function showLoginForm(){
      //檢查登入bar面版上 spanLogin 的字是登入或登出
      //如果是登入，就顯示登入用的燈箱(lightBox)
      //如果是登出
      //將登入bar面版上，登入者資料清空 
      //spanLogin的字改成登入
      //將頁面上的使用者資料清掉
      if($id('spanLogin').innerHTML == "登入"){
        $id('login_box').style.display = 'flex';
      }else{//登出
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
          $id("headshot_icon").setAttribute("src","./image/icon.svg");
          $id('spanLogin').innerHTML = '登入';          
        }
        xhr.open("post", "php/logout.php", true);
        xhr.send(null);
      }

    }//showLoginForm

    function sendForm(){
      //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
      let MEMBER_ID = document.getElementsByName("MEMBER_ID")[0].value;
      let MEMBER_PSW = document.getElementsByName("MEMBER_PSW")[0].value;
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
        member = JSON.parse(xhr.responseText);
        if(member.MEMBER_ID = true){
          $id("headshot_icon").setAttribute("src",`./image/member/${member.MEMBER_IMAGE}`);
          $id('spanLogin').innerHTML = '登出';
          // document.getElementsByClassName('username')[0].innerText(`${member.MEMBERR_NO}`);
          $('.username').text(`${member.MEMBER_NO}`);
          //將登入表單上的資料清空，並隱藏起來
          
          $id('login_box').style.display = 'none';
          MEMBER_ID = '';
          MEMBER_PSW = '';          
        }else{
            window.alert("帳密錯誤~");
        }
      }

      xhr.open("Post", "php/login.php", true);
      xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
      let data_info = `MEMBER_ID=${MEMBER_ID}&MEMBER_PSW=${MEMBER_PSW}`;
      console.log(data_info);
      xhr.send(data_info); 
    }

    function cancelLogin(){
      //將登入表單上的資料清空，並將燈箱隱藏起來
      $id('login_box').style.display = 'none';
      document.getElementsByName("MEMBER_ID").value = '';
      document.getElementsByName("MEMBER_PSW").value = '';
    }


    function getMemberInfo(){
      let xhr = new XMLHttpRequest();

      xhr.onload = function(){
        if(xhr.status == 200){ //success
          member = JSON.parse(xhr.responseText);
          if(member.MEMBER_ID){
            $id("headshot_icon").setAttribute("src",`./image/member/${member.MEMBER_IMAGE}`);
            $id('spanLogin').innerHTML = '登出';
            $('.username').text(`${member.MEMBER_NO}`);  
          }


        }else{ //error
          alert(xhr.status);
        }
      }

      xhr.open("get", "php/getMemberInfo.php", true);
      xhr.send(null);
    }

    function init(){
      user = '';
      //-----------------------檢查是否已登入
      getMemberInfo();

      //===設定spanLogin.onclick 事件處理程序是 showLoginForm

      $id('spanLogin').onclick = showLoginForm;

      //===設定btnLogin.onclick 事件處理程序是 sendForm
      $id('btnLogin').onclick = sendForm;

      //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
      $id('btnLoginCancel').onclick = cancelLogin;

    }; //window.onload

    window.addEventListener("load",init,false);

    function toggleForm() {
        var container_res = document.querySelector('.container_res');
        container_res.classList.toggle('act')
    }
