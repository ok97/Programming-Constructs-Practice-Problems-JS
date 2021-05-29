/* Selection Practice Problems with if else if and else */
/* UC1:- Read a single digit number and write the number in word. */
const prompt=require('prompt-sync')();
let num=prompt('Enter Single Digit Number(1 To 9):- ');
if(num==1)
console.log("One");
else if(num==2)
console.log("Two");
else if(num==3)
console.log("Three");
else if(num==4)
console.log("Four");
else if(num==5)
console.log("Five");
else if(num==6)
console.log("Six");
else if(num==7)
console.log("Seven");
else if(num==8)
console.log("Eight");
else if(num==9)
console.log("Nine");
else
console.log("Zero");


/* UC2:- Selection Practice Problems with if else if and else. */

Day = prompt('Enter the Days Number: ');
if(num==1)
console.log("Monday");
else if(Day==2)
console.log("Tuesday");
else if(Day==3)
console.log("Wednesday");
else if(Day==4)
console.log("Thursday");
else if(Day==5)
console.log("Friday");
else if(Day==6)
console.log("Saturday");
else if(Day==7)
console.log("Sunday");

/* UC3:- Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,… */



Number = prompt('Enter the Number:- '); //Take input
if(Number==1) //check input 
console.log("unit");
else if(Number==10)
console.log("Ten");
else if(Number==100)
console.log("Hundred");
else if(Number==1000)
console.log("Thousand");
else if(Number==10000)
console.log("Ten Thousand");
else
console.log("You Enter Wrong Number"+Number)

/* UC4:-Enter 3 Numbers do following arithmetic operation and find the one that 
is maximum and minimum
1. a + b * c 
2. a % b + c 
3. c + a / b
4. a * b + c
 */

a = prompt('Enter a Value:- '); //Take input 
b = prompt('Enter b Value:- ');
c = prompt('Enter c Value:- ');

let operations=[];
operations[0]=a+(b*c);
operations[1]=(a%b)+c;
operations[2]=c+(a/b);
operations[3]=(a*b)+c;
let maximum=operations[0],minimum=operations[0];
for(i=1; i<operations.length; i++)
{
    if(maximum<operations[i])
        maximum=operations[i];
    if(minimum>operations[i])
        minimum=operations[i];
}
console.log("Maximum value is:- "+maximum);
console.log("Minimum value is:- "+minimum);