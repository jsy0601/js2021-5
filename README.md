# 정서연 [202030428]
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