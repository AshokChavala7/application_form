
// let num1 =[1,2,3,0,0];
// let num2 =[1,2,0];

// //merging of two arrays

// let ma = [...num1,...num2];
// console.log(ma)
//  let remzo=ma.filter(num =>num!==0);
//  console.log(remzo)

// // let removeZero =ma.filter(num => num!== 0);
// // let sortArrray =removeZero.sort((a,b) => a-b);

// // console.log(sortArrray)

let num1 = "12";
let num2 = "3";

function convert(num1,num2){

    let result = Number(num1) * Number(num2);
    return result.toString();

}

console.log(convert(num1,num2))