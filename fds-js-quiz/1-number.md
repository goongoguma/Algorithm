### 문제 1

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.
```js
function larger(x, y) {
  const a = x;
  const b = y;
  let c;

  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.

  if(a > b) {
    c = a;
  } else {
    c = b;
  }
  return c
}
```
```js
function larger(x, y) {
  let c;

  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.

  if(x > y) {
    c = x;
  } else {
    c = y;
  }
  return c
}

larger(3,2);
```
```js
function larger(x, y) {
  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.
  if(x > y) {
    return x
  } else {
    return y
  }
}

larger(3,2);
```

### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

에러를 발생시키는 코드는 다음과 같습니다.
throw new Error('입력값이 잘못되었습니다.')

```js
function isPositive(x, y, z) {
  if(x * y * z > 0) {
    return true
  } else if(x * y * z <= 0) {
    return false
  } else {
    throw new Error('입력값이 잘못되었습니다.')
  }
}

console.log(isPositive(1, 2, 3))
console.log(isPositive(1, 2, -3))
console.log(isPositive(1, 2, 'haha'))
```

### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:
```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3
```
```js
function compare(min, max, input) {
  if(min > input) {
    return min
  } else if(max < input) {
    return max
  } else {
    return input
  }
};
```

### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.
```js
for(let i = 1; i <= 100; i++) {
  if(i%15 === 0 ) {
    console.log(`${i}:공배수`)
  } else {
    console.log(`${i}:아님`)
  }
}
```

 ### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.
```js
function divisor(num) {
  for(var i = 1; i <= num; i++) {
    if(num%i===0) {
      console.log(`${i}: 약수`);
    } else {
      console.log(`${i}: 아님`)
    }
  }
}
divisor(12);
```

 ### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.
```js 
function IsPrime(n) {
  if(n === 1) {
    return false
  } else if(n === 2) {
    return true
  } else {
    for(let i = 2; i < n; i++) {
      if(n % i === 0) {
        return false
      }
    }
  }
  return true
}
IsPrime(7)

// 강사님의 풀이
function isPrim(x) {
  // 1과 자기자신이 아닌 약수가 하나라도 있으면 소수가 아니다.
  for(let i = 2; i < x; i++) {
    if(x % i === 0) {
      return false
    }
  }
  return true
}
isPrim()
```


 ### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.
```js
for(var i = 1; i <= 100; i++) {
  if(str.includes(3) || str.includes(6) || str.includes(9))) {
    console.log(`${i}:짝`);
  } else {
    console.log(`${i}:`);
  }
}
```
 ### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1을 입력받은 경우:
```
*
```

3을 입력받은 경우:
```
*
* *
* * *
```

5를 입력받은 경우:
```
*
* *
* * *
* * * *
* * * * *
```
``` js
function displayStars(n) {
let str ='';
  for(let i = 1; i <= n; i++) {
  str = str + '*';
 }
 console.log(str);
}
```
```js
function displayStars(n){
let str = '';
for(let i = 0; i < n; i++) {
  for(let j = 0; j <= i; j++) {
    str = str + '*';
  } str = str + '\n';
 } console.log(str)
}
displayStars(5)
```
```js
// reverse
function displayStarsReverse(n){
let str = '';
for(let i = n; 0 <= i; i--) {
  for(let j = 0; 0 <= i-j; j++) {
    str = str + '*'; 
  } str = str + '\n';
 } console.log(str);
}
displayStarsReverse(5)
```
```js
// 피라미드
function pyramid(n) {
  let str = '';
  for(let x = 0; x < n; x++) {
    for(let y = n; 0 < y-x; y--) {
      str = str + ' ';
    } 
    for(let z = 0; z <= x; z++) {
      str = str + ' *';
    } str = str + '\n';
  } console.log(str)
}
pyramid(5);
```
```js
// 역피라미드
function reversePyramid(n) {
  let str ='';
  for(let x = 0; x < n; x++) {
    for(let y = 0; y < x; y++) {
      str = str + ' ';
    }
    for(let z = n; 0 < z-x; z--) {
      str = str + ' *';
    } str = str + '\n';
  } console.log(str);
}
reversePyramid(5);
```
```js
// 강사님의 풀이
function print(height) {
  for(let i = 0; i < height; i++) {
    // 한 줄 출력
    let stars = ''
    for(let j = 0; j < i + 1; j++) {
    // 별표 하나를 출력 
    stars += '*'
    }
    console.log(stars);
  }
}

function print(height) {
  for(let i = 0; i < height; i++) {
    const stars = '* '.repeat(i + 1);
    console.log(stars)
  }
}
print(5)
```
 ### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1를 입력받은 경우:
```
*
```

3를 입력받은 경우:
```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:
```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```
```js
function diamond(n) {
let str = '';
  for(let x = 0; x < n; x++) {
    for(let y = n; 0 < y-x; y--) {
      str = str + ' ';
    } 
    for(let z = 0; z <= x; z++) {
      str = str + ' *';
    } str = str + '\n';
  } 
  for(let x = 0; x < n; x++) {
    for(let y = 0; y < x+2; y++) {
      str = str + ' ';
    }
    for(let z = n; 0 < z-x-1; z--) {
      str = str + ' *';
    } str = str + '\n';
  } 
  console.log(str);
}
diamond(5)

// 강사님의 풀이
function printLine(height, i) {
  const n = i + 1;
  const line = ' '.repeat(height - n) + '* '.repeat(n);
  console.log(line)
}
function print(height) {
  for(let i = 0; i < height; i++) {
    printLine(height, i)
  }
  for(let i = height - 2; i >= 0; i--) {
    printLine(height, i)
  }
}
print(3); 
```

 ### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

 ### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

 ### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요. 
