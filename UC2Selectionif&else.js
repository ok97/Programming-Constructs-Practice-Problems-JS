/* Selection Practice Problems with if & else */

/* UC1:- Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.

*/

var numArray = [0, 0, 0, 0, 0];
for (let i = 0; i < 5; i++) 
{
    numArray[i] = Math.floor(Math.random() * 1000);
    console.log(numArray[i]);
}
//Find the minimum and the maximum value.
let MaximumNumber = numArray[0];
let MinimumNumber = numArray[0];
for (let i = 0; i < 5; i++) 
{
    if (numArray[i] > MaximumNumber) 
    {
        MaximumNumber = numArray[i];
    }
    if (numArray[i] < MinimumNumber) 
    {
        MinimumNumber = numArray[i];
    }
}
console.log("Minimum Number:- " + MinimumNumber);
console.log("Maximum Number:- " + MaximumNumber);

/* UC2:- Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.*/


/* UC3:- Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
         A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
*/
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline. year('Enter a year:-');*/



// take input

//read line sync use take input user
var readlineSync = require('readline-sync');
var year = readlineSync.questionInt('Enter year:- ');


function checkLeapYear(year) 
{

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        console.log(year + ' is a leap year');
    } else 
    {
        console.log(year + ' is not a leap year');
    }
}



