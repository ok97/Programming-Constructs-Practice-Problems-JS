/* Functions Practice Problems */
var readlineSync = require('readline-sync');
var Choice = readlineSync.questionInt("1.find degF or degC\n2.Check Palindromes or not\n3.Check if the number is a Prime\nEnter Choice:-  ");
switch (Choice) 
{
    case 1:
        /*UC1:- Help user find degF or degC based on their Conversion Selection.
                Use Case Statement and ensure that the inputs are within the Freezing Point ( 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
                a. degF = (degC * 9/5) + 32
                b. degC = (degF – 32) * 5/9 
        */
        try 
        {
            var Choice1 = readlineSync.questionInt("1.To convert fahrenheit to celcius\n2.To convert celcius to fahrenheit\nEnter Your Choice:-  ");
            switch (Choice1) 
            {
                case 1:

                    var degF = readlineSync.questionInt("Enter Temperature in Degree Fahrenheit:- ");
                    fahrenheitToCelcius(degF);

                    function fahrenheitToCelcius(degF) 
                    {
                        if (degF >= 32 && degF <= 212) 
                        {
                            let degC = (degF - 32) * (5 / 9);
                            console.log("Celcius:- " + degC);
                        }
                        else 
                        {
                            console.log("Incorrect fahrenheit value");
                        }
                    }

                    break;
                case 2:
                    var degC = readlineSync.questionInt("Enter Temperature in Degree Celcius:- ");
                    celciusToFahrenheit(degC);
                    function celciusToFahrenheit(degC) 
                    {
                        if (degC >= 0 && degC <= 100) 
                        {
                            let degF = (degC * 9 / 5) + 32;
                            console.log("Fahrenheit:- " + degF);
                        }
                        else 
                        {
                            console.log("Incorrect celcius value");
                        }
                    }

                    break;


                default:
                    break;
            }

        }
        catch (ex) {
            console.log(ex);
        }
        break;
    case 2:
        /* UC2:- Write a function to check if the two numbers are Palindromes */
        try
        {
        function palindromeCheck(num1, num2) 
        {
            let palindromeNum1 = 0;
            while (num1 > 0) 
            {
                let rem = num1 % 10;
                palindromeNum1 = palindromeNum1 * 10 + rem;
                num1 = Math.floor(num1 / 10);
            }
            if (palindromeNum1 == num2)
                return true;
            else
                return false;
        }

        let num1 = 156;
        let num2 = 651;
        let isPalindrome = palindromeCheck(num1, num2);
        console.log("Numbers are:- " + num1 + " & " + num2);
        console.log("Is number 2 a palindrome of number 1:- " + isPalindrome);
    }
    catch(ex)
    {
        console.log(ex);
    }
        break;
    case 3:
        /* UC3:- Take a number from user and check if the number is a Prime then show that its palindrome is also prime
                 a. Write function check if number is Prime 
                 b. Write function to get the Palindrome. 
                 c. Check if the Palindrome number is also prime */
        try
        {
        function getPrimeFactors(number) 
        {
            let array = new Array();
            for (let i = 2; i <= number / 2; i++) 
            {
                if (number % i == 0) 
                {
                    let count = 0;
                    for (let j = 2; j <= Math.sqrt(i); j++) 
                    {
                        if (i % j == 0) count++;
                    }
                    if (count == 0 && i > 1) array.push(i);
                }
            }
            return array;
        }

        let number = 50;
        console.log("Prime Factors of " + number + " are:- ");
        console.log(getPrimeFactors(number));
    }
    catch(ex)
    {
        console.log(ex);
    }
        break;

    default:
        break;
}
