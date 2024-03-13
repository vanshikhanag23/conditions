/*
Write a program to take three numbers from the user and print the greater number of 
the three numbers. (Assume all three numbers are distinct)

Test Case1:
Input:
20
3
43
Output:
43
*/
const input=require("readline-sync")
let a=input.questionInt("enter the value of a:")
let b=input.questionInt("enter the value of of b:")
let c=input.questionInt("enter the value of c:")
let max=a
if(max<b)
{
    max=b;
}
if(max<c)
{
    max=c;
}
console.log(max);