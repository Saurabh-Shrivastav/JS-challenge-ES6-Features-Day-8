// ///////////////////////////ES6+ Features//////////////////

// *********************Activity 1 - Template Literals**********
/* Use template literals to create a string that includes variables for a person's 
name and age, and log the String to the console.*/

const personName = 'Saurabh';
const personAge = 22;

// console.log(`Hey! ${personName}, Your age is ${personAge}.`);


/* Create a multi-line string using template literals and log it to the console.*/
const multiLineStr =
    `Created a multi-line string 
 using template literals 
 and log it to the console.`

// console.log(multiLineStr);

// *******************Activity 2 - Destructuring*****************
/* Use array destructuring to extract the first and second elements
from an array of numbers and log them to the console.*/

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [x, y] = myArr
// console.log(`First element is ${x}, and second element is ${y}`);

/* Use object destructuring to extract the title and author
from a book object and log them to the console.*/

const book = { title: 'JavaScript', author: 'Brendan Eich' }
const { title, author } = book

// console.log(`The book of title is ${title}, and author is ${author}`);


// *******************Activity 3 - Spread and Rest Operators*********
/* Use the spread operator to create a new array that includes all elements
of an existing array plus additional elements, and log the new array to 
the console.*/

const myNum = [1, 2, 3, 4, 5]
// console.log(myNum);

let spr = [...myNum]
spr.push(10)
// console.log(spr);

/* Use the rest operator in a function to accept an arbitrary number of arguments,
sum them, and return the result.*/
function restOp(...item) {
    let newval = item.reduce((acc, currval) => {
        return acc + currval
    }, 0)
    console.log(newval);
}
// restOp(1, 2, 3, 4, 5, 6)


// *****************Activity 4 - Default Parameter*********************
/* Write a function that takes two parameters and returns their product,
with the second parameter having a default value of 1. Log the result of 
calling this function with and without the second parameter.*/

function product(a, b = 2) {
    return a * b
}

// console.log(product(5 , 10));
// console.log(product(5));


// *****************Activity 5 - Enhanced Object Literals***************
/* Use enhanced object literals to create an object with method and properties,
and log the object to the console.*/

const userName = 'Saurabh Shrivastav'
const role = 'Frontend Developer'
const age = 22

function favLang() {
    console.log('JavaScript!');
}

const userDetails = {userName, role, age, favLang}
// console.log(userDetails)

/* Create an object with computed property names based on variables and log the 
object to the console.*/




function cumputedProperties(key, value) {
    let obj = {}
    obj[key] = value
    console.log("inner ",obj);    
}
cumputedProperties('name', 'Saurabh')
