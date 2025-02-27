//Foreach

//let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// let ans = arr.forEach((e1,index)=>{
//     console.log(e1,index)
//     return e1
// });

// console.log(ans)
// let ans = arr.map((e1,i)=>{
// return e1
// });
// console.log(ans);

//filter

// 
// let output = arr.filter((e1,i)=>{
//     return typeof e1 =="string" || e1%3==0;
// });
// console.log(output)

//reduce
// let output = arr.reduce((acc,e1)=>{
//     return acc+e1
// });
// console.log(output);

// let output = arr.filter((e1,i)=>{
// return e1%5==0;

// }).map((e1, index)=>{
//     return e1+2;
// }).reduce((acc,e1)=>{
//     return acc+e1;
// }).map((e1,index)=>{
//     return e1*2;
// })
// console.log(output)

// let arr = [2,1,5,8,43.21,45,16,87,99,44,100,23];
// let ans = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(ans)


let data =  [
    {name:"watch",price: 2000,desc: "gold watch",rating: 5},
    {name:"phone",price: 200000,desc: "sliver",rating: 4.5},
    {name:"water",price: 5000,desc: "good water",rating: 3},

    {name:"car",price: 500000,desc: "good car",rating: 3},
    {name:"laptop",price: 58000,desc: "good laptop",rating: 3.2},
    {name:"iphone",price:99000,desc: "good iphone",rating: 4.2},
    {name:"laptop beg",price: 1000,desc: "good beg",rating:4.35},

]

let  arr = data.sort((a,b)=>{
    return a.price-b.price

})
console.log(arr)