
const connection = require('./connection')

async function findData(colName, query) {
    // Reference the "people" collection in the specified database
    let db = await connection()
    let col = db.collection(colName);
    // Find and return the document
    return await col.find({ "hashtags": query }).toArray()

}

module.exports = findData