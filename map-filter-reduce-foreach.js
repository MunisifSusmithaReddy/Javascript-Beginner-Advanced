
// map


// multiple by two
let numbers = [2, 3, 4, 5];
// ES5
let numbersOutput = numbers.map(function (value, index) {
    return value * 2;
});

// ES6

// let numbersOutput = numbers.map(value => value * 2); 
// console.log('<<<', numbersOutput);

// let numbersOutput = [];

// numbers.forEach(function(value) {
//    numbersOutput.push(value);
// });


// Filter

// let numbersOutput = numbers.filter(function (value) { // [4]
//     return value == 4 || value == 3;
// });

// let numbersOutput1 = numbers.filter(function (value) { // [2, 3, 5]
//     return value != 4;
// });

// console.log('filter', numbersOutput, numbersOutput1);

// reduce

// let numbersOutput = numbers.reduce((output, val) => {
//   output.push(val * 4);
//   return output;
// }, []); // [8, 12, 16, 20]

console.log('reduce', numbersOutput);

const names = [
  { name: 'abc', age: 26},
  {name: 'abc1', age: 30},
  {name: 'abc2', age: 26},
  {name: 'abc2', age: 26},
  {name: 'abc2', age: 26},
  {name: 'abc2', age: 26},{name: 'abc2', age: 36}
];

// { 26: 2, 30: 1}

let output = {};

for (i=0; i < names.length; i++) {
  if (output[names[i].age]) {
    //  output[names[i].age]++;
     if(output[names[i].age] == 2) {
      break;
     }
     output[names[i].age]++;
  } else {
    output[names[i].age] = 1;
  }
}
console.log('output', output);

let output1 = names.reduce((output, value) => {
  if (output[value.age]) {
     output[value.age]++;
  } else {
    output[value.age] = 1;
  }
  return output;
}, {})

console.log('output', output1);


// [2, 2, 3, 3, 4, 5, 6, 6] => [2, 3, 4, 5, 6]

let array = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = [];

// array.map(val => {
//   if(newArray.indexOf(val) < 0) {
//     newArray.push(val);
//   }
// })

// array.map(val => {
//   if(!newArray.includes(val)) {
//     newArray.push(val);
//   }
// })

// for(let i =0; i<array.length; i++) {
//   if(newArray.indexOf(array[i]) < 0) {
//     newArray.push(array[i]);
//   }
// }


newArray = [...new Set(array)];


console.log('newArray', newArray);
// [2, 3, 4, 5, 6] => [6]