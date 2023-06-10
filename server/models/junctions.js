const CreateBookLibraryJunction = `
    CREATE TABLE BookLibrary(
        bookId INT,
        libraryId INT,
        PRIMARY KEY (bookId, libraryId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId),
        FOREIGN KEY (libraryId) REFERENCES Library(libraryId)
    );
`;

const CreateBookAuthorJunction = `
    CREATE TABLE BookAuthor (
        bookId INT,
        authorId INT,
        PRIMARY KEY (bookId, authorId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId),
        FOREIGN KEY (authorId) REFERENCES Author(authorId)
    );
`;

module.exports = [CreateBookLibraryJunction, CreateBookAuthorJunction];
