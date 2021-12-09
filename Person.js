class Person{
    //function for object creation
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    greeting(){
        console.log("Hi!, I'm " + this.firstname + " " + this.lastname + "!")
    }
}