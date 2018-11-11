function myFetch(url) {
    //return a promise
    let myPromise = new Promise((resolve, reject) => {

        let status = true;

        //if everything was successful then resolve
        if(status) {
            resolve();
        } else {
            reject();
        }
        //else reject
    })
}

myFetch(true).then(() => {
    console.log("success");
}).catch(() => {
    console.log("rejected");
})