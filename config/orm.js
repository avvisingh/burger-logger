const connection = require('./connection');

const selectAll = () => {
    query = `SELECT * FROM burgers`;
    // connection.query()
}

const insertOne = () => {
    let userInput;
    query = `INSERT INTO burgers (name) VALUES ("${userInput}")`
}

const updateOne = () => {
    let toUpdate;
    let query = `UPDATE burgers SET devoured = 0 WHERE id = ${toUpdate}`;
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}