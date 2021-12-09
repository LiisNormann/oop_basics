/*
const anna = new Person('Anna', 'Karutina')
console.log(anna)
anna.greeting()
anna.setAge(25)
console.log(anna.getAge())

const urmas = new Person('Urmas', 'Voevodin')
console.log(urmas)
urmas.greeting()

//create student class based object
let liis = new Student('Liis', 'Normann')
console.log(liis)
liis.greeting()
 */

/*
// Shape constructor
function Shape(name, sides, sideLength) {
    // atributes - fields
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    // functions - methods
    this.calcPerimeter = function(){
        // console.log(this.sides * this.sideLength)
        this.perimeter = this.sides * this.sideLength
        console.log(this.perimeter)
    }
}
*/

// object creation
let square = new Shape("square", 4, 5)
console.log(square)
let triangle = new Shape("triangle", 3, 3)
console.log(triangle)
// object method calling
square.calcPerimeter()
triangle.calcPerimeter() 


