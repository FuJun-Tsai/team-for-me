// $(document).ready(function(){
//     id = 2;
//     // store = ['無敵蛋餅','數杯杯','小籠包','大中央牛排','竹香'];
//     store = ['first','second','third','forth','fifth'];
//     $('#Rarrow').on('click',function(){
//         restchange('turnR');
//     });
    
//     $('#Larrow').on('click',function(){
//         restchange('turnL');
//         // console.log(store[0]);
//     });
    
//     function restchange(e){
//         if(e=='turnL'){
//             if(id<5){
//                 id+=1;
//             }else{
//                 id=1;
//             }

//         }else if(e=='turnR'){
//             if(id>1){
//                 id-=1;
//             }else{
//                 id=5;
//             }
            
//         }
        
//         // $(`#${store[id-2]}`).css({'width':'15%'});
//         // $(`#${store[id-1]}`).css({'width':'25%'});
//         $(`#${store[id]}`).animate({'width':'35%'});
//         // $(`#${store[id+1]}`).css({'width':'25%'});
//         // $(`#${store[id+2]}`).css({'width':'15%'});
//         console.log(store[id]);
//         console.log(id);
        
//         $('.team').css({'display':'none'});
//         $(`#${store[id]} .team`).css({'display':'block'});

    

//     };

// });

var storeContainer = document.getElementById("storeContainer");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");

var Rarrow = document.getElementById("Rarrow");
var Larrow = document.getElementById("Larrow");

var imgArr = [first,second,third,fourth,fifth];

var index = 0;

Larrow.addEventListener("click",function(){
    storeContainer.appendChild(imgArr[index]);
    index++
    if(index > 4){
        index = 0;
    }
},false);

Rarrow.addEventListener("click",function(){

    var s2nd = storeContainer.getElementsByTagName("div")[0];
    var last = storeContainer.getElementsByTagName("div")[4];
    storeContainer.insertBefore( last,s2nd);

},false);

// $('.button').on('click',function{

// });