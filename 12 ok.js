/*
Write a program to take a number from the user and output whether that number is negative, positive or zero.

Test Case1:
Input:
6
Output:
Positive

Test Case2:
Input:
0
Output:
Zero
*/ 

const input=require("readline-sync")
let num=input.question("enter the value of num:")
if (num>0){
    console.log("positive")
}
else if(num==0){
    console.log("zero")
}
else{
    console.log("negative")
}