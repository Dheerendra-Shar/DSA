/** search element from arrya
 * 
 * write a function that searches for an element in and array and return the index if the element is not present then just return -1
 */
// let index
// function searchElement(arr , num){
// for(let i=0; i < arr.length ; i++){
//     // console.log('i: ', i+ " "+ arr[i]);
//     if(num == arr[i]){
//         index = i
//         return index
//     }
  
  
// }
// return -1
// }

// let arr = [4,2,0,10,8,30]

// let result = searchElement(arr,49);
// console.log('result: ', result);


/** write a function that returns the number of negative number in an array  */

// function countNegatives(arr){
//     let count = 0
//  for(let i=0 ; i<arr.length; i++){

//     if(arr[i] < 0){
//        count++
      
//     }

// }
// return count++


// }
 

// let narr= [2,-9,17,0,1,-10,-4,8]
// let result = countNegatives(narr)
// console.log('result: ', result);


/** write a function that return the largest number from any array */
// let count = 0
// function findLargest(arr){
//     for(let i=0; i<arr.length; i++){
//        if(arr[i] > arr[0]){
//          count = arr[i]
//        }
//     }
//     return count

// }
// let arr = [5,0,10,8,1,20,50]
// let res = findLargest(arr)
// console.log('res: ', res);

/** write a function that return the smallest number from any array */
function findLargest(arr){
    let count = arr[0]
    for(let i=0; i<arr.length; i++){
       if(arr[i] < count){
         count = arr[i]
       }
    }
    return count

}
let arr = [10,20,50]
let res = findLargest(arr)
console.log('res: ', res);