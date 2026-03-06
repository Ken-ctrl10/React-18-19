// // Promises JS:

// const promise = new Promise((resolve, rejected) => {
//   setTimeout(()=>{
//     // resolve("Operation Successful")}
//     rejected("Operation Failed");
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//Real-world usage of promises: // can't successfully run due to corporate device issues.
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   }); 

//Asynch Await

function fetchData(){
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((result) => {
      console.log(result);
    })
    
    .catch((err) => {
      console.error(err);
    }); 
}

async function fetchDataAsync(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();

    console.log(json);
  }
  catch(err) {
    console.error(err);
  }
}

fetchData();