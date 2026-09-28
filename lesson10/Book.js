class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Title shouldn't be an empty string");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Author shouldn't be an empty string");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Year must be a positive number");
        }
        this._year = value;
    }

    static getOldestBook(books) {
    return books.reduce((oldest, current) =>
        current.year < oldest.year ? current : oldest
    );
}

    printInfo() {
        console.log(`${this.title} by ${this.author}, ${this.year}`);
    }
}

export default Book;