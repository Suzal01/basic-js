//Conditional Statements
//If-Staement

/*let age=16;
 if(age>=18)
 {
    console.log("you can vote");
 }
 if(age<=18)
 {
    console.log("you cannot vote");
 }*/
 /*let a=10;
 if(a%2==0)
 {
    console.log("even");
 }
 else
 {
    console.log("odd");

 }*/

/*let mode="dark"; //variable
let color; //to set
if (mode=="dark")
{
    console.log("black");
}
if (mode=="light")
{
    console.log("white");
}
console.log(color);*/

//If-else satement

/*let mode="light";
 let color;
 if(mode=="dark")
{

    color="black";
}
else{
    color="white";
}
console.log(color);*/

//Else-if statement

/*let age=30;
if(age<=18)
{
    console.log("junior");
}
else if(age<=60)
{
    console.log("middle");
}
else
{
    console.log("adult");
}*/
/*let mode="dark";
let color;
if(mode=="dark")
{
    color="black";
}
else if(mode=="blue")
{
    color="blue";
}
else if(mode=="pink")
{
color="pink";
}
else
{
    color="white";
}

console.log(color);*/
/*let age=16;
let result= age>=18 ? "adult":"not adult";
console.log(result);
//OR
let age=25;
age>18 ? console.log("adult"):console.log("not adult");*/

//Practice for IF-else statement using prompt

/*let number= prompt("Enter a number");
if(number%5==0)
{
    console.log("divisible by 5");
}
else{
    console.log("not divisible by 5");
}*/

//alert("hello!");
 /*let name=prompt("hi!");
 console.log(name);*/

 //Practice for Else-if satement 
/*let marks=72;
let grade;
if(marks>=90 && marks<=100)
{
    grade="A";
}
else if(marks>=70 && marks<=89)
{
    grade="B";

}
else if(marks>=60 && marks<=69)
{
    grade="C";

}
else if(marks>=50 && marks<=59)
{
    grade="D";

}
else if(marks>=0 && marks<=49)
{
    grade="F";

}
console.log(grade)*/
/*for(let i=1; i<=5; i++)
{
    console.log("Nepal");
}*/

/*for(let i=1;i<=5;i++)
{
    cosole.log(i);
}*/

//Loop & Strings 
//Loop
/*
console.log("KSS Project");
console.log("KSS Project");
console.log("KSS Project");
console.log("KSS Project");
console.log("KSS Project");
*/

//FOR-Loop to print 1-5
/*
for(i=1;i<=5;i++)
{
    console.log("Kss Project");
}*/

//Calculate sum of numbers between 1-5
/*
let sum = 0;
for(i=1;i<=5;i++)
{
    sum = sum + i; // sum = 15
}
console.log("sum=", sum);
*/

//Infinite Loop 
/*
for(let i=1;i<=0;i++)
{
    console.log("i=",i);
}
// console.log(i);*/

//While loop
/*let i=1;
while(i<=5)
{
    console.log("i=",i);
    i++;
}*/

/*let i=1;
while(i<=5)
{
    console.log("Kss Project");
    i++;
}*/

//Do-While loop
/*
let i=1;
do
{
    console.log("i=",i);
    i++;
}
while(i<=5);
*/

/*let i=1;
do{
    console.log("KSS project");
    i++;
}
while(i<=10);*/

//For-of loop
/*
let str="KSSproject";
for(let i of str){
    console.log(i);
}*/

//Calculate the size of strings
/* let str="Javascript";
 let size=0;
 for(let val of str)
 {
    console.log(val);
    size++;
 }
 console.log("Size of", size);
 */

 //For-in Loop
 /*
 let student = {
    name:"SUJAL",
    class:10,
    Ispass:true,
 };
 for(let rel in student)
 {
    console.log("result=",rel,"value=",student[rel]);//cannot pass student.rel
 }
 */

//Practice to print even numbers from 1-100
 /*
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
 }*/

 /*
 let gameNum=25;
  let userNum=prompt("Guess the correct number");
while(gameNum != userNum)//because !== checks the stirng with number
{
    prompt("Please! Try again");//game
}
 console.log("Congrtulations! you entered correct number");
*/

//Strings
/*
let str="KSSProject";
let str2="Javascrip";
console.log(str,str2);//KSSProject Javascrip
console.log(str.length,str2.length);//10 9
console.log(str[0],str[1],str2[2]);// K S v
*/

