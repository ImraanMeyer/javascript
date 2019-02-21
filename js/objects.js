// Objects are variables too. But objects can contain many values. Like a pen, a pen can have different ink colors, be manufactured by different people, have a different tip, and many other properties.

// Similarly, an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object (the color of the pen) or action (the pens ability to write).

//Oop changes the way a program is written and organized. So far, youve been writing functions-based code, sometimes called the procedural programming. Now lets discover how to write a object


// Creating a object
// here is the JS representation of a blue Bic ballpoint pen.

let pen = {
    type:   "ballpoint",
    color:  "blue",
    brand:  "Bic"
}; // colon at the end means a object is done

console.log(pen.brand, pen.color, pen.type);

console.log("end ----------");

// The above code defines a variable named pen whose values is an object: you can therefore say pen is an object. This object has three properties: type, color and brand. Each property has a name and a value and is separated by a comma, (except the last one).


// Creating a sentance using objects ad strings

console.log("I am using a " + pen.type + " pen " + "that I have bought from " + pen.brand + ". It writes in " + pen.color);

console.log("end ----------");


let cake = {
    flavour:    "chocolate",
    price:      "R20 000",
    layer:      4,
    occasion:   "wedding"
};

console.log("The " + cake.occasion + " cake will cost you " + cake.price + " It consists of " + cake.layer + " layers, full of " + cake.flavour);

console.log("end ----------");

// updated object values ------
cake.occasion   =   "funeral";
cake.layer      =   4*3;
cake.flavour    =   "milk-tart";

console.log("The " + cake.occasion + " cake will cost you " + cake.price + " It consists of " + cake.layer + " layers, full of " + cake.flavour);

console.log("end ----------");


// Methods in objects

// We had to write lengthy console.log statements each time to show the cake descrition. There is a cleaner way to acclompish that.

// Adding a method to a object 

// Describe a cake

function describe(cake) {
    let description = "The " + cake.occasion + " cake will cost you " + cake.price + " It consists of " + cake.layer + " layers, full of " + cake.flavour;
    return description;
}

console.log(describe(cake));

console.log("end ----------");

// The function describe() takes an object as a parameter. We pass it the cake, and it access that object's properties and prints them out in that sentence.

// Now for an alternative approach: creating a describe property that houses a method.

// using 'cake2' because 'cake' has been called already.  
let cake2 = {
    flavour:    "chocolate",
    price:      "R20 000",
    layer:      4,
    occasion:   "birthday",

    // describe the cake
    describe: function () {
        let description = "The " + this.occasion + " cake will cost you " + this.price + " It consists of " + this.layer + " layers, full of " + this.flavour;
        return description;
    }
};

console.log(cake2.describe());

console.log("end ----------");

// The cake is actually for a wedding!
cake2.occasion  =   "wedding";
console.log(cake2.describe());

console.log("end ----------");

// Now our object has a new property available to it describe. The value of this property is a function that returns a text description of the cake.

// A property whose value is a function is called a method.


/* === 

Remember the parenthese, even if empty, when calling a method:

=== */

let interns = {
    fName:  "Imraan ",
    lName:  "Meyer",
    tasks:  "getting coffee",
    salary: "R100 0000",

    descrip: function () {
        let job = this.fName + this.lName + " spends his time " + this.tasks + " and earns " + this.salary + " doing so!";
        return job;
    }
}

console.log(interns.descrip());