/*Operators in JS
Used to perform some operation on data.
condition ? true output : false output
eg:
age.18 ? "adult":"not adult";*/

//Arthmetic Operators(+,-*,/)
let a=6;
let b=2;
console.log("a=",a."&b=",b);//this shows the initialized value of a and b as reminder in output
console.log("a+b=")//this prints the same string value
console.log("a+b=",a+b);//this gives us value bvy aaddition
console.log("a-b=",a-b);//this gives us vlaue by substraction
console.log("a*b=",a*b);//this gives us vlaue by multiplication
console.log("a/b=",a/b);//this gives us vlaue by division
//this gives 5+2=7
//OR
let a=6;
let b=2;
let c=a+b;
console.log("a+b=",c);
//Modulus(%)
console.log("a%b=",a%b);// this gives us remainder
//Exponentiation(**)
console.log("a**b=",a**b);// this gives us power of something
//Uniary operator 
//Increment(++)
console.log("a=",a,"&b=",b);
++aa & a++;(pre)&(post)// pre changes the values from first one & post changes the values from second one
a=a+1;
console.log("a=",a)//7
//Decrement(--)
--a & a--;(")&(")
a=a-1:
console.log("a"=",a);//6

//Assignment operator
let a=5;
let b=2;
a += 4; //a=a+4
console.log("a=",a);//9
a -= 4; //a=a-4
console.log("a=",a);//1
a *= 4; //a=a*4
console.log("a=",a);//20
a /= 4; //a=a/4
console.log("a=",a);//1.25
a %= 4; //a=a%4
console.log("a=",a);//1
a **= 4; //a=a**4
console.log("a=",a);//625

//Comparision Operator
//Equal to ==
//Not equal to !=
//Equal to & type ===
//Not equal to & type !==
// >,>=,<,<=
let a=5;
let b=2;

console.log("5 == 2",a==b);//false
console.log("5 != 2",a!=b);//true
//If
let a=5;//number
let b="5";//string->number
console.log("a == b",a==b);//true
//Stricter version 
console.log("a === b",a===b);//false //checks datatype 
console.log("a !== b",a!==b);//true // " " "

let a=5;
let b=2;
console.log("a > b",a > b);//true // " " "
console.log("a < b",a < b);//false // " " "
console.log("a >= b",a >= b);//true // " " "
console.log("a <= b",a <= b);//false // " " "

//Logical Operators
//Logical AND &&-If any or both condtion among two conditions are false then is says false otherwise true
let a=6;
let b=5;
 let cond1=a>b;//true
 let con2=a==b;//false
 console.log("cond1 && cond2=", cond1 && cond2);//false
//Logical OR ||-If any or both condtion among two conditions are true then is says true otherwise false
let a=6;
let b=6;
 let cond1=a>b;//false
 let con2=a==b;//true
 console.log("cond1 || cond2=", cond1 || cond2);//true
//Logical NOT !-It says flase if the condition is true and viceversa
let a=6;
let b=5;
 let cond1=a<b;//true
 console.log("!(a<b)=",!(a<b));//false

 //Conditional Sentence
 // 1.If statement
 let age=16;
 if(age>=18)
 {
    console.log("you can vote");
 }
 if(age<=18)
 {
    console.log("you cannot vote");
 }
  
 let mode="dark";
 let color;
 if(mode=="dark")
 {
    console.log("black");
 }
 if(mode=="light")
 {
    console.log("white");

 }
 console.log(color)

 //2.If-else statement
 let a=10;
 if(a%==2)
 {
    console.log("even");
 }
 else{
    console.log("odd");
 }

 let mode="light";
 let color;
 if(mode=="dark")
{

    console.log("black")
}
else{
    console.log("white");
}
console.log(color);

//else-if satement(used when there comes mulitple conditions)\
let age=30;
if(age<=18)
{
    console.log("junior);
}
else if(age<=60)
{
    console.log("middle");
}
if(age>=60)
{
    console.log("adult");
}

//Ternary Operator
//syntax:
condition?true output:false output
let age=18;
let result= age>=18 ? "adult":"not adult";
console.log(result);
//OR
let age=25;
age>18 ? console.log("adult"):console.log("not adult");

//alert-one time popup message
alert("hello!");
