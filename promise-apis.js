

const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('P1 Success');
     reject('P1 Fail')
    }, 3000);
})

const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    //    resolve('P2 Success');
    reject('P2 Fail')
    }, 7000);
})

const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('P3 Success');
        // reject('P3 Fail')
    }, 2000);
})

Promise.all([P1, P2, P3]).then(res => {
    console.log('Promise All Success', res);
})
.catch(err => {
    console.log('Promise All fail', err);
})

// Promise.allSettled([P1, P2, P3]).then(res => {
//     console.log('Promise All Settled Success', res);
// })
// .catch(err => {
//     console.log('Promise All Settled fail', err);
// })

// Promise.race([P1, P2, P3]).then(res => {
//     console.log('Promise race Success', res);
// })
// .catch(err => {
//     console.log('Promise race fail', err);
// })

Promise.any([P1, P2, P3]).then(res => {
    console.log('Promise any Success', res);
})
.catch(err => {
    console.log('Promise any fail', err);
    console.log('Promise any fail', err.errors);
})
