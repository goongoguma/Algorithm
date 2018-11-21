문제 1. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
max([3, 1, 4, 5, 2]) // -> 5

const biggest = (arr) => {
  let conArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i-1] < arr[i]) {
      conArr.push(arr[i])
    } 
  } return conArr[conArr.length-1]
}
biggest([7,15,9,20,12]);
```


---

문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

```js
function max(arr) {
  // reduce를 쓸 때
  // '누적값의 역할'이 무엇인지 잘 정하는 것이 중요하다.
  // 누적값: 지금까지 봤던 숫자 중에 제일 큰 수
  return arr.reduce((acc, item) => {
    // 안에 들어있는 함수의 반환값이, 다음단계의 누적값이 된다. 
    if(acc > item) {
      return acc 
    } else {
      return item
    }
  }, -Infinity) // -infinity로 어떤 음수가 와도 아무런 문제없이 최대값을 구할 수 있다. 
}
max([3,1,4,5,2])

```

---

문제 3. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```js
const flatten = (arr) => {
  return String(arr).split(',').map(Number)
}
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])


const flatten = (arr) => {
  container = []
  flatReduce = arr.reduce((acc, item) => acc + item) // 1,2,34,5,67,8,9 (초기값은 안줌)
  flatReduceArr = flatReduce.split('') // [ '1', ',', '2', ',', '3', '4', ',', '5', ',', '6', '7', ',', '8', ',', '9' ]
  for(let i = 0; i < flatReduceArr.length; i++) {
    if(!(flatReduceArr[i] === ',')) {
      container.push(flatReduceArr[i]) // [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
    }
  } return container.map(Number)
}
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```
---

문제 4. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)
```js
const flatten = (arr) => {
  container = []
  flatReduce = arr.reduce((acc, item) => acc + item)
  flatReduceArr = flatReduce.split('')
  for(let i = 0; i < flatReduceArr.length; i++) {
    if(!(flatReduceArr[i] === ',')) {
      container.push(flatReduceArr[i])
    }
  } return container.map(Number)
}
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

// 강사님의 풀이
function flatten(arr) {
  // 누적값: 지금까지 본 배열이 다 이어붙여진 새 배열
  return arr.reduce((acc, innerArr) => acc.concat(innerArr), [])
}
function flatten(arr) {
  return arr.reduce((acc, item) => [...acc, ...item], [])
  // return arr.reduce((acc, item) => acc.concat(item), [])
}

flatten(arr)
flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
```

---

문제 5. (3 * 3) 빙고 판이 배열에 저장되어 있습니다. 빙고인 경우 `true`, 아니면 `false`를 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 칸이 채워져 있는 경우는 1로 표현합니다.)

예:

```js
bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> false

bingo([
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> true

bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1]
]) // -> true
```
```js
const bingo = (arr) => {
  let start = [];
  let start2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].reduce((acc, item) => acc + item, 0) === 3) {
        return true
      }
    }
  } 
  for(let i = 0; i < arr.length; i++) {
    let checked = true;
    for(let j = 0; j <arr.length; j++) {
      if(arr[j][i] === 0) {
        checked = false
      }
    } if(checked) {
      return true
    }
  }
  for(let i = 0; i < arr.length; i++) {
    start = start + arr[i][i];
    if(start === '111') {
      return true
    }
  }
  for(let i = 0; i < arr.length; i++) {
    start2 = start2 + arr[2-i][i];
    if(start === '111') {
      return true
    }
  }
  return false
}
bingo([[1, 0, 1],
       [0, 1, 0],
       [1, 0, 1]])

// 강사님 풀이
function bingo(arr) {
  // 가로로 같을 때
  // 한줄 한줄 보는 작업
  for (let i = 0; i < 3; i++) {
    // 내가 지금까지 본 것이 모두 1이면 true, 아니면 false 
    let checked = true;
    // 한칸 한칸 보는 작업
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === 0) {
        checked = false;
      }
    }
    // 한 줄을 다 봤는데도 checked가 true이면 빙고!
    if (checked) {
      return true
    }
  }
  // const horizontal = arr.some(
  //   innerArr => innerArr.every(item => item ===1)
  // )
  // 세로로 같을 때
  for (let i = 0; i < 3; i++) {
    let checked = true;
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] === 0) {
        checked = false;
      }
    }
    if (checked) {
      return true
    }
  }
  // 왼쪽 대각선으로 같을 때
  for (let i = 0; i < 3; i++) {
    let checked = true;
    if (arr[j][j] === 0) {
      checked = false;
    }
    if (checked) {
      return true
    }
  }
  // 오른쪽 대각선으로 같을 때
  for (let i = 0; i < 3; i++) {
    let checked2 = true; // 반대방향 대각선의 중복을 막기위해 checked2 선언
    if (arr[j][2-j] === 0) {
      checked2 = false;
    }
    if (checked2) {
      return true
    }
  }
  return false
}

