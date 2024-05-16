/*
//DOM
// 4 Pillars of DOM

//1.Selection of Element
//var a = document.querySelector("h1");//Used for element
console.log(a);
//var a = document.querySelector(".h1");//Used for element with class
console.log(a);
//var a = document.querySelector("#h1");//Used for element with specific id 
console.log(a);
//var a=document.querySelectorAll("h1");//Used when there are multiple heading of same size
console.log(a);
//var a=document.getElementById("h1");//Used for element with specific id
console.log(a);
//var a=document.getElementByClassName("h1");//Used for element with specific id
console.log(a);
var a=document.getElementByTagName("h1")//used for elemnet with specific tag name
console.log(a);

//2. Changing HTML
//var a= document.querySelector("h1")
//a.innerHTML="OJT Project"
//a.textContent="<h1>OJT Project</h1>" //returns us the conents of text along with tags

//3. Changing CSS
//var a= document.querySelector("h1")
//a.style.color="blue"
//a.style.backgroundColor //(- = Capital) ="black"

//4. Event Listener
var a= document.querySelector("h1")
a.addEventListener("click",function(){
    console.log("hello");
    a.innerHTML="OJT PROJECT";
    a.style.color="yellow";
    a.style.backgroundColor="black";
})
*/
var a=document.querySelector("h5")
var add=document.querySelector("#add")
var check=0
add.addEventListener("click",function(){
if(check==0){
    a.innerHTML="Friends";
    a.style.color="Green";
    check=1
}
else{
    a.innerHTML="Stranger";
    a.style.color="red";
    check=0;
}
});

