/* Sequence Practice Problems Use Cases*/ 
/* 
UC1:- Random Function Math.floor(Math.random() * 10); to get Single Digit.
*/
let Random_number= Math.floor(Math.random() * 10); // let let allows you to declare variables that are limited to the scope of a block statement
console.log(Random_number); // Print Random number

/* UC2:- Use Random to get Dice Number between 1 to 6 */

let Dice_Number=Math.floor(Math.random()*6)+1;  //Dice Number between 1 to 6
console.log(Dice_Number ); //print Dice Number 

/* UC3:- Add two Random Dice Number and Print the Result */

let Dice_Number1=Math.floor(Math.random()*6)+1;  //Dice Number between 1 to 6
console.log(Dice_Number1 ); //print Dice Number 
let Dice_Number2=Math.floor(Math.random()*6)+1;  //Dice Number between 1 to 6
console.log(Dice_Number2 ); //print Dice Number 
console.log("Sum of Two Random Dice Number:- "+(Dice_Number1+Dice_Number2)); //sum of two random number print

/* UC4:- Use Script & Debug
         – Write a program that reads 5 Random 2 Digit values , 
         then find their sum and the average.
*/

Random_Number=[];
Sum=0;
for (let i = 0; i <5; i++)
{
    Random_number[i]=Math.floor(Math.random()*99);
    console.log(Random_number[i]);
    Sum+=Random_number=[i];
    
}  // finding sum and average 
console.log(Sum);
Average=Sum/5;
console.log("Average:- "+Average/5); //print average


/* UC5:- Use Script & Debug – Unit Conversion .
         a. 1ft = 12 in then 42 in = ? ft 
         b. Rectangular Plot of 60 feet x 40 feet in meters
         c. Calculate area of 25 such plots in acres
*/
//a. Conversion inch to feet.
const FEET_IN_INCH=12;
let numberOfInch=42;
let conversionRatio = 1/FEET_IN_INCH;
let numberOfFeet= numberOfInch*conversionRatio;
console.log("Number of feet:- "+numberOfFeet);
//b. Rectangular Plot of 60 feet x 40 feet in meters.
let areaInFeet =2400;
const FEETSQ_TO_METERSQ = 0.3048*0.3048;
let areaInMeters = parseInt(areaInFeet*FEETSQ_TO_METERSQ);
console.log("Area in meters:- " + areaInMeters);
//c. Calculating area of 25 such plots.
let area = areaInMeters*25;
console.log("Area in meters  for 25 plots:- "+area);