//Template literals 
/*
let obj={
    Product:"pen",
    Price:100,
};
//let output = `The price of ${obj.Product} is ${obj.Price} rupees`;//The price of pen is 100
console.log(typeof obj.Product);//object

let specialString=`The special string`;
console.log(specialString);//The special string
console.log(typeof specialString);//string

//String Interpolation
//let output = `The price of ${obj.Product} is ${obj.Price} rupees`;//The price of pen is 100
console.log(typeof obj.Product);//object
let specialString=`The special string ${1+2+3}`;
console.log(specialString);
*/

//Escape characters
/*
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

/*
let str="0123455";
let str2="SujalKandel";

console.log(str.slice(1,4));
console.log(str2.slice(1,4));
console.log(str.replace(5,6));
console.log(str2.replace("S","s"));//0123465
console.log(str.replaceAll("5","6"));//0123466
console.log(str.charAt(0));
console.log(str2.charAt(0));
*/

//Practice
/*
let fullName= prompt("Enter your fullname without spaces");
let username= "@"+ fullName + fullName.length;
console.log(username);
*/

//Arrays (Object type)
/*
let heroes=["ironman","hulk","captainamerica"];
console.log(heroes);
console.log(heroes.length);//property
*/

/*
let classes=["Nursery","LKG","UKG",1,2,3,4,5,6,7,8,9,10,11,12];
console.log(classes);
console.log(typeof classes);
*/

//Array Indices
//arr[0],arr[1],....
/*
let heroes=["ironman","hulk","captainamerica"];
console.log(heroes);
heroes[0]="Sujal";
console.log(heroes);//["Sujal","hulk","captainamerica"]
console.log(heroes[3]);//undefined (doesnot exist)
*/

//Loop over arrays 
//For loop
/*
let subject=["science","math ","english","Nepali","social"];
for(i=0;i< subject.length;i++)
{
    console.log(subject[i]);
}
*/

//For-of Loop (MOst convienent use for Arrays)
/*
let subject=["science","math ","english","Nepali","social"];
for(let sub of subject)
{
    console.log(sub);
    console.log(sub.toUpperCase());//use single
}*/

//Arrays methods
/*
let numbers=[85,97,44,37,76,60];
let sum=0;
for(let num of numbers)
{
    sum += num;
    
}
let avg=sum/numbers.length;
console.log(`avg of the class = ${avg}`);
*/
//Push()
/*
let numbers=[85,97,44,37,76,60];
numbers.push(50);
console.log(numbers);
*/

//Pop
/*
let foodItems=["Chips","kurkure","Cocacola"];
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log("deletedItem="deletedItem);
*/

//arr.toString()
/*
let foodItems=["Chips","kurkure","Cocacola"];
console.log(foodItems);
console.log(foodItems.toString());
*/

//concat()
/*
let marks=[82,97,86,75,80];
let grade=["B","A","B","C","A"];
let cgpa=marks.concat(grade);
console.log(cgpa);
*/

//unshift()
/*
let marvelheroes=["thor","spiderman"];
marvelheroes.unshift("captainamerica");
*/
/*
let marvelheroes=["thor","spiderman"];
let val=marvelheroes.unshift("captainamerica");
console.log("added",val);//added 3
*/

//shift
/*
let marvelheroes=["thor","spiderman"];
marvelheroes.shift();
*/
/*
let marvelheroes=["thor","spiderman"];
 let val=marvelheroes.shift();
console.log("aded",val);//deleted thor
*/

//slice
/*
let heroes=["ironman","hulk","captainamerica"];
console.log(heroes);
console.log(heroes.slice(1,3));
*/

//splice
/*
let heroes=["ironman","hulk","captainamerica"];
heroes.splice(3,1);
heroes.splice(4,1,"OOP");
*/

//Practice
/*
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
1.let val=companies.shift();
console.log("removed",val);
2.companies.splice(2,1,"Ola");
3.companies.push("Amazon");
*/

//Function in JS
//Practice
/* 
function sum(x,y){
    console.log(x+y);//use sum(val,val) inside console section for result
}
*/
/*
function sum(x,y){
    sum=x+y;
    console.log(before return);//prints
    return sum;
}
let val=sum(3,4);
console.log(x);//doesnot print value of x
console.log(val);
*/
//function params are -> like local variables of function so -> they remain alive or can be printed only inside block scopes 
//e.g:
/*
function sum(x,y){
    sum=x+y;//sum=...
    console.log("sum=",sum);//sum=5
    return sum;//...
}
let val=sum(3,5);
console.log(x);//error
console.log(val);//erroe
*/

