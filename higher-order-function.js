

function a() {
    console.log("a clicked");
}

function b(a) { // b is a higher order function, a is a callback function
    a();
}

b(a);

const sides = [1, 2, 3, 4]; // index -> 0, 1, 2, 3

// const multiplyByTwo = function(sideParams, value) { // [2, 4, 6, 8]
//     let output = [];
//     for (let i = 0; i < sideParams.length; i++) {
//       output.push(sideParams[i] * value);
//     }
//     return output;
// }

// console.log(multiplyByTwo(sides, 2));

// console.log(multiplyByTwo(sides, 3));

// console.log(multiplyByTwo(sides, 4));



// const multiplyByThree = function(sideParams) { // [3, 6, 9, 12]
//     let output = [];
//     for (let i = 0; i < sideParams.length; i++) {
//       output.push(sideParams[i] * 3);
//     }
//     return output;
// }

// console.log(multiplyByThree(sides));


// const multiplyByFour = function(sideParams) { // [3, 6, 9, 12]
//     let output = [];
//     for (let i = 0; i < sideParams.length; i++) {
//       output.push(sideParams[i] * 4);
//     }
//     return output;
// }

// console.log(multiplyByFour(sides));

//DRY - Don't Repeat Yourself

// Optimize the code


const multiplyByTwo = function (value) { // [2, 4, 6, 8]
    return value * 2;
}

const multiplyByThree = function (value) { // [2, 4, 6, 8]
    return value * 3;
}

const calculateValues = function (sideParams, logic) { // This is our own implementation of map
    let output = [];
    for (let i = 0; i < sideParams.length; i++) {
        output.push(logic(sideParams[i]));
    }
    return output;
}

console.log(calculateValues(sides, multiplyByTwo));
console.log(calculateValues(sides, multiplyByThree));

console.log('>>>', sides.map(function (value) { // [2, 4, 6, 8]
    return value * 2;
})); // sides.calculateValues(multiplyByTwo)

// Prototypal Inheritance

let arr = [1, 2, 3, 4];

let object = {
    name: 'Susmitha',
    city: 'Chandler'
}

let object2 = {
    name: 'M'
};

object2.__proto__ = object; // Never do

Array.prototype.calculateValues = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log('<<<<<<', sides.calculateValues(multiplyByTwo));


