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
{var enteredDate=new Date();
//read line sync use take input user
var readlineSync = require('readline-sync');
//Taking input from user
var year = readlineSync.question('Enter year:- '); //Take input from user
var month = readlineSync.question('Enter Month:- '); //Take input from user
var date = readlineSync.question('Enter Date:- '); //Take input from user
enteredDate.setFullYear(year,month,date);
var date1 = new Date();
var date2 = new Date();
date1.setFullYear(year,3,20);
date2.setFullYear(year,6,20);
// Comparison
if(enteredDate>date1 && enteredDate<date2)
console.log("True");
else
console.log("False");
}

/* UC3:- Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
         A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
*/


//read line sync use take input user
var readlineSync = require('readline-sync');

var year = readlineSync.question('Enter year:- '); //Take input from user
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
{
    console.log(year+ " Is Leap year");
}
else
{
    console.log(year+ " Is Not Leap Year")
}

/* UC4:- Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.*/


var Result = Math.floor(Math.random()*10)%2;
if(Result==0)
{
console.log("Heads");
}
else
{
    console.log("Tails");

}

