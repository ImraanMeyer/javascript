console.log("start program");
console.log (1, 2, 3, 4, 5, 6, 7,  8, 9, 10);
console.log("end program");

// will be looking at a 'while' & 'for' loop
// while loops - loops through a block of code while a specified condition is true
// for loops -  loops through a block of code a number of times

// let number = 1;
// while (number <= 10) {
//     console.log (number);
//     number++;
// }

console.log("NEW LOOP");

let number = 2;
while (number <= 10) {
    console.log (number);
    number++;
}

console.log("END LOOP");

// basic syntax 

/* ===
while (condition) {
    // code to run while the condition is true
}

=== */

// Before each loop iteration, the condition in parenthisis is evaluated to determine whether its true or not. The code associated with a loop is called the body

// if the condition true, the code in the while loops body runs. Afterward, the condition is re-evealuated to see if its still true or not. The cycle continues!

// if the condition is fale, the code in the loop stops running or doesnt run.

/* ===== For Loop ==== */

// Youll often need to write loops with conditions that are based on what happens in the loop body, like in our example. JS offers another loop type to account for this: the 'for' loop

/* ====

for  (initialization; condition; final-expression) {
    // code to run when condition is true
}

==== */ 

// This is a little more complicated than the while loop syntax:

// Initialization only happens once, when the code first kicks off

// The condition is evaluated once before the loop runs each time. If it's true, the code runs. If not, the code doesnt run.

// The final expression is evaulated after the loop runs each time. It's often used to update a counter variable, as we saw in the while loop example. 

console.log("START 'FOR' LOOOP");

for (let counter = 1; counter <= 5; counter+1) {
    console.log(counter);
}

console.log("END 'FOR' LOOP");
/* === which loop should i use? === */

let letter = "";
while (letter !=="X") {
    letter = prompt("Type any letter of X to exit:");
    console.log(letter);
}


