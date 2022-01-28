function myPromise(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x+2);
      }, 2000);
    });
  }
  
async function f1() {
    var x = await myPromise(10);
    console.log(x); 
}
f1();