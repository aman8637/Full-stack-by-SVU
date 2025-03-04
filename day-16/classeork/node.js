// //setTimeout, setInterval, setImmediate,  microtesk,macrotask
// // promises





// let name = "synchronus";

// console.log(name);
// let surName = "name";

// console.log(surName);
// setTimeout(() => {
//   console.log("Asynchronus runing");
// }, 5000);

// setTimeout(() => {
//   console.log("Asynchronus runing:- 1");
// }, 3000);


// queueMicrotask(() =>console.log("Microtask syncing"));

// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);

        
//     },1000);

// }
// console.log(name, surName);


// let myPromise = new Promise((resolve, reject) => {
//     let flag = true;

//     if(flag){
//         resolve("Promise is resolved with green flag"); 

//     }else{
//         reject("Promise is rejected with red flag");
//     }   
// });
// console.log(myPromise);
async function fetchData(){
    let data =await fetch("https://fakestoreapi.com/products");

    let ans = await data.json();
    console.log(ans);
   
}
fetchData();