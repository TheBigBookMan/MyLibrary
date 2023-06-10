const CreateBookTable = `
    CREATE TABLE Book (
        id INT PRIMARY KEY AUTO_INCREMENT,
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
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        numBooks INT,
        description VARCHAR(255)
    );
`;

module.exports = [CreateBookTable, CreateLibraryTable];
