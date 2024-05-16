//Asynchronous
/*
console.log("one");
console.log("two");

 setTimeout(()=>{
    console.log("hello");
 },4000);//timeout ;

  console.log("three");
  console.log("four");
*/

/*
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sum){
    sum(a,b);
}

//calculator(1,2,sum);

//calculator(1,2,(a,b)=>{
   // console.log(a+b);
//});
*/

//Nesting in If=else
/*
 let num=19
 if(num>=18){
   if (num>=60)
{
   console.log("senior");
} 
else{
   console.log("middle");
}
 }
else
{
   console.log("Child");
}
*/

//Nesting in Loop
/*
for(let i=0;i<5;i++){
   let str="";
   for(let j=0;j<5;j++){
      str=str+j;
   }
console.log(i,str);
}*/
/*
 const hello=()=>{
    console.log("hello");
 }
 setTimeout(hello,3000);//3000=3sec
*/
/*
for(i=0;i<=10;i++)
for(j=0;j<=10;j++){
console.log(j);
}
*/

/*
//Promise Working Method
let promise=new Promise((resolve,reject)=>{
   console.log("I am a promise")//Pending
   resolve(123);//Fulfilled
   reject("some error occured");
});
*/

/*
function getData(dataId,getNextData){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);//If data not sent promise says error occured as rejected
       // resolve("sucess");//after we print promise it becomes sucess after value is passed to let promise with(=) getData function
       // reject("error occured");
    if(getNextData){
        getNextData();
    }
    },5000);
});
}
*/

//Promises Methods (Fulfilled/Rejected)
/*
const getPromise=()=>{
   return new Promise((resolve,reject)=>{
      console.log("I am a promise");//This is data that alters the promises states
     resolve("sucess");
      //reject("NetWork Error");
   });
};

let promise = getPromise();
promise.then((res)=>{//res is a autmatically coming parameters which can be printed
   console.log("Promise fulfilled",res);// sucess fulfilled
});
promise.catch((err)=>{//err is also a autmatically coming parameters which can be printed
   console.log("rejected",err);//rejected NetWork Error
});
*/

/*
function getData(dataId,getNextData){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);//If data not sent promise says error occured as rejected
   resolve("sucess");//after we print promise it becomes sucess after value is passed to let promise with(=) getData function
    if(getNextData){
        getNextData();
    }
    },2000);
});
}
*/

//Promise chain
/*
let p1=getData(1)
p1.then((res)=>{
   console.log(res);
let p2=getData(2)
p2.then((res)=>{
   console.log(res);
});//data2.s

});//data1 sucess
*/

//More effective way 
/*
console.log("getting data1...");
getData(1)
.then((res)=>{
   console.log("getting data2....")
   return getData(2);
})
.then((res)=>{
   console.log("getting data3...")
   //console.log(res);
   return getData(3);
}).then((res)=>{
   console.log(res);
});
*/

//Async await

/*
function getData(dataId,getNextData){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);//If data not sent promise says error occured as rejected
   resolve("sucess");//after we print promise it becomes sucess after value is passed to let promise with(=) getData function
    if(getNextData){
        getNextData();
    }
    },2000);
});
}
*/

/*
async function getAllData(){
   console.log("getting data1...");
   await getData(1);

   console.log("getting data2...");
   await getData(2);

   console.log("getting data3...");
   await getData(3);

   console.log("getting data4...");
   await getData(4);
}
*/

//Using IIFE
/*
(async function getAllData(){
   console.log("getting data1...");
   await getData(1);

   console.log("getting data2...");
   await getData(2);

   console.log("getting data3...");
   await getData(3);

   console.log("getting data4...");
   await getData(4);
})();
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
   console.log(data[0].text);//0 is one of th index from 0-4 where text is Owning a cat can reduce the risk of stroke and heart attack by a third.
   //factPara.innerText = data[0].text;
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

