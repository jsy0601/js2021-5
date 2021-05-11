let foo = [55, 65, 400, 150, 24];

foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});

let bar = foo.map((item, index) => {
    return item + 10;
});
console.log(bar);

let foobar = foo.filter((item,index) => {
    return item % 2 == 0;
});
console.log(foobar);
// let date = new Date();
// console.log(date);

// date.setFullYear(date.getFullYear() + 1);
// date.setMonth(date.getMonth() + 11);
// date.setDate(date.getDate() + 3);

// console.log(date);

// let foo = [
//     {
//         name: '고구마',
//         price: 1000
//     }, 
//     {
//         name: '감자',
//         price: 500
//     }, 
//     {
//         name: '바나나',
//         price: 1500
//     }, 
// ];
// let popped = foo.pop();
// console.log(popped);
// console.log(foo);

// foo.push(popped);
// foo.push(
//     {
//         name: "사과",
//         price: 2000
//     },
//     {
//         name: "수박",
//         price: 3000
//     }
// );
// console.log(foo);

// let foo = false;
// let bar = 123;

// console.log(typeof foo);
// console.log(typeof bar);

// let foo = 123;

// Number.prototype.method = function () {
//     return "hello"
// }
// console.log(foo.method());

// let foo = "abcdefg";
// //자기 자신을 변경한 후 리턴
// foo = foo.toUpperCase();
// console.log(foo);

