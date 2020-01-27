class BookList {

  constructor(readBooksNumber, notReadBooksNumber, nextBook, currentBook, lastBook, bookArray = []) {
    this.readBooksNumber = readBooksNumber;
    this.notReadBooksNumber = notReadBooksNumber;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookArray = bookArray;
  }
  addBook(book) {
    this.bookArray.push(book);
    return;
  }
  finishCurrentBook() {
    this.currentBook.read = true;
    this.currentBook.readDate = Date.now();
    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;
    this.nextBook = nextbook(this.bookArray);
    console.log(this.nextBook);
  }
}

function nextbook(books) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].read == false) {
      return books[i];
    }
  }
  return;
}

class Book {
  constructor(title, genre, author, read = false, readDate = '') {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}
let A = new Book('AT', 'Ag', 'AA', false, '67/90/0');
let B = new Book('BT', 'Bg', 'BA', true, '67/890/0');
let C = new Book('CT', 'Cg', 'CA', false, '67/9987980/0');
let D = new Book('DT', 'Dg', 'DA', false, '97/90/0');

let BL = new BookList(1, 3, D, C, A, [A, B, C, D]);
BL.finishCurrentBook();