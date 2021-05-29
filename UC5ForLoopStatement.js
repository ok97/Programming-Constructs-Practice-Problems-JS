/* Repetition Practice Problems with for loop*/

var readlineSync = require('readline-sync');
var Choice = readlineSync.questionInt("1.Powers of 2\n2.Findharmonic number\n3.Find Prime\n4.Prime Numbers in range\n5.Find Factorial\n6. N using prime factorization\nEnter Choice:- ");
switch (Choice) 
{
    case 1:
        /* UC1:- Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.*/
        try 
        {
            var num = readlineSync.questionInt("Enter Number:- "); //Take input
            for (i = 1; i <= num; i++) {
                console.log(Math.pow(2, i)); // using pow function
            }
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;

    case 2:
        /* UC2:- Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form*/
        try 
        {
            var number = readlineSync.questionInt("Enter Number:- "); //Take input
            let harmonicNumber = 0;
            for (i = 1; i <= number; i++) 
            {
                harmonicNumber += 1 / i;
            }
            console.log(number + "th Harmonic number= " + harmonicNumber);
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 3:
        /* UC3:- Write a program that takes a input and determines if the number is a prime.*/
        try 
        {
            var number = readlineSync.questionInt("Enter Number:- "); //Take input

            let flag = true;
            if (number <= 1)
                flag = false;
            else 
            {
                for (let i = 2; i < number; i++) 
                {
                    if (number % i == 0)
                        flag = false;
                }
            }
            if (flag == false)
                console.log("It is not a prime number");
            if (flag == true)
                console.log("It is a prime number");
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 4:
        /* UC4:- Extend the program to take a range of number as input and output the Prime Numbers in that range.*/
        try 
        {
            var number = readlineSync.questionInt("Enter Number:- "); //Take input
            // Print the number of 2s that divide n
            while (number % 2 == 0) 
            {
                console.log("2");
                number = number / 2;
            }
            // n must be odd at this point. So we can skip  
            // one element (Note i = i+2)  
            for (let i = 3; i * i <= number; i = i + 2) 
            {
                // While i divides n, print i and divide n  
                while (number % i == 0) 
                {
                    console.log(i);
                    number = number / i;
                }
            }
            // This condition is to handle the case when after division by 2 n  
            // is a prime number greater than 2  
            if (number > 2)
                console.log(number);
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 5:
        /* UC5:- Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5 */
        try 
        {
            var number = readlineSync.questionInt("Enter Positive Number:- "); //Take input
            fact = 1
            if (number == 0)
                fact = 1;
            for (let i = 2; i <= number; i++) 
            {
                fact = fact * i;
            }
            console.log(number + "!=" + fact);
        }
        catch (ex) {
            console.log(ex);
        }

        break;
    case 6:
        /*UC6:- Write a program to compute Factors of a number N using prime factorization method.
                Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
                O/P -> Print the prime factors of number N. */
        try 
        {
            function primeFactorize(number) 
            {
                let factors = [];
                for (k = 1; k <= number / 2; k++) 
                {
                    if (number % k === 0) {
                        factors.push(k);
                    }
                }
                for (j = 0; j < factors.length; j++) 
                {
                    console.log(factors[j] + " ");
                }
            }
            var number = readlineSync.questionInt("Enter Positive Number:- "); //Take input
            primeFactorize(number);
        } catch (ex) 
        {
            console.log(ex);
        }
        break;

    default:
        break;
}

