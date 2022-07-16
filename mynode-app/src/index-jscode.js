function add(a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))

///object declaration
class Greet {
    constructor() {

    }
    sayGreet() {
        return 'Greet'
    }
}
let greet = new Greet()
console.log(greet.sayGreet())

//literal pattern
let employee = {
    id:1,
    name:'Subramanian'
}
console.log(employee)