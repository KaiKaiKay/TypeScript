//6.
//object 表示一個對象 
//開發時不常使用
var aa;
aa = {};
aa = function () { };
//變量bb 指向一對象 且對象裡要有name屬性
//{} 用來指定對象中可以包含哪些屬性
//語法: {屬姓名:屬性值,屬姓名:屬性值,...}
var bb;
//bb={}; //報錯:類型 '{}' 缺少屬性 'name'
bb = { name: "郭巴巴" };
//在屬性後面加上? 表示屬性是可選的(可加可不加)
var cc;
cc = { name: "郭巴巴" };
cc = { name: "郭巴巴", age: 7 };
//[propName:string]:any 表示可以有任意類型的屬性
var dd; //只要求對象必有name屬性 其他不管
dd = { name: "郭巴巴", age: 18, gender: "boy" };
//設置函數結構的類型聲明
//語法: (形參:類型,形參:類型,...) => 返回值
var ee; //ee函數有兩個參數ab ab參數類型必須是number 且回傳的值也是number
ee = function (n1, n2) {
    return n1 + n2;
};
//7.
//array 陣列
//陣列的類型聲明:
//語法一: 類型[]
//語法二: Array<類型>
//string[] 表示字串陣列
var ff;
ff = ["a", "b", "c"];
//ff = [1, 2, 3]; //數字陣列 報錯
//string[] 表示數字陣列
var gg;
gg = [1, 2, 3];
//gg= ["a", "b", "c"]; //字串陣列 報錯
//8.
//tuple 元組 元組就是固定長度的陣列 (陣列數量固定) TS的類型
//語法: [類型,類型,...]
var hh;
hh = ["hihi", "hoho"];
//hh = ["hihi", 123]; //出現數字類型 報錯
//hh = ["hihi", "hoho", "dodo"]; //超過兩個string 報錯
//9.
//enum 枚舉 TS的類型
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
var ii;
ii = {
    name: "郭巴巴",
    gender: Gender.male //男
};
console.log(ii.gender === Gender.male);
