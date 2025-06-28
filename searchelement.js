/** search element from arrya
 * 
 * write a function that searches for an element in and array and return the index if the element is not present then just return -1
 */
// function searchElement(arr , num){
//   for(let i=0; i < arr.length; i++){
//     if(arr[i] == num){
//       return i
//     }
//   }
//   return -1;
// }

// let arr = [4,2,0,10,8,30];
// let result = searchElement(arr,10);


/** write a function that returns the number of negative number in an array  */

// function countNegatives(arr){
//   let count = 0
//  for(let i=0 ; i< arr.length; i++){
//   if(arr[i] < 0 ){
//     count++
//   }
//  }
//  return count

// }
 

// let narr= [2,-9,17,0,1,-10,-4,-8]
// let result = countNegatives(narr)


/** write a function that return the largest number from any array */
// function findLargest(arr){
//  let largest = arr[0]
//  for(let i = 0;i<arr.length ; i++){
//    if(arr[i] > largest){
//     largest = arr[i]
//    }
//  }
//  return largest

//  }
//  let arr = [5,0,10,8,1,20,50,100,101]
//  let res = findLargest(arr)

/** write a function that return the smallest number from any array */
// function findSmallest(arr){
//   let smallest = arr[0]
//  for(let i = 0; i<arr.length; i++){
//    if(arr[i] < smallest){
//      smallest = arr[i];
//    }
//  }
//  return smallest

// }
// let arr = [20,50,3,6,5,1]
// let res = findSmallest(arr)

// find Second largest number in an array 
function secondLargest(arr){
  if(arr.length<2){
    return null
  }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0;i<arr.length;i++){
      if(arr[i]> firstLargest){
        secondLargest = firstLargest
        firstLargest = arr[i] 
      }
      else if( arr[i] > secondLargest && arr[i] != firstLargest){
        secondLargest =arr[i];
      }
    }
    return secondLargest;
}
let arr = [4,6,0,2,7,8,8,1]
let res = secondLargest(arr)
console.log('res: ', res);
