
const connection = require('./connection')

async function select(colName, albumName) {
    // Reference the "people" collection in the specified database
    let db = await connection()
    let col = db.collection(colName);

    // Find and return the document
    return document = albumName ? await col.findOne({ "name": albumName }) :
        await col.find({}).toArray()

}

module.exports = select
