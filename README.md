# 정서연 [202030428]
## [05월 04일]
### 오늘 배운 내용 요약
- 기본 자료형과 객체 자료형의 차이
- number 객체
- string 객체
### 여러 줄 요약
#### 생성자 함수와 프로토타입
- 배열과 객체를 사용하면 여러 개의 데이터를 쉽게 다룰 수 있음
- 객체 지향 프로그래밍
```javascript
let products = {
    {name: '바나나', price: 1200},
    {name: '사과', price: 2000}
};
```
#### 생성자 함수
- 객체를 만드는 함수
- 대문자로 시작하는 이름 사용
```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
}
// 객체를 생성
let product = new Product("바나나", 1200);
console.log(product);
```
#### 프로토타입
- 모든 함수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을 때만 의미가 있음
```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
}
// 프로토타입에 메소드를 선언
Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
}
// 객체를 생성
let product = new Product("바나나", 1200);
console.log(product);
product.print();
```
#### null의 값과 자료형
- null의 자료형은 object
- 0 nan undefined " " -> false 실제로 값이 들어감
- 아예 값이 없는 상태를 구분할 때 null을 사용
### 표준 내장 객체
#### 기본 자료형과 객체 자료형의 차이
- 기본 자료형: 숫자, 문자열, 불
```javascript
let foo = false;
let bar = 123;

console.log(typeof foo); //boolean
console.log(typeof bar); //number
```
- 객체 숫자, 문자열, 불
```javascript
let number = new Number(273);
let string = new String("안녕");

console.log(typeof number); //object
console.log(typeof string); //object
```
- 차이점: 기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없음
```javascript
let foo = 273;
//메소드 추가
//프로토 타입에 메소드 추가해야 오류 안 남
Number.prototype.method = function () {
    return "hello"
}
console.log(foo.method());
```
#### Number 객체
- 자바스크립트에서 숫자를 표현할 때 사용
> toExponential(): 숫자를 지수 표시로 나타낸 문자열을 리턴
> toFixed(): 숫자를 고정소수점 표시로 나타낸 문자열을 리턴
> toPrecision(): 숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴
#### 생성자 함수의 속성
- 생성자 함수에 속성과 메소드 추가
```javascript
function Constructor() { }
Constructor.foo = 273;
Constructor.bar = function () {};

console.log(Constructor.foo);
console.log(Constructor.bar);
```
> MAX_VALUE, MIN_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY
#### String 객체 
```javascript
let foo = "abcdefg";
//자기 자신을 변경한 후 리턴
foo = foo.toUpperCase();
console.log(foo);
```
- 메소드 활용
```javascript
let foo = "좋은 아침입니다.";

if(foo.indexOf('아침') >= 0){
    console.log("좋은 아침이에요...!");
}
```
## [04월 27일]
### 오늘 배운 내용 요약
- 객체
### 여러 줄 요약
#### clearInterval(아이디)
- 특정 시간마다 실행하던 함수 호출 정지
```javascript
let foo = setInteerval(() => {console.log("인터벌 1초 경과")},1000)

setTimeout(() => {
    clearInterval(foo);
}, 3000)
```

#### 익명 함수와 선언적 함수의 생성 순서
- 변수는 마지막에 들어간 게 보존된다. -> 함수도 마찬가지
But, 선언적 함수는 코드를 실행하기 전에 생성됨
- let 키워드를 사용하면 선언적 함수와 동일한 이름의 변수를 생성할 수 없음

#### 익명 함수와 화살표 함수의 차이
- 익명함수 내부에서 this는 자바스크립트 최상위 객체 또는 외부에서 강제로 연결한 객체를 나타내고 화살표 함수 내부에서 this는 자기 자신과 관련된 것만을 나타냄
```javascript
let name = "dong"
foo = () => {
    let name = "synn";
    console.log(this.name);
};
// this는 synn
function () {
    console.log("this.name");
};
// this는 dong
foo();
```
### 객체
#### 객체 기본
- 배열과 거의 같음
```javascript
//객체 선언
let product = {
    제품명: '망고',
    유형: '당절임',
    원산지: '필리핀',
    price: 2000
    //JSON
};

console.log(product.price);//price만 출력

for (let key in product) {
    console.log(`${product}: ${foo[product]}`);
}
```

#### 속성과 메소드
- 요소: 배열 내부에 있는 값 하나하나
- 속성: 객체 내부에 있는 값 하나하나
- 객체의 다양한 자료형
```javascript
let object = {
    name = '바나나',
    price: 2000,
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        //print() 메소드
    }
};
```
- 자신이 가지고 있는 속성이라는 것을 표시할 때 this 키워드 사용
- JSON안에서 화살표 함수 사용 불가('undefined'가 나옴)
- this키워드 생략 불가

