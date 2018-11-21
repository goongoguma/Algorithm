### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
```js
function insensitive(str1, str2) {
  if(str1.toLowerCase() === str2.toLowerCase()) {
    return true
  } else {
    return false
  }
  return str1.toLowerCase() === str2.toLowerCase()
}
insensitive('hello','HeLlo')
```


### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```
```js
function lengthCompare(str, num) {
  if(str.length > num) {
    return str
  } else {
    return ' '.repeat(num - str.length) + str
  }
}
lengthCompare('hello', 8);
```


### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.
```js
// 내가 한 풀이
function vowel(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i]==='a') {
      count++
    } else if (str[i]==='e') {
      count ++
    } else if (str[i]==='i') {
      count ++
    } else if (str[i]==='o') {
      count ++
    } else if (str[i]==='u') {
      count ++
    }
  } 
  return count
}
vowel('hello');

// 강사님의 풀이
function vowel(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' ) {
      count++
    };
  }
  return count
}

vowel('hello')
```

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```
```js
function countChar(input) {
  const obj = {}
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    // 글자를 본적이 없다면 "글자": 1 을 적어준다.
    if ( !(char in obj) ) {
      obj[char] = 1
    } else {
      // 글자를 본적이 있다면 개수를 1 증가시켜준다.
      obj[char]++
    }
  }
  return obj
}
```
### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)
```js
function palindrome(str) {
  straightStr = [...str];
  reverseStr = [...str].reverse()
  for(let i = 0; i < str.length; i++) {
    if(straightStr[i]===reverseStr[i]) {
      return true
    } else {
      return false 
    }
  }
}
palindrome('never odd or even')

// 강사님의 풀이
const palindrome = (str) => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[str.length-1]) {
      return true
    } else {
      return false
    }
  }
}
palindrome('토마토마토마토'); 
```

### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```
```js
// 강사님의 풀이
const removeDuplicates = (input) => {
  let memory = '';
  for(let i = 0; i < input.length; i++) {
    if(!(memory.includes(input[i]))) {
      memory = memory + input[i]
    }
  } return memory
}
removeDuplicates('tomato')
```
### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.
```js
const idStars = (email) => {
  let emailSplit = email.split('@');
  let emailHead = '*'.repeat(emailSplit[0].length);
  let wholeEmail = emailHead + '@' + emailSplit[1];
  return wholeEmail;
}
idStars('abcdef@naver.com');
```
### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.
```js
// 루프로 돌면서 대문자는 소문자로 변환, 소문자는 대문자로 변환한 뒤에 빈 변수에 모두 합치기
swaptCase = (str) => {
  let container = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      container = container + str[i].toLowerCase()
    } else {
      container = container + str[i].toUpperCase()
    }
  } return container
}

swaptCase('hElLo')
```

### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
const headSwitch = (str) => {
 let strArr = str.split(' ');
 console.log(strArr)
 let container = '';
 for(let i = 0; i < strArr.length; i++) {
  container = container + strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1).toLowerCase() +  ' '
  containerNoBlank = container.trimRight();
 } return containerNoBlank
}
headSwitch('nice to meet you');
```
### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
const longest = (str) => {
  let strSplit = str.split(' ');
  strSort = strSplit.sort((x,y) => y.length - x.length);
  return strSort[0]
}
longest('happy birthday to you');

// 강사님의 풀이
// 한 글자씩 보면서 지금까지 봤던 단어중에 제일 긴 단어를 기억해둔다.
function longestWord(input) {
  let longest = ''; // 지금까지 봤던 단어 중에 제일 긴 단어
  let current = ''; // 내가 지금 보고 있는 단어
  // 한 글자씩 보기
  for(let i = 0; i < input.length; i++) {
    // 지금까지 보고 있는 글자가 공백이 아니면
    if(input[i] !== '') {
      current += input[i];
      if(current.length > longest.length) {
        longest = current 
      }
    } else {
      // 내가 지금 보고 있는 글자가 공백이면
      //current를 처음부터 다시 시작
      current = '';
    }
  }
  return longest
}
longestWord('hello javascript')
```

### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.
```js
const newChar = (str,n) => {
  let strArr = [...str]
  let strArrSplice = strArr.splice(0, n);
  return strArrSplice.join('')
}
newChar('javascript is fun', 5);

// 강사님의 풀이
function firstLetters(s, n) {
  let memory = '';
  for(let i = 0; i < s.length; i++) {
    memory += s[i]
    if(memory.length === n) {
      return memory
    } else if(memory.length < n) {
      return s
    }
  } 
}
firstLetters('hello', 8)
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
```js
// (중요)배열을 순회할 때, 순회중인 배열을 편집해서는 안된다!!
const caseSwitch = (str) => {
  let strArr = [...str];
  for(let i = 1; i < strArr.length; i++) {
    if(strArr[i] === strArr[i].toUpperCase()) {
     strArr.splice(i, 1, '_' + strArr[i].toLowerCase());
    } 
  } return strArr.join('')
}

caseSwitch('camelCaseSnakeCase');

// 강사님의 풀이
// 한 글자씩 보면서, 첫 글자가 아닌 대문자를 만났을 경우 바로 앞에 밑줄을 쳐준다. 
function toSnakeCase(input) {
  let memory = '';
  for(let i = 0; i < input.length; i++) {
    // 만약, 첫 글자가 아닌 대문자를 만났을 경우
    if(i !== 0 && (input[i].toUpperCase() === input[i])) {
      memory += '_'
    }
    memory += input[i].toLowerCase()
  } return memory
}
toSnakeCase('JavaScript')
```
### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```
```js
const splitStr = (str, x) => {
  let arr = [];
  let start = 0; // start는 if문을 다시 돌때 시작점을 지정해 주기 위한 변수
  for(let i = 0; i < str.length; i++) {
    if(str[i] === x) {
    // str[6] === 'o'
    // str[14] === 'o'
      arr.push(str.slice(start, i))
    // [].push(str.slice(0, 6 - 1))
    // [].push(str.slice(7, 14 - 1))
      start = i + 1 
    // start = 6 + 1
    // start = 14 + 1
    }
  } 
  arr.push(str.slice(start)); // 마지막 배열로 추가
  return arr
}
splitStr('nice to meet you', 'o');

// 강사님 풀이
function split(input, sep) {
  // 현재 보고 있는 단어
  let memory = '';
  let arr = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i] !== sep) {
      memory += input[i]
    } else {
      arr.push(memory)
      memory = ''
    }
  }
  arr.push(memory)
  return arr
}
split('hello,fun,javascript', ',')
```
### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
