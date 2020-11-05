// 判定地皮归属
// setInterval(function() {
//     for (var i = 0; i < place.length; i++) {
//         if (place[i].owner == "Robin") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #FA2A14,3px -3px 3px inset #FA2A14,-3px 3px 3px inset #FA2A14, -3px -3px 3px inset #FA2A14";
//         }
//         if (place[i].owner == "Batman") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #121212,3px -3px 3px inset #121212,-3px 3px 3px inset #121212, -3px -3px 3px inset #121212";
//         }
//         if (place[i].owner == "Superman") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #274D7A,3px -3px 3px inset #274D7A,-3px 3px 3px inset #274D7A, -3px -3px 3px inset #274D7A";
//         }
//         if (place[i].owner == "Catwoman") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #B04E58,3px -3px 3px inset #B04E58,-3px 3px 3px inset #B04E58, -3px -3px 3px inset #B04E58";
//         }
//         if (place[i].owner == "Green Lantern") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #5FAE2E,3px -3px 3px inset #5FAE2E,-3px 3px 3px inset #5FAE2E, -3px -3px 3px inset #5FAE2E";
//         }
//         if (place[i].owner == "Joker") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset #5E45AB,3px -3px 3px inset #5E45AB,-3px 3px 3px inset #5E45AB, -3px -3px 3px inset #5E45AB";
//         }
//         if (place[i].owner == "Harley Quinn") {
//             boxes[i].style.boxShadow = "3px 3px 3px inset pink,3px -3px 3px inset pink,-3px 3px 3px inset pink, -3px -3px 3px inset pink";
//         }
//         // if (place[i].owner == "none") {
//         //     boxes[i].style.boxShadow = "1px 1px 1px inset #454545,1px -1px 1px inset #454545,-1px 1px 1px inset #454545, -1px -1px 1px inset #454545";
//         // }
//     }
// });


function doFirst() {
    let a = $('#player1').attr('src', './image/den_image/white.jpg');

    let boxss = document.querySelectorAll('.box'); //list是陣列



    for (let i = 0; i < boxss.length; i++) {

        boxss[i].addEventListener('click', function() {

            let boxss1 = boxss[i].id;
            let boxId = boxss1.substr(1, 2)
            let ccc = boxss[i].getElementsByTagName('img')[0];
            console.log(boxId);

            var newImg01
            for (let i = 0; i < 4; i++) {
                let newImg01 = document.createElement("img");
                newImg01.setAttribute("id", "no" + i);
                newImg01.src = ccc.src;
                document.querySelector('.purchasebox_content_left').appendChild(newImg01)
            }

            let rsTitle = document.createElement("h2");
            let rsName = document.createElement("h3");
            let rsContent = document.createElement("p");

            document.querySelector('.purchasebox_content_right').appendChild(rsTitle)
            document.querySelector('.purchasebox_content_right').appendChild(rsName);
            let qq = document.querySelector('.purchasebox_content_right').appendChild(rsContent)
            rsTitle.innerText = "今晚!我想來點~"
            rsContent.innerText = place[boxId].text;
            rsName.innerText = place[boxId].name;
            purchase.style.visibility = "visible";
        });


        purchase.children[2].onclick = function() {
            // place[boxId].owner = person.name;
            let boxss1 = boxss[i].id;
            let boxId = boxss1.substr(1, 1)

            purchase.style.visibility = "hidden";
            person.money -= place[boxId].value;
            msgtype = "purchase";
            for (let i = 0; i < 4; i++) {
                let imgAll = document.querySelector('.purchasebox_content_left img')
                imgAll.remove();
            }
            let rsContent = document.querySelector('.purchasebox_content_right p')
            rsContent.remove();
            let rsName = document.querySelector('.purchasebox_content_right h3')
            rsName.remove();
            let rsTitle = document.querySelector('.purchasebox_content_right h2')
            rsTitle.remove();


            // showMsgbox();
            gameSequence();
        }
        purchase.children[3].onclick = function() {
            for (let i = 0; i < 4; i++) {
                let imgAll = document.querySelector('.purchasebox_content_left img')
                imgAll.remove();
            }
            let rsContent = document.querySelector('.purchasebox_content_right p')
                // console.log(rsContent)
            rsContent.remove();
            let rsName = document.querySelector('.purchasebox_content_right h3')
            rsName.remove();
            let rsTitle = document.querySelector('.purchasebox_content_right h2')
            rsTitle.remove();


            purchase.style.visibility = "hidden";

            // showMsgbox();
            gameSequence();

        }






    }






    // let b = $('.box').id();
    // // console.log(b);
    // if (b == 11) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }
    // if (b == 12) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }
    // if (b == 13) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }
    // if (b == 14) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }
    // if (b == 15) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }

    // if (b == 11 && b == 12 && b == 13 && b == 14 && b == 15) {
    //     $('#player1').css('transform', 'scaleX(-1)');
    // }
    $('#b0 img:nth-child(3)').remove();
}

window.addEventListener('load', doFirst);