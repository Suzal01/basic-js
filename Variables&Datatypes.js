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

