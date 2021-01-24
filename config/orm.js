const connection = require('./connection');

const selectAll = (tableName, callback) => {
    query = `SELECT * FROM ${tableName}`;
    connection.query(query, (error, results, fields) => {
        if (error) console.log('Oops, something went wrong! ' + error.sqlMessage || error.stack);
        callback(result);
    })
}

const insertOne = (tableName, callback) => {
    let userInput;
    query = `INSERT INTO ${tableName} (name) VALUES ("${userInput}")`
}

const updateOne = (tableName, callback) => {
    let toUpdate;
    let query = `UPDATE ${tableName} SET devoured = 0 WHERE id = ${toUpdate}`;
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}