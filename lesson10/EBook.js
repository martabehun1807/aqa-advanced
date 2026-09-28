import Book from "./Book.js";

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("File format shouldn't be an empty string");
        }

        this._fileFormat = value;
    }
    static fromBook(book, fileFormat) {
        return new EBook(
            book.title,
            book.author,
            book.year,
            fileFormat
    );
}

    printInfo() {
        console.log(
            `${this.title} by ${this.author}, ${this.year}, format: ${this.fileFormat}`
        );
    }
}

export default EBook;