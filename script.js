// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
function fetchData(){

  const fetchPromises=apiUrls.map((url)=>fetch(url));

    // Start the timer for Promise.all
  const startTimeAll=performance.now();

   Promise.all(fetchPromises)
   .then(()=>{

     // Calculate the time taken for Promise.all
    const endTimeAll=performance.now();
    const timeTakenAll=endTimeAll-startTimeAll;

    // now we will put this result in table data

    let outputAll=document.getElementById('output-all');
    outputAll.innerText=`${timeTakenAll}ms`;
   })
   .catch((error)=>{
    console.log('something went wrong in Promise.all',error);
   })
   
     // Start the timer for Promise.any
     
     const startTimeAny=performance.now();
     
     Promise.any(fetchPromises)
     .then(()=>{

         // Calculate the time taken for Promise.any
         const endTimeAny=performance.now();
         const timeTakenAny=endTimeAny-startTimeAny;

          // now we will put this result in table data
          let outputAny =document.getElementById('output-any');
          outputAny.innerText=`${timeTakenAny}ms`;
     })
     .catch((error)=>{
      console.log('something went wrong n Promise.any',error);
     })
}

fetchData();
// You can write your code here