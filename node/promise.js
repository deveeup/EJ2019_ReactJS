const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() < 0.5){
      resolve("hi w...")
    }else {
      reject(new Error("hi error"))
    }
  }, 2000)
});

promise
  .then(msg => msg.toUpperCase())
  .then(msg => console.log("message", msg))
  .catch(err => console.log("error", err));

  