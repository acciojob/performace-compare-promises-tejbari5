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

// You can write your code here

// Function to fetch data from an API
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to measure time taken by a promise 
async function measurePromiseTime(promiseFunction) {
    const startTime = performance.now();
    await promiseFunction();
    const endTime = performance.now();
    return endTime - startTime;
}

// Function to fetch data using Promise.all()
async function fetchAllData() {
    const promises = apiUrls.map(url => fetchData(url));
    await Promise.all(promises);
}

// Function to fetch data using Promise.any()
async function fetchAllData() {
    const promises = apiUrls.map(url => fetchData(url));
    await Promise.any(promises);
}

// Update the table with results
async function updateTable() {
    const allTime = await measurePromiseTime(fetchAllData);
    const anyTime = await measurePromiseTime(fetchAllData);

    document.getElementById('output-all').textContent = allTime.toFixed(2) + ' ms';
    document.getElementById('output-any').textContent = allTime.toFixed(2) + ' ms';
}

// Call updateTable() when the page loads
window.addEventListener('load', updateTable);