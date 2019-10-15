const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() < 0.5){
      resolve('hi w...')
    }else{
      reject(new Error('hi error'))
    }
  }, 2000);
});

async function asyncAwait(){
  try{
    const msg = await promiseFunction();
    console.log('message', msg)
  }catch(err){
    console.log('error', err)
  }
}

asyncAwait();