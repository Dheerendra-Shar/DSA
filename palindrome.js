// function palindrome(n){
//     let num = n
//     let rev = 0
//     let rem
// while(n>0){
//  rem = n % 10
//  rev = (10 * rev) + rem
//  n = Math.floor(n/10)
  
// }
  
// return rev == num
// }
// num = 121
// let res = palindrome(num)
// console.log('res: ', res);

function reverseInt(n){
let num = n 
let rev = 0;
n = Math.abs(n)
while(n>0){
    let rem  = n % 10;
    rev = (10* rev) + rem;
    n = Math.floor(n/10);
}
return num < 0 ? -rev : rev 
}   

num = -123456
let res = reverseInt(num)
console.log('res: ', res);