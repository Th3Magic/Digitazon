
const connection = require('./connection')
const updatePhoto = require('./update-photoData')

async function update(colName, albumName, photoname, modifier) {
    let db = await connection()
    let col = db.collection(colName);
    const date = new Date().toJSON()
    if (photoname) {
        updatePhoto(colName, albumName, photoname, modifier)
    } else {
        await col.updateOne({ "name": albumName }, { $set: { ...modifier, lastModified: date.replace("T", " - ").slice(0, 21) } });
    }
}

module.exports = update