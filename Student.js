class Student extends Person {
    constructor(firstname, lastname, group) {
        super(firstname, lastname);
        this.group = group
    }

    greeting() {
        if(this.group === undefined){
            super.greeting();
        } else {
            console.log('Hi, I am ' + this.firstname + ' ' + this.lastname + ', I am from ' + this.group)
        }
    }
}