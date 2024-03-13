/*

Write a program to take 8 numbers from the user and output the second max of these 8 numbers. 
(do this in 9 comparision)

Test Case1:
Input:
5
4
6
7
8
9
2
3
Output:
8

*/
const input=require("readline-sync")
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number")
let c=input.questionInt("enter the number")
let d=input.questionInt("enter the number")
let e=input.questionInt("entre the number")
let f=input.questionInt("enter the number")
let g=input.questionInt("enter the number")
let h=input.questionInt("enter the number")
if(a>b)
{
    m=a;
    s=b;
}
else
{
    m=b;
    s=a; 
}
if(c>d)
{
    m1=c;
    s1=d;
}
else
{
    m1=d;
    s1=c;
}    
if(e>f)
{
    m2=e;
    s2=f;
}
else
{
    m2=f;
    s2=e;
}
if(g>h)
{
    m3=g;
    s3=h;
}
else
{
    m3=h;
    s3=g;
}       
if(m>m1)
{
    m4=m;
    s4=m1;
}
else
{
    m4=m1;
    s4=m;
} 
if(m2>m3)
{
    m5=m2;
    s5=m3;
}
else
{
    m5=m3;
    s5=m2;
} 
if(m4>m5)
{
    m6=m4;
    s6=m5;
}
else
{
    m6=m5;
    s6=m4;
} 
if(s>s1)
{
    m7=s;
    s7=s1;
}
else
{
    m7=s1;
    s7=s;
}
if(s2>s3)
{
    m8=s2;
    s8=s3;
}
else
{
    m8=s3;
    s8=s2;
}
if(m7>m8)
{
    m9=m7;
    s9=m8;
}
else
{
    m9=m8;
    s9=m7;
}
if(m9>s6)
{
    m10=m9;
    s10=s6;
}
else
{
    m10=s6;
    s10=m9;
}
if(m10>s4)
{
    m11=m10;
    s11=s4;
}
else
{
    m11=m10;
    s11=s4;    
}
if(m11<s5)
{
    console.log(s5);
}
else
{
    console.log(m11);
}