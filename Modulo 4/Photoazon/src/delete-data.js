
const connection = require('./connection')

async function del(colName, albumName) {
    let db = await connection()
    const col = db.collection(colName);

    // Delete the document into the specified collection        
    const deleteResult = await col.deleteOne({ "name": albumName });
    return deleteResult
}

module.exports = del