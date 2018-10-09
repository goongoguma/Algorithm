### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.
```js
const circle = (radius) => {
 return radius * 2 * Math.PI
}
circle(6)
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.
```js
const twoNums = (min, max) => {
for(let i = min; i < max; i++) {
  console.log(i)
 }
}
twoNums(3, 10)

```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```
```js
const ceilBy5 = (num) => {
  return Math.ceil(num/5)*5
}
ceilBy5(37)
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
//(Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffle([1,2,3,4,5])
```
### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
```js
const ranCol = (a,b,c) => {
a = Math.floor(Math.random()*255);
b = Math.floor(Math.random()*255);
c = Math.floor(Math.random()*255);
return 'rgba' + '(' + a +',' + b + ','+ c +')'
}
ranCol()
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.
```js
// toString() 메서드는 string뿐만 아니라 Math에서도 메서드가 있다 
const randomStr = (num) => {
  let random = Math.random().toString(36).substring(2, num+2)
  return random
}
randomStr(7)
```
### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.
```js
function stdDev(arr) {
  // arr의 평균 구하기
  const sum = arr.reduce((acc, item) => acc + item, 0);
  const mean = sum / arr.length;
  console.log(mean)
  // 각 요소에 대한 편차 구하기 (편차 = 값 - 평균)
  const ps = arr.map(item => item - mean);
  console.log(`ps: ${ps}`);
  // 각 요소에 대해 제곱하기
  const psmulti = ps.map(item => item ** 2);
  // 위 제곱한 배열의 평균 구하기
   // reduce의 특징은 반환값을 다음의 누적값을 사용
  const abc = psmulti.reduce((acc, item) => acc + item, 0) / psmulti.length;
  // 루트 씌우기 
  return Math.sqrt(abc) // 루트 abc
}

stdDev([1, 2, 3, 4, 5])
```
