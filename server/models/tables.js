const CreateBookTable = `
    CREATE TABLE Book (
        bookId INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        starRating INT,
        numRatings INT,
        image VARCHAR(255),
        datePublished VARCHAR(255),
        numPages INT,
        description VARCHAR(255),
        haveRead BOOLEAN 
        );
`;

const CreateLibraryTable = `
    CREATE TABLE Library (
        libraryId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        numBooks INT,
        description VARCHAR(255)
    );
`;

const CreateAuthorTable = `
    CREATE TABLE Author (
        authorId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    );
`;

const CreateGenreTable = `
    CREATE TABLE Genre (
        genreId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    );
`;

module.exports = [
    CreateBookTable,
    CreateLibraryTable,
    CreateAuthorTable,
    CreateGenreTable,
];
