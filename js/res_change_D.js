function doFirst() {
    //餐廳種類篩選
    let resInput = document.querySelectorAll('.den_res_type input'); //list是陣列
    let cookInput = document.querySelectorAll('.den_cooking_style input'); //list是陣列
    var g = $('.den_content div');
    // let cookInput = document.querySelectorAll('.cooking_style input'); //list是陣列
    for (let i = 0; i < resInput.length; i++) {
        resInput[i].addEventListener('change', function() {
            // console.log(resInput[i].id);
            // console.log(resInput[i].value);
            // var g = $('.content div');
            let Number = resInput[i].value;
            switch (Number) {
                case '日式':
                    let a = $('.den_content div #日式').parent();
                    // if (cookInput)
                    // console.log(cookInput[].checked);
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < a.length; i++) {
                        a[i].style.display = 'inline-block';
                    }
                    break;
                case '美式':
                    let b = $('.den_content div #美式').parent();
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < b.length; i++) {
                        b[i].style.display = 'inline-block';
                    }
                    break;
                case '西式':
                    let c = $('.den_content div #西式').parent();
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < c.length; i++) {
                        c[i].style.display = 'inline-block';
                    }
                    break;
                case '韓式':
                    let d = $('.den_content div #韓式').parent();
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < d.length; i++) {
                        d[i].style.display = 'inline-block';
                    }
                    break;
                case '中台':
                    let e = $('.den_content div #中台').parent();
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < e.length; i++) {
                        e[i].style.display = 'inline-block';
                    }　
                    break;
                case '東南亞':
                    let f = $('.den_content div #東南亞').parent();
                    for (let i = 0; i < g.length; i++) {
                        g[i].style.display = 'none';
                    }
                    for (let i = 0; i < f.length; i++) {
                        f[i].style.opacity = '1';
                        f[i].style.display = 'inline-block';
                    }　
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
            for (let i = 0; i < g.length; i++) {
                // g[i].style.display = 'none';
            }
        }

        cookInput[i].addEventListener('change', function() {
            // console.log(cookInput[i].value);
            // console.log(cookInput[i].checked);
            if (cookInput[i].checked == true) {
                console.log('1');
                // $('.content div')
                let Number1 = cookInput[i].value;
                var t = $('.den_content div');

                switch (Number1) {
                    case '火鍋':
                        let a = $('.den_content div #火鍋').parent();
                        for (let i = 0; i < t.length; i++) {
                            t[i].style.display = 'none';
                        }
                        for (let i = 0; i < a.length; i++) {
                            a[i].style.display = 'inline-block';
                        }
                        break;
                    case '燒烤':
                        let b = $('.den_content div #燒烤').parent();
                        for (let i = 0; i < t.length; i++) {
                            t[i].style.display = 'none';
                        }
                        for (let i = 0; i < b.length; i++) {
                            b[i].style.display = 'inline-block';
                        }
                        break;
                }
            } else {

            }
        });
    }
}
window.addEventListener('load', doFirst);