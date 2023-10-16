// // create error object
// const error = new Error("Something went wrong!");

// console.log(error.stack);
// console.log(error.message);

// // use of throw keyword
// throw new Error("Something is wrong again!");

const {CustomError} = require("./custom_error.js");
// throw new CustomError("Auth failure");

// handle exception using try and catch
function doSomething()
{
    // const x = 4+5;
    // console.log(x);  
    // return x;
    const data = fetch("localhost:300/api");
}

// try {
//     doSomething()
// }   catch(e) {
//     console.log("Error occurred in fetching data");
//     console.log(e);
// }

// // uncaught exception handling
// process.on("uncaughtException", (err) => {
//     console.log("There is an uncaught error");
//     process.exit(1);
// })

// doSomething();

// // excpetions with promises
// const promise = new Promise((resolve, reject) => {
//     if(false)
//     {
//         resolve(doSomething());
//     }
//     else
//     {
//         reject(doSomething());
//     }
// })

// promise.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log("Error Occurred");
//     console.log(err);
// })

// handling exceptions using async-await
const someFunction = async () => {
    try {
        await doSomething();
    }  catch(e) {
        throw new CustomError(err.message);
    }
};

someFunction();