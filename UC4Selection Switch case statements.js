/* Selection Practice Problems with case statements */
/*UC1:- Read a single digit number and write the number in word using Case. */

var readlineSync = require('readline-sync');

    var Number = readlineSync.questionInt("Enter Single Digit Number:- ");
    switch (Number) {
        case 0:
            console.log("Zero");

            break;
        case 1:
            console.log("One");

            break;
        case 2:
            console.log("Two");

            break;
        case 3:
            console.log("Three");

            break;
        case 4:
            console.log("Four");

            break;
        case 5:
            console.log("Five");

            break;
        case 6:
            console.log("Six");

            break;
        case 7:
            console.log("Seven");

            break;
        case 8:
            console.log("Eight");

            break;
        case 9:
            console.log("Nine");

            break;

    }

/* UC2:- Read a Number and Display the week day (Sunday, Monday,…) */

    var readlineSync = require('readline-sync'); //Synchronous Readline for interactively running.
    var Day = readlineSync.questionInt("Enter Day Number:- ");
    switch (Day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday ");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday ");
            break;

        default:
            break;
    }


/* UC3:- Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,… */

    var Number = readlineSync.questionInt("Enter The Number:- ");
    switch (Number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten")
            break;
        case 100:
            console.log("Hundred")
            break;
        case 1000:
            console.log("Thousand")
            break;
        case 10000:
            console.log("Ten Thousand")
            break;

        default:
            break;
    }


/* UC4:- Write a program that takes User Inputs and does Unit Conversion of different Length units.
1. Feet to Inch
2. Feet to Meter 
3. Inch to Feet
4. Meter to Feet. 
 */

var Number = readlineSync.questionInt("1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet. \nEnter Your Choice:- ");
switch (Number) {
    case 1:
        var Feet = readlineSync.questionInt("Enter a Feet:- ");
        let FeettoInch = Feet * 12;
        console.log("Inch:- " + FeettoInch);
        break;
    case 2:
        var Feet1 = readlineSync.questionInt("Enter a Feet:- ");
        let FeettoMeter = Feet1 * 0.3048;
        console.log("Meter:- " + FeettoMeter);
        break;
    case 3:
        var Inch = readlineSync.questionInt("Enter a Inch:- ");
        let InchtoFeet = Inch / 12;
        console.log("Feet:- " + InchtoFeet);
        break;
    case 4:
        var Meter2 = readlineSync.questionInt("Enter a Meter:- ");
        let MetertoFeet = Meter2 * 3.28;
        console.log("Feet:- " + MetertoFeet);
        break;

    default:
        break;
}
