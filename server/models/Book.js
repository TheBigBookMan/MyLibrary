const CreateBookTable = `
CREATE TABLE IF NOT EXISTS Books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL);
`;

module.exports = CreateBookTable;
