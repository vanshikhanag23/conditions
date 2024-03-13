/*
Write a program to take a year from the user and output whether a given year 
is a leap year or not.

Note: A year is said to be a leap year if it is either divisible 
by 400 or it should be divisible by 4 and not by 100.

Test Case1:
Input:
1800
Output:
No

Test Case2:
Input:
2000
Output:
Yes

Test Case3:
Input:
2024
Output:
Yes
Turn on screen reader support
To enable screen reader support, press Ctrl+Alt+Z To learn
 about keyboard shortcuts, press Ctrl+slash
 */
 const input=require("readline-sync")
 let a=input.question("enter the value ofa:")
if(a%4==0 && a%100!=0)
{
   console.log("not leap year");
}
else(a%400==0)
{
    console.log(" leap year");
}