bingo([
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 0]
])
```
---

문제 6. (9 * 9) 오목 판이 배열에 저장되어 있습니다. 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

예:

```js
omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]) // -> 0

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]) // -> 2
```

```js
const omok = (arr) => {
  let container = '';
  let container2 = '';
  let container3 = '';
  let counter
  let currentPlayer
  // 가로
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      container = container + arr[i] + arr[j];
      if (container.includes('1,1,1,1,1')) {
        return 1
      } else if (container.includes('2,2,2,2,2')) {
        return 2
      }
    }
  }

  // 왼쪽 대각선
  for (let i = 0; i < arr.length; i++) {
    container2 = container2 + arr[i][i]
    if (container2.includes('11111')) {
      return 1
    } else if (container2.includes('22222')) {
      return 2
    }
  }

  // 오른쪽 대각선 
  for (let i = 0; i < arr.length; i++) {
    container3 = container3 + arr[i][(arr.length - 1) - i]
    if (container3.includes('11111')) {
      return 1
    } else if (container3.includes('22222')) {
      return 2
    }
  }
  // 세로
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (currentPlayer !== arr[j][i]) {
        currentPlayer = arr[j][i];
        count = 1;
      } else {
        count++
      }
      if ((currentPlayer === 1 && count === 5) || (currentPlayer === 2 && count === 5)) {
        return currentPlayer
      }
    }
  }
}

// 강사님의 풀이
// 가로방향으로만 한번 만들어보기 
// 한칸한칸 가면서 무엇을 봤는지 기억해두는게 중요
// 내가 본 플레이어가 몇번 연속해서 놓여져있는지? 
const omok = (arr) => {
  let currentPlayer
  let count
  // 가로
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 새로운 플레이어를 발견했을 때
      if (currentPlayer !== arr[i][j]) {
        currentPlayer = arr[i][j];
        count = 1;
      } else {
        count++
      }
      // 만약 1이나 2가 5번 연속되어 있으면
      if ((currentPlayer === 1 && count === 5) || (currentPlayer === 2 && count === 5)) {
        return currentPlayer
      }
    }
  }
  // 세로
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (currentPlayer !== arr[j][i]) {
        currentPlayer = arr[j][i];
        count = 1;
      } else {
        count++
      }
      if ((currentPlayer === 1 && count === 5) || (currentPlayer === 2 && count === 5)) {
        return currentPlayer
      }
    }
  }
  // 왼쪽 대각선
  for (let i = 0; i < arr.length; i++) {
    if (currentPlayer !== arr[i][i]) {
      currentPlayer = arr[i][i]
      count = 1;
    } else {
      count++
    }
    if ((currentPlayer === 1 && count === 5) || (currentPlayer === 2 && count === 5)) {
      return currentPlayer
    }
  }

  //오른쪽 대각선
  for (let i = 0; i < arr.length; i++) {
    if (currentPlayer !== arr[i][8 - i]) {
      currentPlayer = arr[i][8 - i]
      count = 1;
    } else {
      count++
    }
    if ((currentPlayer === 1 && count === 5) || (currentPlayer === 2 && count === 5)) {
      return currentPlayer
    }
  }
}

```
---

문제 7. 배열을 입력받아 있는 요소 중 아무거나 하나를 골라서 반환하는 함수를 작성하세요.

예:

```js
randomItem([1, 2, 3, 4, 5]) // 1, 2, 3, 4, 5 중 아무거나 반환
```
```js
const randomItem = (arr) => {
  return arr[Math.floor(Math.random()*arr.length-1)+1]
}
randomItem([1,2,3,4,5])
```
---

문제 8. 배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요. (단, 원본 배열이 변경되어서는 안 됩니다.)

예:

```js
shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 5, 2] 와 같이 순서가 뒤섞인 새 배열 반환
```
```js
const shuffle = (arr) => {
  arrCopy = arr.slice(0);
  for(let i = arrCopy.length-1; 0 < i; i--) {
    let j = Math.floor(Math.random() * i ) + 1;
    let temp = arrCopy[i];
    arrCopy[i] = arrCopy[j];
    arrCopy[j] = temp
  }
  return arrCopy;
}
shuffle([1,2,3,4,5])
```