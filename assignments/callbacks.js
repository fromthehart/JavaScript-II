// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log("=== getLength ===")
  return cb(arr.length)
}
getLength(items, (firstItem) => console.log(firstItem))

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log("=== last ===")
  return cb(arr[arr.length-1])
}
last(items, (lastItem) => console.log(lastItem))

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log("=== sumNums ===")
  return cb(x + y)
}
sumNums(3, 4, (sum) => console.log(sum))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log("=== multiplyNums ===")
  return cb(x * y)
}
multiplyNums(3, 4, (mul) => console.log(mul))

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(`=== contains ${item} ===`)
  return cb(list.includes(item)) // Replaced .indexOf() approach with .includes()
}
contains('Pencil', items, (contained) => console.log(contained)) // true
contains('iPad', items, (contained) => console.log(contained)) // false :'(

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  console.log("=== removeDuplicates ===")
  return cb(array.reduce((unique, current) => {
    if (unique.indexOf(current) < 0 ) unique.push(current);
    return unique;
  }, []))
  
  // Or return cb(array.filter((current, index) => array.indexOf(current) === index)
  // How it works: the first time for example 'Pencil' appears, indexOf(current) will equal the current index
  //               if it appears again, the indexOf(current) will return the earlier position in array,
  //                 not matching index

  // The simplest modern approach: return cb([ ...new Set(array) ]);
}

items.push('Pencil', 'Gum', 'paper', 'Pencil', 'yo-yo', 'yo-yo', 'yo-yo', 'iPad');
removeDuplicates(items, (contained) => console.log(contained));