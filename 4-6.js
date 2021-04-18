let foo = [10, 20, 30, 40, 50];

for (let i in foo) {
    console.log(`${i}번째 요소는 ${foo[i]}이다.`)
}
// bar = foo [0];
for (let item of foo) {
    console.log(item)
}
//push
bar = [0];
console.log("\n push");
foo.push("자료구조", 1, 0.5);
bar.push(1,2,3);
console.log(foo);
console.log(bar);
//pop
console.log("\n pop");
foo.pop();
console.log(foo);
//shift
console.log("\n shift");
foo.shift();
console.log(foo);
//concat
console.log("\n concat");
foo = foo.concat(bar);
console.log(foo);
foo = bar.concat(foo);
console.log(foo);
//reverse
console.log("\n reverse");
foo.reverse();
console.log(foo);
//sort
console.log("\n sort");
foo.sort();
console.log(foo);
//slice
console.log("\n slice");
console.log(foo);
console.log(foo.slice(1, 5));
console.log(foo);
//splice
console.log("\n splice");
foo = ["a","b","c","d","e"];
bar = foo.splice(2, 2, 100, 0.5, "문자");
console.log(foo);
console.log(bar);

console.log("\n join");
foo = [0, 1, 2, 3, 4, 5];
foo = foo.join("/");
console.log(foo);



