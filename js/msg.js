// 消息提示框
var msgtype = "";
var msgbox = document.querySelector(".msgbox");

function showMsgbox() {
    msgbox.style.visibility = "visible";
    if (msgtype == "purchase") {
        msgbox.firstElementChild.innerHTML = "恭喜你获得了" + place[position].name;
    }
    setTimeout(function() {
        msgbox.style.visibility = "hidden";
    }, v * 1.6);
}