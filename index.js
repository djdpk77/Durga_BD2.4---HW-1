const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

let heights = [160, 175, 180, 165, 170];

let employees = [
  { name: 'Rahul', employeeld: 101, salary: 50000 },
  { name: 'Sita', employeeld: 102, salary: 60000 },
  { name: 'Amit', employeeld: 103, salary: 45000 },
];

let books = [
  { title: 'The God of Small Things', author: 'Arundhati Roy', pages: 340 },
  { title: 'The White Tiger', author: 'Aravind Adiga', pages: 321 },
  { title: 'The Palace of Illusions', author: 'Chitra Banerjee', pages: 360 },
];

//Function to sort heights in ascending order
function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}

// Endpoint 1: Sort an array of heights in ascending order
app.get('/heights/sort-ascending', (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsAscending);

  res.json(heightsCopy);
});

// Function to sort heights in descending order
function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}

// Endpoint 2: Sort an array of heights in descending order
app.get('/heights/sort-descending', (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsDescending);

  res.json(heightsCopy);
});

// Function to sort employees by salary in descending order
function sortEmployeesBySalaryDescending(employeel, employee2) {
  return employee2.salary - employeel.salary;
}

// Endpoint 3: Sort an array of employees by salary in descending order
app.get('/employees/sort-by-salary-descending', (req, res) => {
  let employeesCopy = employees.slice();
  employeesCopy.sort(sortEmployeesBySalaryDescending);

  res.json(employeesCopy);
});

// Function to sort books by pages in asscending order
function sortBooksByPagesAscending(bookl, book2) {
  return bookl.pages - book2.pages;
}

// Endpoint 4: Sort an array of books by pages in ascending order
app.get('/books/sort-by-pages-ascending', (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByPagesAscending);

  res.json(booksCopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
