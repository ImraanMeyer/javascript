// An array is a data type that can store a set of elements

// How to create our list of movies in the form of a table.

// let movies = ["PS I Love You" , "Titanic", "What Men Want"]; *** // Same var

// Create a table with a pair of square brakcets: []. Everything within the square brakets make up the array.

// Since an array contains multiiple things, its good to name the array using a plural (for, example, movies).

// Indetify an arrays size

// The number of elements stored in a table is called its size. Heres how to access it.

// let movies = ["PS I Love You" , "Titanic", "What Men Want"];

// console.log(movies.length); // will be 3

// Access an elements in an array

// Each item in an array us identified by a number called its index. We can represent an array as a set of boxes, each storing a specific value and associated with an index. Here is how one might represent the the films array:

// let movies = ["PS I Love You" , "Titanic", "What Men Want"];

// Counting starts from 0 (0 = 1 , 1 = 2, etc)

// console.log(movies[1]); // will be "Titanic"


// console.log(movies[0]); // will be "PS I Love YOu"
// console.log(movies[1]); // will be "Titanic"
// console.log(movies[2]); // will be "What Men Want"


// console.log(movies[3]); // will be undefine (you dont have 4 values)


// Thats exactly the way you access characters in a string! The same golden rules apply:

// The index of the first element of an arrat us 0, not 1

// The highest index number is the array's length minus 1

// Using an invalid index to access a JS array element returns underfined.


// Add an element to a array

// Lets say you just watched CM and you want to add it to the list. Heres how you'd do so:

let movies = ["PS I Love You" , "Titanic", "What Men Want"];

movies.push("Captain Marvel");


console.log(movies[0]); // will be "PS I Love YOu"
console.log(movies[1]); // will be "Titanic"
console.log(movies[2]); // will be "What Men Want"
console.log(movies[3]); // will be "Captain Marvel"

console.log(movies);
