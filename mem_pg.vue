    <script>
        Vue.component('myself', { 
            template: `
            <div class="my_main">
                <div class="block">
                    <div class="title">
                    我的資訊
                    </div>
                    <div class="small-block">
                        <div class="part">
                            <div class="small-title">
                            姓名:
                            </div>
                            <div class="content" id="name">
                            孫小美
                            </div>
                            <button class="change">
                            修改
                            </button>
                        </div>
                        <div class="part">
                            <div class="small-title">
                            帳號:
                            </div>
                            <div class="content">
                            meimei2
                            </div>
                        </div>
                        <div class="part">
                            <div class="small-title">
                            年齡:
                            </div>
                            <div class="content">
                            20-25
                            </div>
                        </div>
                        <div class="part">
                            <div class="small-title">
                            密碼:
                            </div>
                            <div class="content" id="psw">
                            mei000
                            </div>
                            <button class="change">
                            修改
                            </button>
                        </div>
                        <div class="part">
                            <div class="small-title">
                            性別:
                            </div>
                            <div class="content">
                            女性
                            </div>
                        </div>
                        <div class="part">
                            <div class="small-title">
                            信箱:
                            </div>
                            <div class="content" id="email">
                            meimei@mail.com
                            </div>
                            <button class="change">
                            修改
                            </button>
                        </div>
                        <div class="part">
                            <div class="small-title">
                                自我介紹:
                            </div>
                            <button class="change">
                                修改
                            </button>
                            <div class="content" id="introduce">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aliquid mollitia veritatis. Blanditiis impedit ab nihil ratione, pariatur sed voluptates harum laborum quo rem eos atque? Laboriosam placeat fugit beatae?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `,
        });

        Vue.component('mysg', { 
            template: `
            <div class="my_group">
                我的開團
                666666
            </div>
            `,
        });

        Vue.component('mysa', { 
            template: `
            <div class="my_jion">
                我的參團
            </div>
            `,
        });
        Vue.component('mylove', { 
            template: `
            <div class="my_collect">
                我的收藏
            </div>
            `,
        });
        Vue.component('myword', { 
            template: `
            <div class="my_artical">
                我的文章
            </div>
            `,
        });
        Vue.component('myfd', { 
            template: `
            <div class="my_friend">
                我的好友
            </div>
            `,
        });

        new Vue({
            el: '#app',
            data: {
                content: 'myself',
            },
        });
    </script>