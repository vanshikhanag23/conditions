/*
Write a program  to input electricity unit charges and calculate the total electricity bill
according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill

Test Case1:
Input:
200
Output:
192

Turn on screen reader support

*/ 

const input=require("readline-sync")
let u=input.questionInt("enter the value of u:")
if(u<50){
    t=u*0.50;
    s=t/100*20;
    b=t+s;
    
}else if(u<=150){
    t=(u-50);
    h=t*0.75;
    k= 50*0.50;
    j=h+k;
    s=j/200*20;
    b=j+s;
    
}else if(u<=250){
    t=u-150;
    h =t*1.20;
    j= 50*0.50;
    m=100*0.75;
    d = h+j+m
    s=d/100*20
    b=d+s
    
}else {

    t=u-150;
    h =t*1.20;
    j= 50*0.50;
    m=100*0.75;
    d = h+j+m
    s=d/100*20
    b=d+s
    
}console.log(b)
