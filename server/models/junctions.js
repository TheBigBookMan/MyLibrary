const CreateBookLibraryJunction = `
    CREATE TABLE BookLibrary(
        bookId INT,
        libraryId INT,
        PRIMARY KEY (bookId, libraryId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId) ON DELETE CASCADE,
        FOREIGN KEY (libraryId) REFERENCES Library(libraryId) ON DELETE CASCADE
    );
`;

const CreateBookAuthorJunction = `
    CREATE TABLE BookAuthor (
        bookId INT,
        authorId INT,
        PRIMARY KEY (bookId, authorId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId) ON DELETE SET NULL,
        FOREIGN KEY (authorId) REFERENCES Author(authorId) ON DELETE SET NULL
    );
`;

const CreateBookGenreJunction = `
    CREATE TABLE BookGenre (
        bookId INT,
        genreId INT,
        PRIMARY KEY (bookId, genreId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId) ON DELETE SET NULL,
        FOREIGN KEY (genreId) REFERENCES Author(authorId) ON DELETE SET NULL
    );
`;

module.exports = [
    CreateBookLibraryJunction,
    CreateBookAuthorJunction,
    CreateBookGenreJunction,
];
