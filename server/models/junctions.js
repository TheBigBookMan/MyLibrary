const CreateBookLibraryJunction = `
    CREATE TABLE BookLibrary(
        bookId INT,
        libraryId INT,
        PRIMARY KEY (bookId, libraryId),
        FOREIGN KEY (bookId) REFERENCES Book(bookId),
        FOREIGN KEY (libraryId) REFERENCES Library(libraryId)
    );
`;

module.exports = [CreateBookLibraryJunction];
