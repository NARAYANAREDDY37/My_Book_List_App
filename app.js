// Book class: Represents a Book
class Book {
	constructor(title, author, isbn) {
		(this.title = title), (this.author = author), (this.isbn = isbn);
	}
}

// UI class: Handles UI tasks
class UI {
	static displayBooks() {
		const StoredBooks = [
			{
				titile: 'naa istam',
				author: 'RGV',
				isbn: '35656565'
			},
			{
				titile: 'naa istam2',
				author: 'RGV2',
				isbn: '356526565'
			}
		];

		const books = StoredBooks;

		books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book) {
		const list = document.querySelector('#book-list');

		const row = document.createElement('tr');

		row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

		list.appendChild(row);
	}

	static deleteBook(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}

// store class: Handles storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	// Prevent actual submit action
	e.preventDefault();

	// Get the values form the form
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// Validate
	if (title === '' || author === '' || isbn === '') {
		alert('Please fill in all the fields');
	} else {
		// instantiate the Book class
		const book = new Book(title, author, isbn);

		// Add Book to UI
		UI.addBookToList(book);

		// clear form fields
		UI.clearFields();
	}
});

// Event: Remove a book (form UI & Storage)
document.querySelector('#book-list').addEventListener('click', (e) => {
	UI.deleteBook(e.target);
});
