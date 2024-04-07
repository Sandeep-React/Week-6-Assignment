// ############# Solution to Question 1 ##############

const students = [
    { name: "Alice", grades: [80, 75, 90] },
    { name: "Bob", grades: [85, 90, 88] },
    { name: "sandeep", grades: [100, 90, 98] },

];

students.forEach(student => {
    // Calculate the sum of grades
    const sum = student.grades.reduce((total, grade) => total + grade, 0);

    // Calculate the average grade
    const averageGrade = sum / student.grades.length;

    // Add the averageGrade property to the student object
    student.averageGrade = averageGrade;
});

console.log(students);

// ############# Solution to Question 2 ##############

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.99 },
    { title: "Sorry you are not my type", author: "Sudeep Nagarkar", price: 199},
  ];
  
  function formatBooks(books) {
    return books.map(book => `${book.title}: ${book.price}`);
  }
  
  const formattedBooks = formatBooks(books);
  console.log(formattedBooks);

  // ############# Solution to Question 3 ##############

  const purchases = [
    { item: "Shoes", price: 89.99 },
    { item: "Headphones", price: 49.99 },
    {item : "Smart Phone", price: 100},
  ];
  
  function calculateTotal(purchases) {
    return purchases.reduce((total, purchase) => total + purchase.price, 0);
  }
  
  const totalAmountSpent = calculateTotal(purchases);
  console.log(` Your total Amount Spent is ${totalAmountSpent}`);

   // ############# Solution to Question 4 ##############

   const employees = [
    { name: "Alice", department: "Engineering", salary: 60000 },
    { name: "Bob", department: "Marketing", salary: 55000 },
    { name: "Tom", department: "Finance", salary: 95000 },
    { name: "Jerry", department: "Engineering", salary: 85000 },
    
  ];
  
  function filterEmployees(employees) {
    return employees.filter(employee => employee.department === "Engineering" && employee.salary > 50000);
  }
  
  const filteredEmployees = filterEmployees(employees);
  console.log(filteredEmployees);

