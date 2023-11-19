const newBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector(".cancel");
const add = document.querySelector(".add");
const addedBooks = document.querySelector(".added-books");
const form = document.querySelector("form");
const bookshelf = [];

newBook.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

cancel.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBookElement(book, index) {
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("input");
  read.setAttribute("type", "checkbox");
  const readlabel = document.createElement("label");
  readlabel.textContent = "Read";
  const readBox = document.createElement("div");
  readBox.append(read, readlabel);
  const addedBook = document.createElement("div");
  addedBook.setAttribute("data-index", `${index}`);
  addedBook.append(title, author, pages, readBox);

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.checked = book.read;

  return addedBook;
}

function printBookshelf() {
  for (let i = 0; i < bookshelf.length; i++) {
    addedBooks.appendChild(createBookElement(bookshelf[i], i));
  }
}

function addBookToShelf(book) {
  bookshelf.push(book);
}

add.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const tempBook = new Book(title, author, pages, read);
  addBookToShelf(tempBook);
  addedBooks.appendChild(createBookElement(tempBook, bookshelf.length - 1));
});
