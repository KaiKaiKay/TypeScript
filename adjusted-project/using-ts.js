var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");

//JS寫法(X) 變成字串相加
// function add(num1, num2) {
//     return num1 + num2;
// }
// button.addEventListener("click", function () {
//     console.log(add(input1.value, input2.value));
//     //input會變成"字串"
// });


//JS寫法(O)
// function add(num1, num2) {
//     if(typeof num1==="number"&&typeof num2==="number"){
//         return num1+num2;
//     }else{
//         //一元正號運算子（+）置於運算元之前並取其數值 將之轉為數字。
//         return +num1 + +num2;
//     };
// };
// button.addEventListener("click", function () {
//     console.log(add(input1.value, input2.value));
//     //input會變成"字串"
// });


// ▼ TS 轉出的 JS 會長這樣
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