/*
function multi(a,b){
    multi=a*b;//multi=...
    console.log("multi=",multi);
    return multi;//...
}
*/

//Arrow key in Function 
/*
const/let(var)  functionName=()=>{
    //console.log(..);//
    //return ..;
}
*/

/*
const sum=(x,y)=>{
    console.log(x+y);//output val + undefined(msg)
    return x+y;//ouput val only
};
*/

//Practice for checking no. of vowels in a string
/*
function checkvowels(str)
{
    let count = 0;
    for (const char of str){
        if (
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u"
        )
        {
            count++;
        }
    }
console.log(count);
}

//Counting no. of vowels using arrow function
const checksquare=(str)=>{
let count = 0;
    for (const char of str){
        if (
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u"
        )
        {
            count++;
        }
    }
return count;
};
*/

/*
//Uisng Function
let arr=[1,2,3,4,5];
 arr.forEach(function myfunction(val,idx,arr)
{
    console.log(val,idx,arr);
})
*/

/*
//Using Arrow Function
let arr=["sujal","satish","Arish"];
arr.forEach((val,idx)=>{
    console.log(val.toUpperCase,idx);

});
*/

/*
//Without function but Arrow Function
let nums=[12,39,44];
nums.forEach((num)=>
{
    console.log(num*num);//n**2(square)
});
*/

/*
//With Function
let nums=[12,39,44];
let calsquare=(val)=>{
    console.log(val*val);
};
nums.forEach(calsquare);
*/

//Map
/*
let nums=[1,2,3,4,5];
let newarr = nums.map((val)=>{
    return val*val;
});
console.log(newarr);
*/

//Filter
/*
let nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,27,18,19,20,21,22,23,24,25,26,27,28,29,30];
let vals=nums.filter((val)=>{
    return val%2!==0;//for odd values
    return val%2==0;//for even values
});
console.log(vals);
*/

//Reduce
//Performs some operations and reduces the array to a single valye.It gives us only single values or average among different array of values

//Print sum of array
/*
let nums=[1,2,3,4,5];
let sum=nums.reduce((res,curr)=>{
    return res+curr;

});
console.log(newarr);
*/

//Print Highest value
/*
let nums=[66,67,89,88,90, 98];
let newarr=nums.reduce((prev,curr)=>{
    return prev > curr ? prev:curr;


});
console.log(newarr);
*/

//Practice
/*
let marks=[88,99,98,78,67,90];
let A=marks.filter((val)=>{
    return val > 90;
})
console.log(A);
*/

/*
let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((prev,curr)=>{

    return prev+ curr;
});
console.log("sum=",sum);

let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("factorial=",factorial);
*/

//Callback hell
/*
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sum){
    sum(a,b);
}

//calculator(1,2,sum);

calculator(1,2,(a,b)=>{
   calculator(3,4,(a,b)=>{
    console.log(a+b);
  } )});
*/
/*
function getData(dataId,getNextData){
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    },2000);
}
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
console.log("getting data3...");
        getData(3,()=>{
            console.log("getting data4...");
            getData(4);

        });

    });
});
*/

/*
const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts=  async ()=>{
   console.log("getting data....");
   let response = await fetch(URL);
   console.log(response);//JSON Format
   let data= await response.json();
   //console.log(data[0].text);//0 is one of th index from 0-4 where text is Owning a cat can reduce the risk of stroke and heart attack by a third.
   factPara.innertext = data[0].text;
};

btn.addEventListener("click",getFacts);


/*
function getFacts(){
   fetch(URL)
   .then((response)=>{
       return response.json();   
   })
   .then((data)=>{
      console.log(data);
      factPara.innerText=data(2).text
   })
}

//btn.addEventListener("click",getFacts);

*/

/*
//Practice to make a bulb
var bulb= document.querySelector("#bulb")
var btn= document.querySelector("button")
var flag=0

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        console.log("Bulb is On");
        flag=1;
        
        
    }
    else{
        bulb.style.backgroundColor="white";
        console.log("Bulb is Off");
        flag=0;

    }


})
*/

