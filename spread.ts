// arrays, objects, strings, function arguments

// concat arrays

const arr1 :number[]= [10, 20]
const arr2 :number[]= [30, 40]

const arr3 :number[]= [...arr1, ...arr2]

console.log(arr3)

// cloning arrays

const arr4 :number[]= [10, 20]
const arr5 :number[]= [...arr4]

console.log(arr4 === arr5)