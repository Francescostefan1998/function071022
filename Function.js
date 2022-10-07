/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

function area1(Number) {
    console.log("The area is: ", 14 * 12);
  };

area1()

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */



function crazysum(Number) {
    console.log( "The sum is: ", 3 + 6);
  };
crazysum()
let newresult = crazysum() === 9 ? 9 * 3 : crazysum();
console.log("the result is ", newresult);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
function crazyDiff(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  };
  
  console.log(crazyDiff(12));
  console.log(crazyDiff(19));
  console.log(crazyDiff(22));

  /* EXERCISE 4
  Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's 
  equal to 400.
 */
 
 /* WRITE YOUR ANSWER HERE */

 function boundary(n) {
    if (n <= 100 && n > 20) {
      return (true);
      }
      else
      {
       return (false);
      }
  };
  
  console.log(boundary(34));
  console.log(boundary(200));
  console.log(boundary(10));

  /* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
 then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
function strivify(s) {
    if (s !== "strive") {
      console.log("strive " + s);
    } else {
      console.log(s);
    }
  }
  
  strivify("strive");
  strivify("loppp");
  strivify("ggggggg");
  strivify();

  /* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


/* WRITE YOUR ANSWER HERE */


  function check3and7(n) {
    if (n % 3 === 0) {
        console.log(true);
    } if (n % 7 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
       
    };
  
  check3and7(5); 
  check3and7(14); 
  check3and7(30); 

  /* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/*function reversestring(s)  {
     console.log(s.reverse(s));
};
    reversestring("hello"); 
    reversestring("hi"); 
    reversestring("ciao"); 


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function upperfirst(s)  {
    console.log(s.charAt(0).toUpperCase() + s.slice(1));
};
upperfirst("giallo")
upperfirst("rosso")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
function cutstring(s)  {
    console.log(s.text.substring(1, 4));
};
cutstring("giallo")
cutstring("rosso")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */


