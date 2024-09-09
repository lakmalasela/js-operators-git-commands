// Example: Sorting an array of numbers
const numbers = [4, 2, 9, 1, 5, 6];

// Ascending order
const sortedNumbersAsc = numbers.sort((a, b) => a - b);
//console.log('Sorted in Ascending Order:', sortedNumbersAsc);

// Descending order
const sortedNumbersDesc = numbers.sort((a, b) => b - a);
console.log('Sorted in Descending Order:', sortedNumbersDesc);

// Example: Sorting an array of objects by a specific property
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 30 }
];

// Sort by age in ascending order
const sortedByAgeAsc = people.sort((a, b) => a.age - b.age);
//console.log('Sorted by Age in Ascending Order:', sortedByAgeAsc);


//object of array

const students = [
    {
        id:1,
        name: "Saman",
        marks: 80
    },
    {
        id:2,
        name: "Kamal",
        marks: 60
    },
    {
        id:3,
        name: "Vishwa",
        marks: 70
    },
    {
        id:4,
        name: "Malith",
        marks: 40
    }
];


const sortMarks = students.sort((a,b) => a.marks - b.marks);
console.log("Sort Marks ",sortMarks);


