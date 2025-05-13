

let firstObject = {
    name: '',
    college: {
        branch: ''
    },
    country:  {
        city: ''
    }
}

// shallow copy
// let secondObject = Object.assign({}, firstObject); // Object.assign(target, source); ES5

// ES6
// let secondObject = { ...firstObject };


// secondObject.name = 'Susmitha';
// secondObject.country.city = 'Arizona';
// secondObject.college.branch = "CSE"

// console.log('firstObject', firstObject);

// console.log('secondObject', secondObject);

// deep copy

console.log(JSON.parse(JSON.stringify(firstObject)));
let secondObject = JSON.parse(JSON.stringify(firstObject));
secondObject.name = 'Susmitha';
secondObject.country.city = 'Arizona';
secondObject.college.branch = "CSE"

console.log('firstObject', firstObject);

console.log('secondObject', secondObject);