#### 생성자 함수와 프로토타입
- 배열과 객체를 사용하면 여러 개의 데이터를 쉽게 다룰 수 있음
- 객체 지향 프로그래밍
```javascript
let products = {
    {name: '바나나', price: 1200},
    {name: '사과', price: 2000}
};
```
#### 생성자 함수
- 객체를 만드는 함수
- 대문자로 시작하는 이름 사용
```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
}
// 객체를 생성
let product = new Product("바나나", 1200);
console.log(product);
```
#### 프로토타입
- 모든 함수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을 때만 의미가 있음
```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
}
// 프로토타입에 메소드를 선언
Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
}
// 객체를 생성
let product = new Product("바나나", 1200);
console.log(product);
product.print();
```

## [04월 13일]
### 오늘 배운 내용 요약
- 익명함수
- 선언적 함수
- 화살표 함수
- 함수의 기본 형태
- 함수의 기본 활용 형태
- 함수 매개 변수 초기화
- 콜백 함수
- 표준 내장 함수

### 여러 줄 요약
#### 익명함수
- 이름을 붙이지 않고 함수를 생성
> let <변수 이름> = function () {};

#### 선언적 함수
- 이름을 붙여 함수 생성
> function <함수 이름> () {}

#### 화살표 함수[ECMAScript6]
- 하나의 표현식을 리턴하는 함수를 만들 때는 중괄호 생략가능
> () => {}

```javascript
let foo = () => {
    console.log("첫 번째 줄");
    console.log("두 번째 줄");
};

foo();
console.log(foo);
```
#### 함수의 기본 형태
> function <함수 이름>(<매개 변수>) {
    <함수 코드>
    return <리턴 값>
}
```javascript
function power(x) {
    return x * x;
}

console.log(power(10));
```

#### 함수의 기본 활용 형태
>function (<매개 변수>, <매개 변수>){
>    let output = <초깃값>;
>    return output;
> }
```javascript
function foo(x) {
    let bar = x * x;
    return bar;
}

let foobar = foo(10);
console.log(foobar);
```

#### 함수 매개 변수 초기화
```javascript
function print(name, count) {
    if(!count){
        count = 1;
    }
    console.log(`${name}이 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과");
```

#### 콜백 함수
- 함수의 매개 변수로 전달되는 함수
```javascript
function callTenTimes(callback) {
    for(let i = 0; i < 10; i++){
        callback();
    }
}
callTenTimes(function() {
    console.log("함수 호출");
});
```
#### 숫자 변환 함수
- 뒤에 숫자로 변환할 수 없는 문자열이 있어도 문자열을 숫자로 변환할 수 있음
- 실수형을 정수형으로는 변환 X
> parseInt(), parseFloat()
- 진법 변환 가능
- 숫자 생성 방법과 진수

#### 타이머 함수
> setTimeout(함수, 시간) : 특정 시간 후에 함수를 실행
> setInterval(함수, 시간) : 특정 시간마다 함수를 실행(종료하고 싶을 때 Ctrl + C)
>clearInterval(아이디) : 특정 시간마다 실행하던 함수 호출을 정지

## [04월 06일]
### 오늘 배운 내용 요약
- 중첩 반복문 (별 출력)
- break 키워드
- continue 키워드
- push, pop, shift, concat, reverse, sort, slice, splice, join
- 스코프
- 호이스팅
- var 키워드

### 여러 줄 요약
` : 문자열과 변수를 같이 출력하고 싶을 때

#### 중첩 반복문
별 피라미드
```
let output = "";

for(let i = 0; i < 10; i++){
    for(let j = 0; j < i+1; j++){
        output += "*";
    }
    output += "\n";
}
console.log(output);
```
```
let output = "";

for(let i = 0; i < 10; i++){
    for(let j = 0; j < i+1; j++){
        output += "*";
    }
    output += "\n";
}
console.log(output);
```
그 외 4-8 참고

(html에서 link - ``` <script src=""></script> ```)

#### break 키워드
- switch 조건문이나 반복문을 벗어날 때 사용

#### continue 키워드
- 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행하게 함

#### push
- 배열의 끝에 원하는 값을 추가해주는 함수

#### pop
- 배열의 마지막 주소에 있는 값을 제거해주는 함수

#### shift
- 배열의 첫번째 주소에 있는 값을 제거한 후 변환해주는 함수

push와 pop은 stack
push와 shift는 queue

#### concat
- 두 개의 배열을 합쳐주는 함수

#### reverse
- 배열을 역순으로 재배치

#### sort
- 배열을 정렬

