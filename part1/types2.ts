//6.
//object 表示一個對象 
//開發時不常使用
let aa: object;
aa = {};
aa = function () { };

//變量bb 指向一對象 且對象裡要有name屬性
//{} 用來指定對象中可以包含哪些屬性
//語法: {屬姓名:屬性值,屬姓名:屬性值,...}
let bb: { name: string };
//bb={}; //報錯:類型 '{}' 缺少屬性 'name'
bb = { name: "郭巴巴" };

//在屬性後面加上? 表示屬性是可選的(可加可不加)
let cc: { name: string, age?: number };
cc = { name: "郭巴巴" };
cc = { name: "郭巴巴", age: 7 };

//[propName:string]:any 表示可以有任意類型的屬性
let dd: { name: string, [propName: string]: any }; //只要求對象必有name屬性 其他不管
dd = { name: "郭巴巴", age: 18, gender: "boy" };

//設置函數結構的類型聲明
//語法: (形參:類型,形參:類型,...) => 返回值
let ee: (a: number, b: number) => number; //ee函數有兩個參數ab ab參數類型必須是number 且回傳的值也是number
ee = function (n1: number, n2: number): number {
    return n1 + n2;
};

//7.
//array 陣列
//陣列的類型聲明:
//語法一: 類型[]
//語法二: Array<類型>

//string[] 表示字串陣列
let ff: string[];
ff = ["a", "b", "c"];
//ff = [1, 2, 3]; //數字陣列 報錯

//string[] 表示數字陣列
let gg: Array<number>;
gg = [1, 2, 3];
//gg= ["a", "b", "c"]; //字串陣列 報錯

//8.
//tuple 元組 元組就是固定長度的陣列 (陣列數量固定) TS的類型
//語法: [類型,類型,...]

let hh: [string, string];
hh = ["hihi", "hoho"];
//hh = ["hihi", 123]; //出現數字類型 報錯
//hh = ["hihi", "hoho", "dodo"]; //超過兩個string 報錯

//9.
//enum 枚舉 TS的類型

enum Gender {
    male = 0,
    female = 1
};

let ii: { name: string, gender: Gender };
ii = {
    name: "郭巴巴",
    gender: Gender.male //男
};

console.log(ii.gender === Gender.male); //true


//且'&'
let jj: { name: string } & { age: number };
jj = { name: "郭巴巴", age: 7 };

//類型別名
type myType = 1 | 2 | 3 | 4 | 5;
let kk: myType;
let ll: myType;

kk = 1;
//kk = 6; //報錯