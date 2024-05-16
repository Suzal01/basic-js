//Arrays (Linear)
//Collection of data/item (Similar Datatypes)
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
//We can change the values inside arrays without replace command which is not possible in strings (Mutable)
/*like;
//arr[0],arr[1],....
 
let heroes=["ironman","hulk","captainamerica"];
console.log(heroes);
heroes[0]="Sujal";
console.log(heroes);//["Sujal","hulk","captainamerica"]
console.log(heroes[3]);//undefined (doesnot exist)
*/
 
//Loop Over Array
//Suppose we have a list so to print all elemnts using indices is difficult so we use loop 
//For loop
/*NOTE* ArrayIndices(i) < ArrayLength(arr.length)
#i -> always initialzed as [i=0]*/
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
}
*/

//Arrays methods in JS
/*
1.push()- to add items at end
2.pop()- to delete item from end
3.toString()- to change array into String
4. Concat()- joins multiple arrays & returns result
5.unshift()- add to start
6.shift()- to delete from start & return
*/
//Practice
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

//splice
/*
let heroes=["ironman","hulk","captainamerica"];
heroes.splice(3,1);
heroes.splice(4,1,"OOP");
*/
 
//slice
/*
let heroes=["ironman","hulk","captainamerica"];
console.log(heroes);
console.log(heroes.slice(1,3));
*/




 
























 





















