//1.
//使用字面量(直接使用具體值)進行類型聲明
let a: 10;
a = 10;
// a=11; //會報錯

//可以使用 "|" 來連接多個類型 (聯合類型)
let b: "male" | "female"; //male 或 female
b = "male";
b = "female";
// b="hello"; //會報錯

let c: boolean | string;
c = true;
c = "hello";
// c = 20; //會報錯

//2.
//any 表示任意類型 一個變量設置為any後 相當於關閉"該變量"的TS類型檢測
//不建議使用any 就相當於用JS

//顯示的any
let d: any;
d = 10;
d = true;
d = "hello";

//隱式的any: 聲明變量如沒指定類型 就會自動判斷類型為any
let e;
e = 10;
e = true;
e = "hello";

//3.
//unknown 表示未知類型的值
//unknown 算是類型比較安全的 any
let f: unknown;
f = 10;
f = false;
f = "hihi";

let g: string;
//d類型是any 可以賦值給任意變量 → any不只影響自己 還影響別人
//g=d; 

//f類型是unknown 但g類型是string 不能直接賦值給其他變量 → unknown只影響自己 但不影響別人
//f="hihi";
//g=f; //報錯

//設定 如果f類型是string 則g=f 這樣就不會報錯
if (typeof f === "string") {
    g = f;
};

//類型斷言 可以用來告訴解析器變量的實際類型
//寫法一: 變量 as 類型
g = f as string;
//寫法二: <類型>變量
g = <string>f;

//4.
//void 用來表示"空值" 以函數為例 就表示"沒有返回值的函數"
function fuVoid(): void {
    //return true; //報錯
    return;
    return undefined;
    //return null; //類型 'null' 不可指派給類型 'void'。
}

//5.
//never 表示"沒有值" 永遠不會返回結果 通常用來報錯使用
function fuNever(): never {
    throw new Error("報錯！");
};