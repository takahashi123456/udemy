// const let の変数宣言
// var は上書き,再宣言可能
var val1 = "test";
console.log(val1);

// let 上書き可能,再宣言不可
let val2 = "aa";
console.log(val2);
val2 = "22";
console.log(val2);
// let val2 = 111; error

// const は再宣言も上書きも不可（オブジェクトや配列は変更可能)
const val3 = "111";
console.log(val3);
// val3 = 111;

// テンプレート文字列
// const name = "inagawa";
// const age = 26;
// 私の名前はinagawa26歳ですと表示する
// 従来の方法
const message = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// 今の方法（テンプレート文字列)
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

// あろー関数 以下3つは全て同じことをしている
function func1(str) {
  return str;
}

const func2 = (str) => {
  return str;
};
const func3 = (str) => str;
console.log(func1("こんばんわ"));
console.log(func2("こんばんわ"));

// 分割代入,
const myprof = {
  name: "inagawa",
  age: 28
};
const message_ = `名前は${myprof.name}、年は${myprof.age}`;
console.log(message_);

const { name, age } = myprof;
const message_2 = `名前は${name}、年は${age}`;

//  配列の展開
const array = [1, 2];
// console.log(array);
// console.log(...array);
const sumfunc = (num1, num2) => {
  console.log(num1 + num2);
};
sumfunc(array[0], array[1]);
sumfunc(...array);

// map,filterを使った配列の処理
const nameArr = ["田中", "高田", "inagawa"];
// 従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// mapを使うと
nameArr.map((name) => {
  console.log(name);
});
// mapを使って配列のコピー
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
const nameArr2 = nameArr.map((name, index) =>
  console.log(`${index}版目は${name}`)
);
// console.log(nameArr2);

// filterを使った配列の処理
const numArray = [1, 2, 3, 4, 5, 22, 32, 35];
const newNumArray = numArray.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArray);

// パイプライン(|| &&)
// ||　は左側がfalseの時、右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);
// &&は左がtrue の時左側を返す
