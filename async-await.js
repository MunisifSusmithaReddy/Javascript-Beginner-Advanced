

/**
 * What is async?
 * What is await?
 * Examples
 * Error handling
 * Async await Vs Promise.then.catch
 */

// Async is a keyword which we will used infront of a function

function getName() {
    return new Promise((resolve, reject) => resolve('Hello All'))
}

const data = getName();

// console.log('getName', data.then(res => console.log(res)));

const api = new Promise((resolve, reject) => resolve('Hello Async Await'))

async function getName1() {
  const result = await api;
//   console.log('result', result);
}

const data2 = getName1();

// console.log('getName1', data2);


const api2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('10 Seconds')
    }, 10000)
});

const api3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('5 Seconds')
    }, 5000)
});

function getData2() {
    console.log('Before');
    api2.then(res => {
        console.log('getData2', res); // JS Engine is not waiting
    });
    console.log('After');
}

// getData2();


async function getName3() {
    console.log('Before Async')
    const response = await api2;
    console.log('After Async');

    const reponse1 = await api3;
    console.log('After Async 1');
}

// getName3();


const fetchData = fetch('https://jsonplaceholder.typicode.com/posts');

async function fetchTheData() {
    try {
    const response = await fetchData;
    const newR = await response.json();
    console.log('newR', newR);
    }
    catch(err) {
        console.log('>>>', err);
    }
}

fetchTheData();