#### slice
- 원하는 만큼의 데이터를 뽑아 다른 곳에 사용할 수 있게 저장
- array.slice([시작 인덱스], [마지막 인덱스])
범위의 마지막 인덱스는 포함 X

#### splice
- 잘라냄
- array.splice([begin index], [delete Count], [add Item])

#### join
- 배열값들 사이에 원하는 문자를 삽입하여 반환

#### 스코프
- 변수를 사용할 수 있는 범위
- 스코프 == 블록

#### var 키워드
- let 키워드
- 익스플로러

## [03월 30일]
### 오늘 배운 내용 요약
- 중첩 조건문
- 논리 연산자와 조건문
- switch 조건문
- 삼항 연산자
- 조금 더 나아가기
- 반복문
- 배열
- while 반복문
- for 반복문
- for in 반복문과 for of 반복문

### 여러 줄 요약

#### 중첩 조건문
- 조건문 안에 조건문을 중첩해 사용하는 것

#### 논리 연산자와 조건문
>4.0과 4.5사이라면?
>4.0 <= score && score <= 4.5

#### switch 조건문

#### 삼항 연산자
> <불 표현식> ? <참> : <거짓>
- undefined인 상태라면 초기화
    >test = test ? test : "초기화";

#### 조금 더 나아가기
```
const repl = require('repl');

repl.start({
    prompt: "<입력 때 앞에 출력할 문자열> ",
    eval: (command, context, filename, callback) => {
        //입력을 받았을 때 처리를 수행

        //처리 완료

        callback;
    }
});
```

#### 반복문

#### 배열
let 이름 = [자료, 자료, 자료, 자료]

#### while 반복문
while(<불 표현식>){
    //불 표현식이 참인 동안 실행할 문장
}
- 반복의 횟수가 정해지지 않을 때

#### for 반복문
for(let i = 0; i < <반복 횟수>; i++){

}

#### for in 반복문과 for of 반복문
for(let 인덱스 in 배열){

}

for(let 요소 of 배열){

}
```
let array = ["사과", "배"];

for(let i in array){
    console.log(`${i}번째 요소: ${array[i]}`);
}
for(let item of array){
    console.log(item);
}
```

## [03월 23일]
### 오늘 배운 내용 요약
- 문자열
- 불
- 변수
- 자료형
- 상수
- 조건문

### 여러 줄 요약

#### 문자열
- 문자열 생성시 큰따옴표나 작은따옴표를 사용(일관되게 사용)
    - 이스케이프 문자
        \t , \n, \", \', \\
    - +: 문자열 연결 연산자
    - 문자열[숫자] : 문자 선택 연산자 (숫자는 0부터 시작)
    - 템플릿 문자열
        내부에 ${표현식}을 입력하면 표현식이 계산되어 문자열에 들어감
        
        >`올해는 ${new Date().getFullYear()}년입니다.`[4] >'2'
#### 불
- 참과 거짓: true 와 false
    >console.log("하마" < "가방")
    >false

- 논리 연산자 : !, ||, &&

#### 변수
- 값을 저장할 때 사용하는 식별자(모든 자료형 저장 가능)
변수 선언과 변수에 값을 할당
    >let pi; 
    >pi = 3.141592;
    >console.log(pi); 

#### 자료형 검사
- type of : 해당 변수의 자료형을 추출

#### undefined 자료형
- 변수를 선언했으나 초기화하지 않았을 때 나타남

#### 강제 자료형 변환
    >Number(), String(), Boolean()
    
-NaN(Not a Number)
- 숫자로 변환할 수 없는 문자열을 Number()함수로 변환하면 NaN 출력
- 숫자 자료형이지만 숫자가 아닌 것을 의미(표현 불가능한 수치형 결과를 나타낸 값)
- NaN은 무조건적으로 다름(자기 자신과 일치하지 않는 유일한 값) ->nan == nan이 false
- NaN인지 확인할 때는 isNaN()함수 사용
#### 자동 자료형 변환
- 숫자와 문자열에 '+'연산자를 적용하면 자동으로 숫자가 문자열로 변환
- 조건문의 표현식에 표현식을 넣을 때와 !연산자를 사용할 때 불 자료형으로 자동 변환
    - !!은 Boolean()함수를 사용하는 것과 같음

#### 일치 연산자
- 자료형과 값을 둘 다 비교
>=== 
>!==

#### 상수
- 항상 같은 수(변수와 반대)
- const: 상수를 만드는 키워드

#### if 조건문

#### if else 조건문
(hello.js 참고)

---
## [03월16일]
> 오늘 배운 내용 요약
> 여러줄 요약
> 3번

배운내용

<table>
</table>