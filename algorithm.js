//1.for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for(var i=0; i<10; i++){
//   var str=''
//   if(i%2===0){
//     str=str+i;
//   }
//   console.log(str);
// }


//2.for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// for (var i=0; i<10; i++){
//   var str='';
//   if(i%2===0) {
//     str += i; //str=str+i
//   }
// }
// console.log(str);

//3.for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

// for(var i=10; i>0; i--){
//   var str='';
//   if(i%2===1){
//     str=str+i;
//   }
//   console.log(str);
// }

// 6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
// var str=0;
// for(var i=0; i<10; i++){
//   str=i+str;
// }
// console.log(str);

//7.1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// var str=0;  
// for(i=1; i<=20; i++){
//   if(i%2!==0 && i%3!==0){
//     str=str+i;
//   }
//    }
//    console.log(str);
   
//8.1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.  
    // var str=0;
    // for(i=1; i<=20; i++){
    //   if(i%2===0 || i%3===0){
    //   str=str+i;
    //  }
    // }
    // console.log(str);

//9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
   
 
// for(var i=1; i<=6; i++){
//   for(var a=6; a>0; a--){
//     if(i+a===6){
//       console.log(i,a);
//     }
//   }
// }
     
// 10. 삼각형출력하기
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

//  var str='';
//  var star='*';
   
//  for(var i=1; i<=5; i++){
//  var str=str+star;
//  console.log(str+'\n');}
     
// 11.  evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 'Even'을 반환하고
// 홀수인 경우 'Odd'를 반환하도록 evenOrOdd에 코드를 작성하라.
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다. 

// function evenOrOdd(num){
//   if(num%2===0){
//     return 'Even'; /*return의 값은 어디에 담아서 쓰기*/ 
//   }
//   else{
//     return 'Odd';
//   }
// }
// console.log(evenOrOdd(7))

//3항연산자 사용
// function evenOrOdd(num){
//  return (num%2===0) ? "Even" : "Odd";
// }
// console.log(evenOrOdd(52)); //Even

// 12. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
//  예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다

// function alphaString46(s){
//   // console.log(isNaN('1234')); //false
//   // console.log(isNaN('a234')); //true
//   // s가 undefined이면 false를 반환을 구현하기
//   if(!s) return false; 
//   if ((s.length>=4 && s.length<=6)&&!isNaN(s)){
//       return true;
//   } else{
//     return false;
//   }
// }
// console.log(alphaString46('1234123456')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723'));  // false
// console.log(alphaString46('a234')); // false
// console.log(alphaString46(''));     // false
// console.log(alphaString46());       // false

// 13. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
// 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

// function numPY(s) {
//   var p = 0;
//   var y = 0;
//   if(s === undefined) return true; 
//   for(var i=0; i<s.toLowerCase().length; i++){
//     if(s[i] === 'p') {  
//       p++;
//     } else if(s[i] === 'y') {
//       y++;
//     }
//   }
//     if(p===y){
//       return true;
//     } else{
//       return false;
//     }
       
//    }
//   console.log(numPY('pPoooY')); // true
//   console.log(numPY('Pyy'));     // false
//   console.log(numPY('ab'));      // true
//   console.log(numPY(''));        // true
//   console.log(numPY());          // true

// 14. 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *로 바꿔야한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라. 예를들어 s가 '01033334444'면 *******4444를 리턴하고
// '027778888'인 경우는 ******8888을 리턴한다. 

// function hideNumbers(str){ 
//  var len = str.length - 4;  
//  var star = '';
//  for(var i=0; i<len; i++){
//   star +='*'; // star = star + '*'
//  } 
//  console.log(star);

//  var last4 = str.substring(len)
//  console.log(last4);

//  return star + last4;
// }

// console.log(hideNumbers('01033334444')); // *******4444
// console.log(hideNumbers('027778888')); // *****8888

//  15. 이상한 문자만들기
// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.
// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

/* wrong answer */
// function toWeirdCase(s){
//  var str = s.split(''); // var str = {'h','e','l','l','o'}
//  for(var i = 0; i<str.length; i++){
//     if(str.length[i]%2===0){ // str.length is 5 and 5[i]%2===0?? does not make sense. it is never be true
//         return str.toUpperCase(); // str is an array which means it does not have toUpperCase method
//     }
//    }
//   }
// console.log(toWeirdCase('hello'))

/* right answer */
// function toWeirdCase(s){
//  var str = s.split('');
//  for(var i = 0; i<str.length; i++){
//     if(i%2!==0){ 
//         str[i]=str[i].toUpperCase();
//     }
//    }
//    return str.join('');
// }
// console.log(toWeirdCase('hello world'))


// 16. strTolnt 메소드는 문자열 str을 매개변수로 받는다. str을 숫자로 변환한 결과를 반환하도록 strTolnt를 작성하라
// 예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. str은 부호(+,-)와 숫자로만 구성되어 있고
// 잘못된 값이 입력되는 경우는 없다. 

// function strTolnt(str){
// var res = str.substring(0);
// return res;
// }
// console.log(strTolnt('1234'));
// console.log(strTolnt('-1234'));

