a=10
b=20

//Assignment
console.log(a)

//Arithmetic 
console.log(a+b)
console.log(b-a)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Relational 

if(a<b)
{
    console.log(b," is greater")
}
else if(a>b)
{
    console.log(a,"is greater")
}
else
{
    console.log("false")
}


if (a<=10)
{
    console.log("True")
}
else{
    console.log("False")
}


if(b>=50)
{
    console.log("True")
}
else
{
    console.log("False")
}

if(a!=b)
{
    console.log("True")
}
else{
    console.log("False")
}

//logical

if(a&&b>=10)
{
    console.log("True")
}
else{
    console.log("False")
}

if(a||b==10)
{
    console.log("True")
}
else{
    console.log("False")
}

//Bitwise
if(a&b)
{
    console.log("True")
}
else{
    console.log("False")
}

//Ternary 

const num=10
num>=10 ? (console.log("Number is correct")):(console.log("Number is Wrong"))