/* Repetition Practice Problems with while loop */
var readlineSync = require('readline-sync');
var Choice = readlineSync.questionInt("1.Powers of 2\n2.Find the Magic Number\n3.Flip Coin problem\n4.Gambler\nEnter Choice:-  ");

switch (Choice) 
{
    case 1:
        /* UC1:- Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is 
reached. */
        try 
        {
            var index = readlineSync.questionInt("Enter Powers of 2 :- ");
            let i = 1;
            let power = 0;
            while (i <= index && power < 256) 
            {
                power = Math.pow(2, i); //using Math pow 
                console.log(power);
                i++;
            }
        }
        catch (ex) 
        {
            console.log(ex);
        }

        break;
    case 2:
        /* UC2:- Find the Magic Number.
                 a. Ask the user to think of a number n between 1 to 100
                 b. Then check with the user if the number is less then n/2 or greater
                 c. Repeat till the Magic Number is reached. 
        */
        try 
        {
            let number = Math.floor(Math.random() * 100);
            console.log("Number is : " + number);
            let n = number;
            let start = 0;
            //let end = 100;
            while (number > 0) 
            {
                if (n > number || n < number) 
                {
                    while (number < n) 
                    {
                        end = n;
                        n = ((start + end) / 2);
                    }
                    while (number > n) 
                    {
                        start = n;
                        n = ((start + end) / 2);
                    }
                }
                else if (number == n) 
                {
                    console.log("Found the number " + n + " !!");
                    break;
                }
            }

        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 3:
        /* UC3:-Extend the Flip Coin problem till either Heads or Tails wins 11 times. */
        try 
        {
            let countHeads = 0;
            let countTails = 0;
            while (countHeads < 11 && countTails < 11) 
            {
                var tossResult = Math.floor(Math.random() * 10) % 2;
                if (tossResult == 0)
                    countHeads++;
                else
                    countTails++;
            }
            if (countTails == 11)
                console.log("Tails won");
            if (countHeads == 11)
                console.log("Heads won");
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 4:
        /*UC4:- Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the 
                goal of Rs 200. Keeps track of number of times won and number of bets made. */
        try 
        {
            let startMoney = 100;
            let betMoney = 1;
            let totalMoney = startMoney;
            let betCount = 0;
            let winCount = 0;
            while (totalMoney > 0 && totalMoney < 200) 
            {
                var betResult = Math.floor(Math.random() * 10) % 2;
                betCount++;
                if (betResult == 0) 
                {
                    //Round lost
                    totalMoney -= betMoney;
                }
                else 
                {
                    //Round Won
                    totalMoney += betMoney;
                    winCount++;
                }
            }
            console.log("Final total money= " + totalMoney);
            console.log("Total betting rounds= " + betCount);
            console.log("Total won rounds= " + winCount);
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;

    default:
        break;
}