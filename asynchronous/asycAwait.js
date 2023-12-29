// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function example() {
//     console.log('Start', new Date().getSeconds());

//     await delay(2000); // Pause execution for 2 seconds

//     console.log('End', new Date().getSeconds());
// }
// example();

///In fetch method

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      console.log( response.headers.keys() );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();