import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book(
    "The Little Prince",
    "Antoine de Saint-Exupéry",
    1943
);

const book2 = new Book(
    "Harry Potter",
    "J. K. Rowling",
    1997
);


const ebook1 = new EBook(
    "Mathematics",
    "Steven King",
    2023,
    "PDF"
);

const oldestBook = Book.getOldestBook([book1, book2, ebook1]);
const ebook2 = EBook.fromBook(book1, "PDF");

console.log(book1.title);

book2.year = 2000;
console.log(book2.year);

ebook1.fileFormat = "EPUB";
console.log(ebook1.fileFormat);

book1.printInfo();
book2.printInfo();
ebook1.printInfo();
oldestBook.printInfo();
ebook2.printInfo();
