 
 function Food (type, servings, time, price, venue) {
     this.type = type;
     this.servings  =   servings;
     this.time  =   time;
     this.price =   price;
     this.venue =   venue;
 }

 Food.prototype.describe    =   function () {
    let description = "Good day, you will be going to " + this.venue + " to eat some " + this.type + " food at " + this.time + " for only " + this.price + ", you can serve " + this.servings;
    return description 
 }

    let mcdonald   = new Food ("junk", 4, "noon", "R70", "Mcdonalds" );
    let spur       = new Food ("posh", 10, "8:00 PM", "R180", "Spur");

 console.log(mcdonald.describe());
 console.log(spur.describe());

 