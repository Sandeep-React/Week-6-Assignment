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