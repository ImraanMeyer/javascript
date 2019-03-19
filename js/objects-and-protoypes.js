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

cake2.occasion = "wedding";

console.log(cake2.describe());



// O B J E C T S  & P R O T O T Y P E S

//In addition to its special properties, every JS object has an internal property called prototype. This is a link (known as a reference) to another object. When trying to access a property that does not exist in an object, JS tries to find this proerty in the prototype of this object.


let anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype

let anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will show 2


// the javascript statement Object.create() is used to create the object anotherObject based on the prototype based on the prototype object anObject.

// If the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of a prototype chain. If the property was found in objects, access returns the value undefined.

//Create anotherObject using anObject as a prototype

console.log(anotherObject.a); // Will be 2
console.log(anotherObject.b); // will be undefined

// this type of relationship between JS objects is called delegation; an object delegates part of its operation to its prototypes.


// Cake prototype

// let Pastry = {
//     type: "",
//     flavour: "",
//     layers: 0,
//     price: "",
//     occasion: "",

//     // Describe the pastry
//     describe: function() {
//         let description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        
//         return description;
//     }
// };

// create a new object usign prototype (pastry);

// let muffin = Object.create(Pastry);

// muffin.type     =   "muffin";
// muffin.flavour  =   "blueberry";
// muffin.layers    =   1;
// muffin.price    =   "R20";
// muffin.occasion =   "breakfast";


// let cake = Object.create(Pastry);

// cake.type     =   "cake";
// cake.flavour  =   "chocolate";
// cake.layers    =   3;
// cake.price    =   "R200 000";
// cake.occasion =   "wedding";

// console.log(muffin.describe());
// console.log(cake.describe());


// we created an object named Pastry, which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype, which delegates its features to them.

// The Process od creating a process is a little repetitive: for each character, you must successively give a value to each of its properties. You can do better by creating an initialization function.

let Pastry = {
    // initialize the pastry 
    init: function(type, flavour, layers, price, occasion) {
        this.type       =   type;
        this.flavour    =   flavour;
        this.layers     =   layers;
        this.price      =   price;
        this.occasion   =   occasion;
    },

    // Describe the pastry 
    describe: function() {
        let description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        
        return description;
    },

    bake: function() {
        let baked = "The " + this.type + " is placed in an oven for 7 minutes. It's done!";
        
        return baked;
    },

    eat: function() {
        let eaten = "First you take the " + this.type + " and cut it up into a slice. Then enjoy!";

        return eaten;
    }
};

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1 , "R20", "breakfast");

let cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "R330", "birthday");

console.log(muffin.bake());
console.log(muffin.describe());
console.log(cake.bake());
console.log(cake.describe());
console.log(cake.eat());


// The method init() takes the initial prototype values of the pastry as parameter. The pastry creation code is therefore reduced to only 2 steps:

// The actual creation, with the Pastry object as a prototype,

// The initialization of its properties, using the function init() on the Pastry Object.


console.log("--- END LECUTRE ---");

//* ===     C H A L L E N G E       ===* //


/* ==
    --- T E X T     G A M E ---

-   CREATE A GAME THAT HAS CHARACTERS, PLAYERS AND ENEMIES.
-   A PLAYER CAN ATTACK AN OPPENENT, REVERSED IS ALSO TRUE.
-   IF ATTACK, THE CHARACHTER SEES THEIR LIFE POINTS DECREASED FROM THE FORCE       OF THE ATTACK.
-   IF A CHARACTER LOOSES A NUMBER OF COINS, THE GAME ENDS/OR LOOSES.

CREATE A PROTOYPE (CHARACTER),
USING PARAMETERS USING (NAME, HEALTH, FORCE,);
WE HAVE TO ATTACK,
USE CONDITION STATEMENTS (IF THIS PLAYER IS HIT BY FORCE DOES HEALTH INCREASE/DECREASE);

    *USING EVERYTHING WE USED IN JS UP TILL TODAY*



    ----//
        objective of game: destroy persons life;
        life = 100;
        coins = 0;

        gameplay:
            give options to kick punch special move slap.
            if player gives you (kick) - 10 lifepoints;

            if openenet is defeated, player get 50 points,
            if player is defeated, player looses poiints

== */

let welcome     =   alert("WELCOME TO THE WONKY-GAMES!");
    message     =   alert("-- decription of the game -- ");
    roundOne    =   "ROUND 1: FIGHT!";
    roundTwo    =   "ROUND 2: FIGHT!";
    roundThree  =   "ROUND 3: FIGHT!";

    character   =   {

        init:function(name, health, type, force) {
            this.name = name;
            this.health = health;
            this.type   = type;
            this.force  = force;
        }
    }
    


/* ==== 

    --- P R O J E C T   B R I E F ---

    *   an entrepunal nate is building a brand new eco-comerce website and he wants it to look more modern, beautiful, sleek and minimalistic at the same time.
    *   the idea is to have a more responsive interactive and more engaging wesbtie
    *   by having a website like that, it will help users/visitors stay longer on the sight and hence they willl purchaces from the sight.
    *   there will be a design provided where you can work from.
    *   using what you have learnt so far (everything),  You have to create a website that looks exactly like the design that is provided.
    *   name classes arcodingly.

    --- W H A T S   E X P E C T E D ---

    *   create a new repo named "furnittare" "homemade" "fashion". (CHOOSE ONE OF THE 3).
    *   create a well structured folder (appropriate files that you need).
    *   always remeber to push changes constantly
    *   include a beautifully styled readme
    *   make sure you commit and push changes everytime you make a chnage
    *   website must be responsive
    *   clear and neat scss selections working across mobile, tabler and desktop
    *   the homepage with the banner image featured product section new collection (male & female);
    *   about page include team photos (should be optimized for web and be high resolution) not be over 300KB
    *   images will be provided
    *   lookbook page (how you can pair your fashion [jeans with sweater]); (SUBTLE ZOOM IN EFFECT WHEN HOVER) [WHEN CLICKED THE IMAGE SHOULD POP UP]
    *   contact page must have a google map showing the location of company showing a contact form exaclty as the mock-up
    *   the navbar must be static or fixed and/or must be sticky.
    *   will be provided with header logo
    *   back to top button should be able to take you to the top [smooth scroll]
    *   shop page using object constructor to create the store
    *   a visitor or a user must be able to click on a add to cart button so the product is added in users cart
    *   product will have a method which will add it to the cart
    *   a basket will show the number of projects that were added and the total cost
    *   if a total is added up, user should be able to remove items from cart
    *   objects are great programming tools can be used to create methods, constructor functions, prototypes, prepend, might be the best way to make the shop page.


    *   HOME, SHOP, CONTACT, ABOUT , LOOKBOOK   * [NUMBER OF PAGES FOR THE SIGHT]

    --- D U E  D A T E ---

     * FIRST SUBMISSION 
        15TH MARCH 2019

        
=== */