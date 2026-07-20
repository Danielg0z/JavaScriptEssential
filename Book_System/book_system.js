let books = [];


/*
Data collection and validation: The function retrieves the values entered by the 
user in the HTML input fields for book name, author name, book description, and 
number of pages. It uses document.getElementById('elementId').value to access 
these values. The code then checks if all fields have been filled (bookName,
authorName, bookDescription) and ensures that pagesNumber is a valid number 
(using !isNaN(pagesNumber)). If any field is empty or if pagesNumber is not
a valid number, an alert prompts the user to fill in all fields correctly.

Creating a book object: Upon successful validation, the function creates
a book object containing properties such as name, authorName, bookDescription, 
and pagesNumber, storing the user-entered data. This book object is then pushed
into the books array, effectively adding the new book to the collection.

Display and clear: After adding the book, the showbooks() function is called
to update the display with the newly added book details. Additionally, the 
clearInputs() function is invoked to reset all input fields, providing a clean
interface for the user to add another book without manual clearing of previous inputs.
 */

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    if (bookName && authorNmae && bookDescriptiton && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function showbooks(){
    const booksDiv = books.map((book, index) =>`<h1>book Number: ${index +1}</h1>
    <p><strong>Book Name
}