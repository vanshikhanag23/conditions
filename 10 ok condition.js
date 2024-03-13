/*
Write a program to take two numbers from the user and determine the greater of those two given numbers.

Test Case1:
Input:
20
3
Output:
20

Test Case2:
Input:
5
7
Output:
7
*/

const input=require("readline-sync")
let a=input.questionInt("enter the value of a:")
let b=input.questionInt("enter the the valu b:")
if(a>b){
    console.log("a is greater:",a)
}
else{
    console.log("b is greater:",b)
}

