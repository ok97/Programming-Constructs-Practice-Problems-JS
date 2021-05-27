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
