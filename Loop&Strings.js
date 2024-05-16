
//alert-one time popup message
alert("hello!");

 //Loops and Strings
 //loops are simply use to run a piece of code agin and again
 /*Types of loops
 1.For loop
 eg:*/
 //FOR-Loop to print 1-5

for(i=1;i<=5;i++)
{
    console.log("Kss Project");
}

//Calculate sum of numbers between 1-5

let sum = 0;
for(i=1;i<=5;i++)
{
    sum = sum + i; // sum = 15
}
console.log("sum=", sum);


//Infinite Loop 

for(let i=1;i<=0;i++)
{
    console.log("i=",i);
}
// console.log(i);

/*While loop
It is a loop that doesnot execute a block of code if condtion is false. It is Pre-test LOOP.
eg:*/
let i=1;
while(i<=5)
{
    console.log("i=",i);
    i++;
}

let i=1;
while(i<=5)
{
    console.log("Kss Project");
    i++;
}

/*DO-while loop
It is a POS-test loop which runs a block of code at leat once evn the condition is false.
eg:*/

let i=1;
do
{
    console.log("i=",i);
    i++;
}
while(i<=5);


let i=1;
do{
    console.log("KSS project");
    i++;
}
while(i<=10);

/*For-of Loop 
It is used to add loop for strings and arrays
let str="KSSproject";
for(let i of str){
    conseole.log(i);
}
eg:
*/
//Calculate the size of strings
 let str="Javascript";
 let size=0;
 for(let val of str)
 {
    console.log(val);
    size++;
 }
 console.log("Size of", size);
 

 /*For-in Loop
 It is used to add loop on objects.
 eg:*/
 let student = {
    name:"SUJAL",
    class:10,
    Ispass:true,
 };
 for(let rel in student)
 {
    console.log("result=",rel,"value=",student[rel]);//cannot pass student.rel
 }
 

//Practice to print even numbers from 1-100
 
 for(i=0;i<=100;i++)
 {
   if(i%2==0)
   {
    console.log("i=",i);
   }
 } 

//Practice to print odd numbers from 1-100
 for(i=0;i<=100;i++)
 {
   if(i%2!==0)
   {
    console.log("i=",i);
   }
 }

 
 let gameNum=25;
  let userNum=prompt("Guess the correct number");
while(gameNum != userNum)//because !== checks the stirng with number
{
    prompt("Please! Try again");//game
}
 console.log("Congrtulations! you entered correct number");


/*Strings
They are sequence of characters used to represent text 
index-position 
1. Create String
let str =“KssOJT";
2.String Length
str.length
3.String Indices
str[0], str[1], str[2]

/*
let str="KSSProject";
let str2="Javascrip";
console.log(str,str2);//KSSProject Javascrip
console.log(str.length,str2.length);//10 9
console.log(str[0],str[1],str2[2]);// K or S or v
*/

/*Template literals(``)
It is defines special type of string and it is a way of using embedded(Library) expresions in strings.
/*
let obj={
    item:"Pen",
    price:"50",
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let specialString=`The special string`;
console.log(specialString);//The special string
console.log(typeof specialString);//string

//String Interpolation
To create string by substuting placeholders
//let output = `The price of ${obj.Product} is ${obj.Price} rupees`;//The price of pen is 100
console.log(typeof obj.Product);//object
let specialString=`The special string ${1+2+3}`;
console.log(specialString);

//Escape characters
1. \t- To trim the spaces at first and endnot not of betwwen
2. \n- To start text from next line
 
//String Methods in JS
1.Str.toUpperCase;
2.Str.toLowerCase;
2.str.trim("string");//remoev whitespaces

let str= "Kss \t Project"  ;
console.log(str);
console.log(str.length)//11 not 10

let str2="KSS\nProject";
console.log(str2);
console.log(str2.length);
*/
/*
let str="kssproject";
console.log(str.toUpperCase());
console.log(str.toLowerCase);
*/
/*
let str=" KSS Project"
console.log(str.trim());
*/

//Strings Methods In js
1.str.slice(start,end?)- It is used to retrurn the part of string
2.str1.concat(str2)- Used to join two strings
3.str.replace("SearchVal",""NewVal")- Used to replace  first value with another new value(once)
4.str.replaceAll("SearchVal","NewVal")-Used to replace  first value with another new value(forall)
4.str.charAt()- Used to character of index
eg:/*
let str="0123455";
let str2="SujalKandel";

console.log(str.slice(1,4));
console.log(str2.slice(1,4));
console.log(str.replace(5,6));
console.log(str2.replace("S","s"));//0123465
console.log(str.replaceAll("5","6"));//0123466
*/

/*
//As Strings are immutable (not possible condition)
let str="KssProject";
str[0]="K";
console.log(str);//assumed value-SssProject
//Instead We use (str.replace/replaceAll())
let str="KssProject";
console.log(str.replace("K","S"));
*/

//Practice
let fullname=prompt("Enetr your fullname without spaces");
let username= "@" + fullname + fullname.length;
console.log(username);






















 


















