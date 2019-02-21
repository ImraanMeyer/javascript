 /* === What is a function? === */

 // A function is a group of instructions that performs a particular task.

 function sayHello() {
     console.log("Hello");
 }

 console.log("Start of Program"); 
 sayHello();    //calling the function
 console.log("End of Program");

 // Declaring a function

 // Creating a function





 // The keyword return indicates that a return value will be given, which ia specified immediatley after the word.

function sayHello() {
     return "Hello";
}

console.log("Start of Program"); // just for example purposes

let result = sayHello();
console.log(result);

console.log("End of Program");

/* === 

// Declare myFunction
function myFunction() {
    // calculate return value
    // ... 
    return returnValue;
}


// Get return value from myFunction
let value = myFunction();
// ...

=== */

// creating a function
function message() {
    return "Good Morning";
}
console.log(message());

/* === 
    function myFinction () {
        // No value returned in this function
    }

    var result = myFunction();

    console.log(result); // Will be undefined

=== */

// A function  that returns no value is sometimes called a proedure


// create a function with function name sayHello and parametere name
// declare a variable inside the function the variable name to be message
// the function should display Hello, name of the person

console.log("start");

function sayHello(firstName, lastName) {
    let message = "Hello, " + firstName + lastName + "!";
    return message;
}

console.log(sayHello("Steve"," Rogers" ));


console.log("end");

/* --------------- END ----------- */

message = "Hello there\n"
console.log(message + "JavaScript is not JAVA" .length);



let animal      = ["cat", "dog", "cow"];
    // caseUp      = animal.toUpperCase(animal);
    // caseDown    = animal.toLocaleLowerCase(animal);
    
    console.log(animal[2]);
    // console.log(animal === "cat" + caseUp);
    // console.log(caseUp + " " + caseDown);