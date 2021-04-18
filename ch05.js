// code 5-1 익명함수

// let foo = function() {
//     console.log("첫 번째 줄");
//     console.log("두 번째 줄");
// };
// foo();
// console.log(foo);

// 5-2 선언적 함수
// function foo() {
//     console.log("첫 번째 줄");
//     console.log("두 번째 줄");
// }
// foo();
// console.log(foo);

// 화살표 함수
// let foo = () => {
//     console.log("첫 번째 줄");
//     console.log("두 번째 줄");
// };

// foo();
// console.log(foo);
//함수 기본
function power(x) {
    return x * x;
}

console.log(power(10));

function foo(x) {
    let bar = x * x;
    return bar;
}

let foobar = foo(10);
console.log(foobar);

// function print(name, count) {
//     if(!count){
//         count = 1;
//     }
//     console.log(`${name}이 ${count}개 있습니다.`)
// }
// print("사과", 10);
// print("사과");

function print(name="무명", count=1){
    console.log(`${name}이 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과");
print();

function callTenTimes(callback) {
    for(let i = 0; i < 10; i++){
        callback();
    }
}
callTenTimes(function() {
    console.log("함수 호출");
});

// callTenTimes( () => {
//     console.log("함수 호출");
// });

setTimeout(() => {
    console.log("1초 경과");
}, 1000)

setInterval(() => {
    console.log("1초 경과");
},1000);

function power(x, y) {
    let result = 1;
    y = y || 2;
    for(let i = 0; i < y; i++){
        result *= x;
    }
    return result;
}
function multiply(){
    let result = 1;
    for(let i = 0; i < arguments.length; i++){
        result *= arguments[i];
    }
    return result;
}
console.log(power(2));
console.log(multiply(1,2,3,4,5));