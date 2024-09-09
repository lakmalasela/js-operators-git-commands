const number = 7;
const result = (number % 2 === 0) ? 'Even' : 'Odd';
//console.log(result); // Output: "Odd"


const isLoggedIn = true;

const greeting = isLoggedIn ? 'Welcome back!' : 'Please log in';
//
console.log(greeting); // Output: "Welcome back!"


const age = 20;
const canVote = (age >= 18) ? 'Yes' : 'No';
//console.log(canVote); // Output: "Yes"


const score = 85;
const grade = (score >= 90) ? 'A' 
             : (score >= 80) ? 'B'  
             : (score >= 70) ? 'C' 
             : (score >= 60) ? 'D' 
             : 'F';

console.log(grade); // Output: "B"


//  fname = "xyz";
//  if(fname){
//     console.log("Values ");
    
//  }else{
//     console.log("No ");
    
//  }