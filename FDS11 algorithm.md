### 문제 1 
- 두 수 x, y를 입력받아 큰 수를 반환하는 함수(larger)를 작성하세요.
```
const larger = (a,b) => a>b ? a:b
larger(4, 12);
```

### 문제 2 
- 세 수 x, y, z를 입력받아 그 곱이 양수이면 true, 0 혹은 음수이면 false, 둘 다 아니면 에러를 발생시키는 함수(isPositive)를 작성하세요.
```
const isPositive = (x, y, z) => x*y*z ? (x*y*z > 0 ? true : false) : '에러: Error: 입력값이 잘못되었습니다.'
isPositive(1,2,3);
```

### 문제 3 
- 어떤 숫자(num)가 짝수인지 홀수인지 출력하는 함수(printEvenOdd)를 작성하세요.
```
const printEvenOdd = (num) => num%2===0 ? `${num}:짝수` : `${num}:홀수`
printEvenOdd(3);
```

### 문제 3-1
- 문제 3번의 함수(printEvenOdd)를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 함수(printEvenOdd20)를 작성하세요.
```
printEvenOdd20 = () => {
  for(let i = 1; i < 21; i++) {
    if(i%2===0) {
      console.log(`${i}:짝수`);
    } else {
      console.log(`${i}:홀수`);
    }
  };
};
printEvenOdd20()
```

### 문제 4
- 세 수를 입력받아 큰 것부터 차례대로 출력하는 함수(printLargerFirst)를 작성하세요.
```
const printLargerFirst = (a,b,c) => {
  compareNumbers = (a,b) => b-a;
  const numbers = [a,b,c];
  const numArray = numbers.sort(compareNumbers);
  console.log (numArray);
}
printLargerFirst(5, 15, -2);
```

### 문제 5
- 두 문자열 str1, str2를 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수(insensitiveEqual)를 작성하세요.
```
const insensitiveEqual = (str1, str2) => {
  if(str1.toUpperCase() === str2.toUpperCase()) {
    return true
  } else {
    return false
  };
};
insensitiveEqual('hello', 'Hello');
```

### 문제 6
- 이메일 주소를 입력받아, 아이디 부분을 별표(*)로 가린 새 문자열을 반환하는 함수(hideId)를 작성하세요.
```
hideId = (email) => {
  const beforeDomain = /.+(?=.*@)/g
  const obscuredAddress = email.replace(beforeDomain, '*');
  return obscuredAddress
}
hideId('abcdefg@gmail.com'); 
```
```
const hideId = (email) => {
  const splitEmail = email.split('@');
  const EmailId = splitEmail[0];
  const splitEmailId = EmailId.split('');
  const makeStars = Array(splitEmailId.length+1).join('*')
  const starsEmail = makeStars + '@' + splitEmail[1];
  return starsEmail
}

hideId('abcdefg@gmail.com')
```


### 문제 7
- 숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수(insertHyphen)를 작성하세요.
```
function insertHyphen(str) {
  var strArr = str.split('');
  var numArr = strArr.map(Number);
  for(var i = 0; i < numArr.length; i++) {
    if(numArr[i-1]%2===0 && numArr[i]%2===0) {
        numArr.splice(i, 0, '-');
    }
  }
  return numArr.join('');
}
insertHyphen('112233445566');
```

### 문제 8
- 두 정수 start, end를 입력받아, start부터 end까지의 모든 정수를 배열로 반환하는 함수(range)를 작성하세요.
```
const range = (start, end) => {
  let arr = [];
  for(let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr
}
range(3,7);
```

### 문제 9
- 수 타입의 값으로만 이루어진 배열 arr를 입력받아, 그 값들의 합을 구하는 함수(sum)를 작성하세요.
```
const sum = (arr) => {
  const reducers = (acc, cur) => acc + cur;
  console.log(arr.reduce(reducers))
}
sum([1,2,3])
```

### 문제 10
- 정수 min, max 를 입력받아, min 이상 max 미만인 임의의 정수를 반환하는 함수(randomInteger)를 작성하세요.
```
const randomInteger = (min, max) => {
  for(let i = min; i < max; i++) {
    return Math.floor(Math.random()*max)
  }
}
randomInteger(1,7);
```