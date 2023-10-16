// using setTimeout
console.log("start operation");

function sleep(ms) {
    console.log("operation is running");
    setTimeout(() => {
        console.log("operation is done");
    }, ms);
}

sleep(2000);

console.log("start another operation...");

// using callback functions
function task(cb) {
    setTimeout(() => {
        cb(null, "This is the server data");
    }, 1000);
}

task((err, data) => {
    if(err) {
        throw err;
    }
    else {
        console.log(data);
    }
})

// using promises
const promise = new Promise((resolve, reject) => {
    console.log("async operation execution");
    if(true) {
        const person = { name: "Puneet"};
        resolve(person);
    }
    else {
        const error = { errCode: "1001"};
        reject();
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("clean up");
});

// using async-await
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();