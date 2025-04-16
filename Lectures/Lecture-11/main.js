// Basic Promise

// var complete = false;

var promise = (complete)=>{
    return new Promise((resolve,reject)=>{
        console.log('Wait.. data fetching!!')
       setTimeout(()=>{
        if(complete){
            resolve('I am success!!');
        }else{
            reject('Something wrong!!');
        }
       },3000)
    });
}

let onComplete = (result)=>{
    console.log(result)
}

let unComplete = (error)=>{
    console.log(error)
}
promise(false).then(onComplete).catch(unComplete);
// console.log(promise);