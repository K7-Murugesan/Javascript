let url = "https://jsonplaceholder.typicode.com/users/123"
fetch(url)
  .then(response => {
    console.log( response.ok );
    // Handle the response (e.g., parse JSON, check status)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }
    return response.json(); // or response.text(), response.blob(), etc.
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.log('Fetch error:', error);
  });
// Here's a breakdown of the important parts:

// url: The URL of the resource you want to fetch.
// options (optional): An object containing various options for the fetch request, such as HTTP method (default is "GET"), headers, and more. This parameter is often used to customize the request.
// The fetch function returns a Promise that resolves to a Response object representing the response to the request. You typically chain .then() handlers to handle the response and process the data.

// In the first .then(), you can check if the response was successful using response.ok, and then use methods like response.json(), response.text(), or response.blob() to extract the data from the response, depending on the content type.
// In the second .then(), you can work with the data obtained from the response.
// The .catch() block handles any errors that occur during the fetch operation.
// Here's an example of making a simple GET request using the fetch method:


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });
/* You can also use the async/await syntax with 
    fetch for more concise and readable asynchronous code, 
    as shown in the previous response. */





