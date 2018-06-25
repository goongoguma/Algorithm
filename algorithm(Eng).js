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
