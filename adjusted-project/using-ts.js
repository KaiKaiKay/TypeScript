var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//! 的作用是：告訴 TS 這個值不是 null 或是 undefined
//用 as 告訴 TS 型別
//: 指定類型
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
