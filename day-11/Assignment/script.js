// console.log("Hello");

// const student = {
//   name: "Aman",
//   rollNumber: 101,
//   marks: {
//     Math: 80,
//     Science: 65,
//     English: 50,
//     History: 70,
//   },
//   getAverageMarks: function () {
//     let subjects = Object.values(this.marks);
//     console.log(subjects);
//     let totalMarks = subjects.reduce(function (total, cv, ci, arr) {
//       return total+cv;
//     },0);
//     return totalMarks / subjects.length;

//   },
//   checkPassOrFail: function () {
//     let average = this.getAverageMarks()
//     if (average> 40) {
//         return `${this.name} has passed with an average of ${average.toFixed(2)} marks.`;
//     }else{
//        return ` ${this.name} has passed with an average of ${average.toFixed(2)} marks.`;
//     }
//   },
// };
// console.log(student.getAverageMarks());
// console.log(student.checkPassOrFail());

const library = {
  books: {
    "Atomic Habits": { author: "James Clear", availableCopies: 3 },
    "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
  },
  borrowBook: function (bookName) {
    if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
      this.books[bookName].availableCopies--;
      console.log(`You borrowed "${bookName}" successfully`);
    } else {
      console.log(`Sorry, "${bookName}" is not available`);
    }
  },
  returnBook: function (bookName) {
    if (this.books[bookName]) {
      this.books[bookName].availableCopies++;
      console.log(`You returned "${bookName}".`);
    } else {
      console.log(`"${bookName}" does not belong to this library.`);
    }
  },
};
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);
library.returnBook("The Alchemist");
console.log(library.books["The Alchemist"].availableCopies);
