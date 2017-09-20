// WARM UP!

// 1
//  WRITE A CONSTRUCTOR FUNCTION
// Write a basic Dog() constructor function with the following properties set to 'true'; barks and wagstail.
// Write your code below:

class Dog {
    constructor(bark,chew){
        this.bark = true;
        this.chew = chew;

    }
}

let fido = new Dog(true,"doll")
console.log(fido.bark);
console.log(fido.chew);


// Create an instance of Dog.
// Define your variable, fido.
// Write your code below:


// Print fido barks. It should print true.
// It should prin, true.
// Write your code below:


// 2
// CLASS DECLARATION
// Declare a DogClass class.
// It should have the following properties set to 'true'; barks and wagstail.
// Write your code below:

class Dogclass {
    constructor (bark,wagstail){
        this.bark = false;
        this.wagstail = true;

    }
}


// Create an instance of DogClass()
// Define your variable, spike
// Write your code below:

let spike = new Dogclass (true, true)
console.log(spike.bark)
console.log("Spike is waging: " +spike.wagstail)


// Print spike wagstrail.
// It should print, true.
// Write your code below:


// 3
// EXTENDS
// DECLARE A SUBJECT CLASS
// It should have the property of 'requiresBooks' set to 'true'.
// Write your code below:


class Book {
    constructor(requiresBooks,page){
        this.requiresBooks = true;
        this.page = page
    }
}

let textbook = new Book ("true","200")
console.log(textbook.requiresBooks)
console.log("textbook pages: " + textbook.page)



// DECLARE A SUB-CLASS MATH
// Extend from Subject
// It should inherit requiresBooks
// It should have an additional property of 'requiresCalculator ' set to 'true'.
// Write your code below:

class Math extends Book {
    constructor (requiresBooks,page,requiresCalculator) {
        super(requiresBooks,page)
        this.requiresCalculator = true;
    }
}


// Declare a 'math' variable, creating an instance of Math
// Write your code below:

let mathbook = new Math ("true","150","true")
console.log(mathbook.requiresBooks)
console.log(mathbook.page)
console.log(mathbook.requiresCalculator)
console.log(mathbook)

//Print math
// It should print: "Math {requiresBooks: true, requiresCalculator: true}"
// Write your code below:


//4
// SUB-CLASS
// DECLARE A SUBCLASS OF GEOMETRY
// Extend from Math
// It should have an additional property of 'requiresRuler' set to true.
// Write your code below:

class Geometry extends Book {
    constructor(requiresBooks,page, requiresCalculator, requiresRuler) {
        super(requiresBooks,page,requiresCalculator)
        this.requiresRuler = true
    }

}

let geobook = new Geometry ("true","230","true","true")

// Declare a 'geometry' variable, creating an instance of Geometry
// Write your code below:


// Print geometry
// It should print: "Geometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true}"
// Write your code below:
console.log(geobook)


//5
// SUB-CLASS
// DECLARE A SUBCLASS OF TRIGONOMETRY
// Extend from Geometry
// The constructor should have a parameter of 'specialCalculator'
// Set the value of specialCalculator equals to specialCalculator so you can pass this value when you create an instance of Trigonometry.
// Write your code below:

class Trigonometry extends Book {
    constructor(requiresBooks,page,trigonometry){
        super(requiresBooks,page)
        this.trigonometry = trigonometry
    }
}

// Declare a 'trigonometry' variable, creating an instance of Trigonometry, passing in an argument of 'Ti-83'.
// Write your code below:

const tribook = new Trigonometry ("true", "120","Ti-83")
console.log(tribook)
// Print trigonometry
// It should pring: "Trigonometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true, specialCalculator: "Ti-83"}"
// Write your code below:


//6
// SUB-CLASS
// DECLARE A SUBCLASS OF CALCULUS
// Extend from Trigonometry
// The constructor should have a parameter of 'requiresRuler' and 'specialCalculator'
// In should inherit 'requiresRuler' and 'specialCalculator'
// Calculus does not require a ruler, so set that property to 'false'. It does require a special calculator, the 'Ti-89'
// Write your code below:

// Declare a variable of 'calculus', creating an instance of Calculus, passing in a boolean of 'false'
// Write your code below:


class Calculus extends Book {
    constructor(requiresRuler,page,specialCalculator){
        super(requiresRuler)
        this.specialCalculator = true;
    }
}
// Print calculus
// It should print: "Calculus {requiresBooks: true, requiresCalculator: true, requiresRuler: false, specialCalculator: "Ti-89"}"
// Write your code below:

const calbook = new Calculus("false","300","true")
console.log(calbook)
