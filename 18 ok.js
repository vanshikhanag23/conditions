/*
Write a program to take the basic salary of an employee and calculate its 
Gross salary according to the following: (Gross salary is the sum of basic 
salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%

Test Case1:
Input:
17000
Output:
36550
Explanation:
Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, 
the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the 
basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550

*/
const input=require("readline-sync")
let BS=input.questionInt("enter the value of BS")
if(BS<=10000)
{
    HRA=20/100*BS;
    DA=80/100*BS;
    GS=BS+HRA+DA ;
    console.log(GS);
}else if (BS<=20000)
{
    HRA=25/100*BS;
    DA=90/100*BS;
    GS=BS+HRA+DA;
    console.log(GS);
}else if (BS>20000)
{
    HRA=30/100*BS;
    DA=95/100*BS;
    GS=BS+HRA+DA;
    console.log(GS);
}else{
    console.log("INVALID");
}
