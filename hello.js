let date = new Date();
h = date.getHours();

console.log(h < 3 || h > 8);
console.log(h >= 3 && h <= 8);

let type = typeof(date.getHours());
console.log(type);

const con1 = "상수선언";
console.log(con1);

//홀짝
let input = 31;

if( input % 2 == 0){
    console.log("짝수!");
}
console.log("홀수!");

//
if( date.getHours() < 12){
    console.log("오전!");
}
console.log("오후!");

// Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getUTCMinutes());
console.log(date.getSeconds());
console.log(date.getDate());