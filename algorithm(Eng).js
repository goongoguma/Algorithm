/*********************************************************************************************
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


/*********************************************************************************************
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


/*********************************************************************************************
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
  

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }

// In the end, John would like to have 2 arrays:

// 1) Containing all three tips (one for each bill) 
    // var payments = [124, 48, 268];
    // var tips = [tipCalculator(payments[0]), tipCalculator(payments[1]), tipCalculator(payments[2])]
    // console.log(tips);

    // 2) Containing all three final paid amounts (bill + tip)
    // var finpayment = [payments[0] + tips[0], payments[1] + tips[1], payments[2] + tips[2] ]
    // console.log(tips, finpayment);

    // (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)


/*********************************************************************************************
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


/*********************************************************************************************
* CODING CHALLENGE 5
*/


// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned.

// This time, John and his family went to 5 different resturants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200 and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:

// 1. Create an object with an array for the bill values


// 2. Add a method to calculate the tip

       
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations


// 4. As an output, create

// 1) A new array containing all tips and 

// 2) An array containing final paid amounts (bill + tip).
/*
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function(){
      this.tips = [];
      this.finalvalues = [];

      for (var i = 0; i < this.bills.length; i++){
        // Determine percentage based on tipping rules
        var percentage;
        if(this.bills[i] < 50){
          percentage = .2;
        } else if (this.bills[i] >= 50 && this.bills[i] < 200){
          percentage = .15;
        } else {
          percentage = .1;
        }
        
        // Add results to the corresponding arrays

        this.tips[i] = this.bills[i] * percentage;
        this.finalValues[i] = this.bills[i] + this.tips[i];

      }
  }
}
*/
// HINT : Start with two empty arrays [] as properties and then fill them up in the loop.


// EXTRA AFTER FINISHING: 
// Mark's family also went on a holiday, going to 4 different restuarants. The bills were $77, $375, $110 and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300 and 25% if the bill is more than $300
// (different than John).

// 5. Implement the same functionality as before, this time using Mark's tipping rules

// 6. Create a function (not a method) to calculate the average of a given array of tips. 
//    HINT: Loop over the array and in each iteration store the current sum in a variable(starting from 0). After you have the sum of the array,
//    divide it by the number of elements in it (that's how you calculate the average)

// 7. Calculate the average tip for each family

// 8. Log to the console which family paid the highest tips on average 
/*
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalvalues = [];
  
        for (var i = 0; i < this.bills.length; i++){
          // Determine percentage based on tipping rules
          var percentage;
          if(this.bills[i] < 100){
            percentage = .2;
          } else if (this.bills[i] >= 100 && this.bills[i] < 300){
            percentage = .1;
          } else {
            percentage = .25;
          }
          
          // Add results to the corresponding arrays
  
          this.tips[i] = this.bills[i] * percentage;
          this.finalValues[i] = this.bills[i] + this.tips[i];
  
      }
    }
  }

function calcAverage(tips) {
  var sum = 0;
  for(var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}


// Do the calculations
  john.calcTips();
  mark.calcTips();
  console.log(john,mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john,mark);

if(john.averag > mark.average) {
  console.log(john.fullName + ' s family pays higher tips, with an average of $'+john.average);
} else if (john.averag < mark.average){
  console.log(mark.fullName + ' s family pays higher tips, with an average of $'+mark.average);
}
*/





