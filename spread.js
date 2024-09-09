// Example: Copying an array using the spread operator
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
//console.log('Copied Array:', copiedArray);

// Example: Combining arrays using the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
//console.log('Combined Array:', combinedArray);

// Example: Adding elements while combining arrays
const combinedArrayWithNewElement = [0, ...array1, ...array2, 7];
//console.log('Combined Array with New Elements:', combinedArrayWithNewElement);

// Example: Spreading elements in function calls
function sum(x, y, z) {
    return x + y + z;
}
const numbersToSum = [1, 2, 3];
console.log('Sum:', sum(...numbersToSum)); // Spreads the array elements as arguments
