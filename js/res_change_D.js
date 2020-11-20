function doFirst() {
    //餐廳種類篩選
    let resInput = document.querySelectorAll('.den_res_type input'); //list是陣列
    let cookInput = document.querySelectorAll('.den_cooking_style input'); //list是陣列

    for (let i = 0; i < resInput.length; i++) {
        resInput[i].addEventListener('change', function() {

            let Number = resInput[i].value;
            // console.log(Number);

            // function getData(aaa) {
            //     var req = new XMLHttpRequest();
            //     req.open('get', 'http://localhost/ED103-G4/open_group.php' + aaa);
            //     req.onload = function() {
            //         alert(this.responseText);
            //     }
            //     req.send();
            // }

            switch (Number) {
                case '日式':
                    // console.log(Number)
                    // let a = $('.den_content div #日式').parent();
                    // // if (cookInput)
                    // // console.log(cookInput[].checked);
                    // for (let i = 0; i < g.length; i++) {
                    //     g[i].style.display = 'none';
                    // }
                    // for (let i = 0; i < a.length; i++) {
                    //     a[i].style.display = 'inline-block';
                    // }
                    // location.href=`RES_NO=${owlImage[i]}`;
                    // location.href = `?RES_KIND=1`;

                    // `?RES_NO=${aa}`;
                    // getData(`?RES_NO=1`);
                    // RES_STYLE = 1;
                    // console.log(RES_STYLE);


                    break;

                case '西式':
                    // let c = $('.den_content div #西式').parent();
                    // for (let i = 0; i < g.length; i++) {
                    //     g[i].style.display = 'none';
                    // }
                    // for (let i = 0; i < c.length; i++) {
                    //     c[i].style.display = 'inline-block';
                    // }
                    // location.href = `?RES_KIND=2`;

                    break;
                case '韓式':
                    // let d = $('.den_content div #韓式').parent();
                    // for (let i = 0; i < g.length; i++) {
                    //     g[i].style.display = 'none';
                    // }
                    // for (let i = 0; i < d.length; i++) {
                    //     d[i].style.display = 'inline-block';
                    // }
                    // location.href = `?RES_KIND=4`;

                    break;
                case '中台':
                    // let e = $('.den_content div #中台').parent();
                    // for (let i = 0; i < g.length; i++) {
                    //     g[i].style.display = 'none';
                    // }
                    // for (let i = 0; i < e.length; i++) {
                    //     e[i].style.display = 'inline-block';
                    // }　
                    // location.href = `?RES_KIND=3`;

                    break;
                case '東南亞':
                    // let f = $('.den_content div #東南亞').parent();
                    // for (let i = 0; i < g.length; i++) {
                    //     g[i].style.display = 'none';
                    // }
                    // for (let i = 0; i < f.length; i++) {
                    //     f[i].style.opacity = '1';
                    //     f[i].style.display = 'inline-block';
                    // }　
                    // location.href = `?RES_KIND=5`;

                    break;
                default:
                    　x = "沒有符合的條件";
            }
            // document.write(x);
            // console.log(x);
            // $('.box').css('display', 'block');
            // $('.box_background').css('display', 'block');

        });
    }
    //料理風格篩選
    for (let i = 0; i < cookInput.length; i++) {
        // cookInput[i]
        // console.log(cookInput[i].checked);
        // console.log(cookInput[i].checked);
        if (cookInput[i].checked == false) {
            for (let i = 0; i < i.length; i++) {
                // g[i].style.display = 'none';
            }
        }

        cookInput[i].addEventListener('change', function() {
            // console.log(cookInput[i].value);
            // console.log(cookInput[i].checked);
            if (cookInput[i].checked == true) {
                // console.log('1');
                // $('.content div')
                let Number1 = cookInput[i].value;
                // var t = $('.den_content div');

                switch (Number1) {
                    case '火鍋':
                        // let a = $('.den_content div #火鍋').parent();
                        // for (let i = 0; i < t.length; i++) {
                        //     t[i].style.display = 'none';
                        // }
                        // for (let i = 0; i < a.length; i++) {
                        //     a[i].style.display = 'inline-block';
                        // }
                        // document.write(location.search);
                        // console.log(location.search);
                        // ajax.open('GET', 'http://localhost/ED103-G4/open_group.php' + '? RES_STYLE = 1', true);

                        //-----------------------------------------------

                        // let githubURL = new URL('http://localhost/ED103-G4/open_group.php');
                        // var searchParams = new URLSearchParams('& RES_STYLE = 1 ');
                        // githubURL.search = searchParams;
                        // githubURL.href;

                        //------------------------------------------------------

                        // console.log(searchParams);
                        // fetch(githubURL.href).then();
                        // githubURL.search = searchParams;
                        // let ggg = searchParams.toString();
                        // console.log(Number1)
                        // location.href = `?RES_STYLE=1`;
                        // console.log(ggg);
                        break;
                    case '燒烤':
                        // let b = $('.den_content div #燒烤').parent();
                        // for (let i = 0; i < t.length; i++) {
                        //     t[i].style.display = 'none';
                        // }
                        // for (let i = 0; i < b.length; i++) {
                        //     b[i].style.display = 'inline-block';
                        // }
                        // location.href = `?RES_STYLE=2`;
                        // console.log(Number1)

                        break;
                }
            } else {

            }
        });
    }
}
window.addEventListener('load', doFirst);