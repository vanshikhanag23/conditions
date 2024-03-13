/*
Write a program to take a number from the user and print that number as Odd or Even.

Test Case1:
Input:
56
Output:
Even

Test Case2:
Input:
87
Output:
Odd
Turn on scr
*/

const input=require("readline-sync")
let num=input.question("enter the value of num:")
if
(num%2==0)
{
    console.log("even");
}
 else
{
    console.log("odd");
}