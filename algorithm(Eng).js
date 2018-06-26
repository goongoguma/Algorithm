/******************************
* CODING CHALLENGE 1
*/

 /*
 Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula : 
 BMI = mass / height^2 = mass / (height * height).
 (mass in kg and height in meter).

 1. Store Mark's and John's mass and height in variables.  
 2. Calculate both thir BMIs
 3. Create a boolean variable containing information about wherther Mark has a height BMI than John.
 4. Print a string to the console containing the variable from step 3. ( Something like "Is Mark's BMI higher than John's? true").
 */

//  1. 
// var MarkMass = 70;
// var MarkHeight = 1.80;
// var JohnMass = 65;
// var JohnHeight = 1.70;

// 2.
// var MarkBMI = MarkMass / (MarkHeight*MarkHeight);
// console.log(MarkBMI)
// var JohnBMI = JohnMass / (JohnHeight*JohnHeight);
// console.log(JohnBMI)

//3. 
// var compare = MarkBMI > JohnBMI;
// console.log(compare);

//4. Is Mark's BMI higher than John's? true

// console.log('Is Mark\'s BMI higher than John\'s?+ '+ compare);


/******************************
* CODING CHALLENGE 2
*/

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
// While Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team.
// var TeamJohn = (89 + 120 + 103) / 3;
// var TeamMike = (116 + 94 + 123) / 3;
// console.log(TeamJohn);
// console.log(TeamMike);

/* 
var scoreJohn = ( 89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
*/

// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// if(TeamJohn > TeamMike){
//   console.log('John' + ' ' + TeamJohn);
// } else {
//   console.log('Mike'+ ' ' + TeamMike);
// }

// TeamJohn > TeamMike ? console.log('John'+ ' ' + TeamJohn) : console.log('Mike'+ ' ' + TeamMike)

   
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// if(TeamJohn > TeamMike){
//   console.log('John'+ ' ' + TeamJohn);
// } else if(TeamJohn == TeamMike) {
//   console.log('Draw');
// } else {
//   console.log('Mike'+ ' ' + TeamMike);
// }

/*
if (scoreJohn > scoreMike) {
  console.log(John + scoreJohn + ' points')
} else if (scoreMike > scoreJohn) {
  console.log(Mike + scoreMike + ' points')
} else {
  console.log('Draw');
}
*/

// 4. EXTRA : Mary also plays basketball and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
//    Hint : you will need the && operator to take the decision and change the scores to generate different winners, keeping in mind there might be draws.

/*
var TeamMary = (97 + 134 + 105) / 3
console.log(TeamMary);

if (TeamJohn > TeamMike && TeamJohn > TeamMary){
  console.log('John'+ ' ' + TeamJohn + ' points');
} else if (TeamMike > TeamJohn && TeamMike > TeamMary){
  console.log('Mike'+ ' ' + TeamMike + ' points');
} else if (TeamMary > TeamJohn && TeamMary > TeamMike) {
  console.log('Mary'+ ' ' + TeamMary + ' points');
} else {
  console.log('Draw');
}
*/


/******************************
* CODING CHALLENGE 3
*/

// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill 
// when the bill is less than $50, 15% when the bill is between $50 and $200 and 10% if the bill is more than $200.
 
//  function bill(payment){
//   if(payment < 50) {
//     return payment*.2;
//   } else if(50 <= payment <= 200) {
//     return payment*.15;
//   } else {
//     return  payment*.1;
//   }
// }
  
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
*/
// In the end, John would like to have 2 arrays:

// 1) Containing all three tips (one for each bill) 
    /*var payments = [124, 48, 268];
    var tips = [bill(payments[0]), bill(payments[1]), bill(payments[2])]
    console.log(tips);*/

    // 2) Containing all three final paid amounts (bill + tip)
    /*var finpayment = [payments[0] + tips[0], payments[1] + tips[1], payments[2] + tips[2] ]
    console.log(tips, finpayment);*/

    // (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)


/******************************
* CODING CHALLENGE 4
*/
// Let's remember the first coding challenge where Mark and John compared their BMIs.
// Let's now implement the same functionality with objects and methods.

// 1. For each of them, create an object with properties for their full name, mass and height
// var mark = {
//   FullName: 'Mark_Kim',
//   mass: 70,
//   height: 1.80
// }

// var john = {
//   FullName: 'John_Smith',
//   mass: 65,
//   height: 1.70
// }

// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it 
//    from the method.
// var mark = {
//   FullName: 'Mark Kim',
//   mass: 70,
//   height: 1.80,
//   calBMI : function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI
//   }
// };
// mark.calBMI();
// console.log(mark);

// var john = {
//   FullName: 'John Smith',
//   mass: 65,
//   height: 1.70,
//   calBMI : function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI
//   }
// }
// john.calBMI();
// console.log(john);

// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.
//    Don't forget they might have the same BMI.

// function highestBMI(A,B){
//   if(A > B) {
//     console.log(mark.FullName + ' BMI is ' + mark.BMI);
//   } else if(A < B){
//     console.log(john.FullName + ' BMI is ' + john.BMI);
//   } else {
//     console.log('They have the same BMI');
//   }
// }

// console.log(highestBMI(mark.BMI,john.BMI));

/* 
function highestBMI(A,B){
  if(A > B) {
    console.log(mark.FullName + ' BMI is ' + mark.BMI);
  } else if(A < B){
    console.log(john.FullName + ' BMI is ' + john.BMI);
  } else {
    console.log('They have the same BMI');
  }
}

console.log(highestBMI(mark.calBMI(),john.calBMI()));
*/

// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).





