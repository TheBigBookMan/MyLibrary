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

// ? create multiple tables for each thing i need to and export them all in an object and might need to do a loop of all the queries in executing them

module.exports = CreateBookTable;
