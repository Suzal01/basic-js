console.log("hello world");
syntax->rules
 console.log is used to prints values
vabriables//are the containers of data

/*Rules for variables
1. case sentitive,"a"and "A" are different
eg:
fullname="sujal kandel";
fullName="sujal kandel";
console.log(fullname);
console.log(fullName);
2. No space,only letters,digits,underscores(_) and $ is allowed.
3. only letters,difits,"and " can be used at first of variable name.
4. Dictionary or Reserved keyword cannot be used as variable name.

 /*Types of variables
1. var-It can be both redeclared and updated and it is golbal scope variable.
eg:*/
var age=24;
var age=15;
/*
2. let-It cannot be redeclared but can be updated and it is block scope variable.
eg:*/
let age=12;
let age=13;//this is not allowed
let age;//this is allwoed but it is undefined
age=12;//this is allowed
//But if we initilaize the variable as let inside a block we can redefine the vlaue of this variable
{
    let a=5;
    console.log(a);
}
{
    let a=10;
    console.lkog(a);
}
/*
3. const-It can be neither redeclared nor updated an dit it is also block scope variable.
eg:pie*/
const pie=3.14;
const pie=12;//this is not allowed
age=13;//this is also not allowed
const pie;//this is also not allowed
//But if we initilaize the variable as const inside a block we can redefine and update the value of this variable
{
    const a=5;
    console.log(a);
}
{
    const a=10;
    console.log(a);
}
const profile={
    username:"Sujal Kandel",
    post:1,
    followers: 40,
    following: 14,
};
console.log(typeof profile.username,post,following,followers);
//this prints the type of value in username,post,following,followers.
console.log(typeof profile);
//this prints object as datatype
console.log(profile.username);
//this prints the vlaue of username
console.log(profile);
//this prints the vlaue of all the variables present inside the block
console.log(profile.post);
//this prints the value of post
console.log(profile.followers);
//this prints the value of followers
console.log(profile.following);
//this prints the value of following

/*Types of data types:-
Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
Non-primitive Types: Objects
eg:*/
const profile={
    username:"Sujal Kandel",
    post:1,
    followers: 40,
    following: 14,
};
console.log(typeof profile.username,post,following,followers);
//this prints the type of value in username,post,following,followers.
console.log(typeof profile);
//this prints 'object' as datatype
let age:24;
//this is number
let name:"sujal";
//this is string
isfollow:true;
isfollow:false;
//this is boolean
let age;
//this is undefined
let age:null;
//this is null
let x:9840760145;
//this is BigInt gives us output as 9840760145n
let y:Symbol("Hello!");
//this is symbol

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
let age=30:
if(age<=18)
{
    console.log("junior);
}
else-if(age<=60)
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

 




