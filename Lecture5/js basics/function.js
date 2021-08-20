// Hoisting

console.log(beta())

function alpha () {
    return "A"
}

console.log(beta())

function beta () {
    return "B"
}

let gamma = function () {
    return "C"
}

console.log(beta())
console.log(gamma())

// Scoping Let vs Var

{
    var c = 2
    let d  = 3
}
console.log(c)
// console.log(d)

// Polymorphism 

function area (height, width) {
    // console.log('h = ' + height)
    // console.log('w = ' + width)

    // if(width === undefined) {
    //     return Math.PI * height ** 2
    // }
    
    if(!width) {
        return Math.PI * height ** 2
    }



    return height * width
}


console.log(area(3, 4))
console.log(area(4))


function hello() {
    // let arguments = 'string xxxxx'

    console.log('hello world ' + arguments[0] + arguments[1])
}

hello(1, 2)
hello('Bitan ', 'Atarthy')