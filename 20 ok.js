/*
Write a program to take 4 numbers from the user and output the thrid max of these 4 numbers.

Test Case1:
Input:
5
4
6
7
Output:
6`
*/

const Input = require("readline-sync")
let a = Input.questionInt("enter the number:")
let b = Input.questionInt("enter the number:")
let c = Input.questionInt("enter the number:")
let d = Input.questionInt("enter the number:")
if(a>b){
    max=a
    min=b
}else{
    max=b
    min=a
}if(c>d){
    max1=c
    min1=d
}else{
    max1=d
    min1=c
}if(max>max1){
    Q=max1
    R=min
}else{
    Q=min1
    R=max
}if(Q<R){
    console.log(Q);
}else{
    console.log(R);
}
