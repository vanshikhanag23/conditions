/*
Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

Test Case1:
Input:
98
13
29
58
Output:
98
Turn on screen reader support
*/

const input=require("readline-sync")
let a=input.question("enter the value of a:")
let b=input.question("entre the value of b:")
let c=input.question("enter the value of c:")
let d=input.question("enter the value of d:")
let max=a
if(max<b)
{
    max=b;
}
if(max<c)
{
    max=c;
}
if(max<d)
{
   max=d;
} 
console.log(max);