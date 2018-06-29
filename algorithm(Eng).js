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

 //1.
 var markMass = 70;
 var markHeight = 180;
 var johnMass = 90;
 var johnHeight = 185;

 //2.
 
 var markBMI = markMass / (markHeight * markHeight);
 console.log(markBMI);
 var johnBMI = johnMass / (johnHeight * johnHeight);
 console.log(johnBMI);

 //3.
 var compare = markBMI > johnBMI;
 console.log(compare);

 //4.
 console.log("Is Mark's BMI higher than John's?"+ ' ' + compare );
*/

/*********************************************************************************************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
While Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
4. EXTRA : Mary also plays basketball and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
Hint : you will need the && operator to take the decision and change the scores to generate different winners, keeping in mind there might be draws.

var johnAvg = (89+120+103) / 3;
var mikeAvg = (116+94+123) / 3;
var maryAvg = (97+134+105) / 3;
console.log(johnAvg);
console.log(mikeAvg);
console.log(maryAvg);

if(johnAvg > mikeAvg && johnAvg > maryAvg){
  console.log('John\'s team is the winner and the average is ' + johnAvg);
} else if(mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('mike\'s team is the winner and the average is ' + mikeAvg);
} else if(maryAvg > johnAvg && maryAvg > mikeAvg ) {
  console.log('mary\'s team is the winner and the average is ' + maryAvg);
} else {
  console.log('Match draw');
}
*/

/*********************************************************************************************
* CODING CHALLENGE 3
*/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill 
when the bill is less than $50, 15% when the bill is between $50 and $200 and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill) 
2) Containing all three final paid amounts (bill + tip)

johnbills = [124, 48, 268]
function tipCal(bills){
  if(bills < 50){
    return bills*.2
  } else if(bills >= 50 && bills <= 200){
    return bills*.15
  } else {
    return bills*.1
  }
}
tips = [tipCal(johnbills[0]), tipCal(johnbills[1]), tipCal(johnbills[2])]
finPay = [tips[0] + johnbills[0], tips[1] + johnbills[1], tips[2] + johnbills[2]]
console.log(tips, finPay);
*/

/*********************************************************************************************
* CODING CHALLENGE 4
*/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.
Don't forget they might have the same BMI.  

mark = {
   fullName : 'Mark Kim',
   bodyMass : 70,
   height : 180,
   BMICalc : function(){
    this.BMI = this.bodyMass / (this.height * this.height);
    return this.BMI
  }
 }
mark.BMICalc();
console.log(mark);

john = {
   fullName : 'John Smith',
   bodyMass : 90,
   height : 185,
   BMICalc : function(){
    this.BMI = this.bodyMass / (this.height * this.height);
    return this.BMI
 }
}
john.BMICalc();
console.log(john);

if(mark.BMI > john.BMI) {
  console.log("Mark has higher BMI than John has. Mark'\s BMI is "+mark.BMI);
} else if (mark.BMI < john.BMI){
  console.log("John has higher BMI than Mark has. Johan'\s BMI is "+john.BMI);
} else {
  console.log("They have same BMI");
}
*/

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
john = {
  fullName : 'John Kim',
  bills : [124, 48, 268, 180, 42],
  tipCalc : function(){
    this.tips = [];
    this.finPays = [];
    for(var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = percentage * this.bills[i];
    this.finPays[i] = this.tips[i] + this.bills;
    }
  }
}
 
mark = {
  fullName : "mark Kim",
  bills : [77, 375, 110, 45],
  tipCalc : function() {
    this.tips = [];
    this.finalPay = [];
    for(var i = 0; i < this.bills.length; i++) {
      var percentage;
      if(this.bills[i] < 100){
        percentage = .2;
      } else if(this.bills[i] >= 100 && this.bills[i] <= 300) {
        percentage = .15;
      } else {
        percentage = .1;
      }
    this.tips[i] = percentage * this.bills[i];
    this.finalPay[i] = this.tips[i] + this.bills[i];
    }
  }
}

john.tipCalc();
mark.tipCalc();
console.log(john,mark);

function avgCalc(tipsAvg){
var str = 0;
for(var i = 0; i < tipsAvg.length; i++){
  str = str + tipsAvg[i];
}
return str / tipsAvg.length
}

console.log(avgCalc(john.tips), avgCalc(mark.tips));
 
if(avgCalc(john.tips) > avgCalc(mark.tips)){
  console.log("john paid more tips");
} else {
  console.log("mark paid more tips ");
}
*/