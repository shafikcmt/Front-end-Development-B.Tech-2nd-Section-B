// var promiseCall = function(data,msg){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log(`The ${msg} promise is resolved!!`);
//         resolve(data);
//        }, data*100);
//     })
// }
// var p1 = promiseCall(10, 'First');
// var p2 = promiseCall(20, 'Second');
// var p3 = promiseCall(30, 'Third');
// var p4 = new Promise(function(resolve,reject){
//     reject('The 4th promise is fail!!')
// })

// var p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The Second promise is resolved!!');
//         resolve(20)
//     },2000)
// });


// var p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The Third promise is resolved!!');
//         resolve(30)
//     },3000)
// });

// p1.then(()=>{

// }).catch(()=>{

// })
// p2.then.catch()
// p3.then.catch()

// var total = 0;
// Promise.all([p1,p2,p3,p4]).then((result)=>{
//     for(var i in result){
//         total += result[i];
//     }
//     console.log(`Result: ${result} `);
//     console.log(`Total: ${total} `);
// }).catch((error)=>{
//     console.log(`Error: ${error}`);
// })

var postURL = 'https://jsonplaceholder.typicode.com/posts';
var commentsURL = 'https://jsonplaceholder.typicode.com/comments';
var usersURL = 'https://jsonplaceholder.typicode.com/users';

var callPromise = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url).then(resolve).catch(reject)
        },3000)
    })
}

var p1 = callPromise(postURL);
var p2 = callPromise(commentsURL);
var p3 = callPromise(usersURL);

Promise.all([p1,p2,p3]).then((responses)=>{
    console.log(responses)
    return Promise.all(responses.map((res)=> res.json()))
})
.then((data)=>{
    console.log("Result:", data);
    var jsonstr = JSON.stringify(data);
    document.write(jsonstr)
})
.catch((error)=>{
    console.error("Error:", error);
})  
   


