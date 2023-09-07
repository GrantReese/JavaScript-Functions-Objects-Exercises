// Exercise 5: Advanced Object Methods

// Implement an object named library with properties for
//  books (as an array) and methods to addBook(bookName) 
//  and removeBook(bookName).
// Ensure that the methods work correctly to add and remove books
//  from the books array.
// Commit: Once you've successfully implemented this object and its
//  methods, commit the solution with the message:
//   "Completed Exercise 5: Advanced Object Methods".


const library1 = {
    books: [ ],
    addBook: function (bookName){
        this.books.push(bookName)
    },
    removeBook: function (bookName){
        this.books.splice(this.books.indexOf(bookName),1)
    }
        
    };

library1.addBook("war and peace");
library1.addBook("American Gods");
library1.addBook("Tribe of Mentors");
library1.addBook("The Last Ronin");
library1.addBook("The Hobbit");

console.log(library1.books);

library1.removeBook("war and peace");
library1.removeBook("American Gods");



// let library = [
//     {
//         "title": "War and Peace",
//         "author": "Tolstoy"

//     }

// ]

// let book = {
//     "title": "American Gods",
//     "author": "Neil Gaiman"
// }
// library.push(book);

// let book = {
//     "title": "Tribe of Mentors",
//     "author": "Tim Ferris"
// }
// library.push(book);

// console.log (library);