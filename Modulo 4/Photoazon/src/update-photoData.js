const connection = require('./connection')

async function updatePhoto(colName, albumName, photoName, modifier) {
    let db = await connection()
    let col = db.collection(colName);
    const date = new Date().toJSON()
    let newPhotos = []

    if (!modifier) {
        const album = await col.findOne({ "name": albumName })
        newPhotos = [...album.photos]
        newPhotos = newPhotos.filter(photo => photo.name != photoName)
        await col.updateOne({ "name": albumName }, { $set: { "photos": newPhotos } });
        await col.updateOne({ "name": albumName }, { $set: { lastModified: date.replace("T", " - ").slice(0, 21) } });
        return
    }

    if (modifier.photos && modifier.photos == []) {
        await col.updateOne({ "name": albumName }, { $set: modifier });
        await col.updateOne({ "name": albumName }, { $set: { lastModified: date.replace("T", " - ").slice(0, 21) } });
        return
    } else if (modifier.name && modifier.hashtags) {
        const { name, hashtags } = modifier
        const album = await col.findOne({ "name": albumName })
        let photoToModify = album.photos.find(photo => photo.name === photoName)
        let photoModified = { name, hashtags, lastModified: date.replace("T", " - ").slice(0, 21) }
        let indexItemToModify = album.photos.indexOf(photoToModify)
        newPhotos = [...album.photos]
        newPhotos[indexItemToModify] = photoModified
        await col.updateOne({ "name": albumName }, { $set: { "photos": newPhotos } });
        await col.updateOne({ "name": albumName }, { $set: { lastModified: date.replace("T", " - ").slice(0, 21) } });
        return
    }
}

module.exports = updatePhoto