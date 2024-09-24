// Given an array of integers, find the maximum and minimum values

let arr = [56,35,72,54,246,58,43,57,24,26,75];

let max = 0;
let min = arr[0];

for(let i of arr){
    if(i > max){
        max = i;
    }
    if (i<min){
        min = i;
    }
}
console.log("the maximum number in the array is ", max);
console.log("The minimum number in the array is ", min);