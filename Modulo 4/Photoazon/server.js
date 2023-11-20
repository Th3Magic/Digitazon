const express = require('express')
const app = express()
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const select = require('./src/select-data')
const findData = require('./src/find')
const insert = require('./src/insert-data')
const update = require('./src/update-data')
const del = require('./src/delete-data')

async function validateAlbumName(req, res, next) {
    const albumName = req.params.albumName
    const result = await select("Albums", albumName)
    if (result) {
        next()
    } else {
        res.status(404).json({ error: true, msg: 'Album not found' })
    }
}

async function validatePhotoName(req, res, next) {
    const albumName = req.params.albumName
    const photoName = req.params.photoName
    const album = await select("Albums", albumName)
    const albumPhotos = album.photos
    if (albumPhotos.find(photo => photo.name == photoName)) {
        next()
    } else {
        res.status(404).json({ error: true, msg: 'Photo not found' })
    }
}

async function validateHashtag(req, res, next) {
    const hashtags = req.body.hashtags
    for (let i = 0; i < hashtags.length; i++) {
        if (!hashtags[i].startsWith("#")) {
            return res.status(400).json({ error: true, msg: 'Wrong hashtags syntax' })
        }
    }
    next()
}

async function albumAlreadyExists(req, res, next) {
    const albumName = req.body.name
    const album = await select("Albums", albumName)
    if (!album) {
        next()
    } else {
        res.status(400).json({ error: true, msg: 'Album already exists' })
    }
}

async function photoAlreadyExists(req, res, next) {
    const albumName = req.params.albumName
    const photoNameParams = req.params.photoName
    const photoName = req.body.name
    const album = await select("Albums", albumName)
    const albumPhotos = album.photos
    if (!albumPhotos.find(photo => photo.name == photoName) || photoName == photoNameParams) {
        next()
    } else {
        res.status(400).json({ error: true, msg: 'Photo already exists' })
    }
}

app.get('/albums', async (req, res) => {
    if (req.query.hashtag) {
        const hashtag = '#' + req.query.hashtag
        const result = await findData("Albums", hashtag)
        res.json(result)
    } else {
        const result = await select("Albums")
        res.json(result)
    }
})

app.post('/albums', albumAlreadyExists, async (req, res) => {
    const input = req.body
    const date = new Date().toJSON()
    const albumToAdd = {
        ...input, creationDate: date.replace("T", " - ").slice(0, 18),
        lastModified: date.replace("T", " - ").slice(0, 21)
    }
    const result = await insert("Albums", albumToAdd)
    res.status(200).json("Album added successfully")
})

app.get('/albums/:albumName', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const result = await select("Albums", albumName)
    res.json(result)
})

app.put('/albums/:albumName', validateAlbumName, validateHashtag, async (req, res) => {
    const albumName = req.params.albumName
    const modifier = req.body
    await update("Albums", albumName, null, modifier)
    res.status(200).json("Album modified successfully")
})

app.delete('/albums/:albumName', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    await del("Albums", albumName)
    res.status(200).json("Album deleted successfully")
})

app.get('/albums/:albumName/photos', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const result = await select("Albums", albumName)
    res.json(result.photos)
})

app.post('/albums/:albumName/photos', validateAlbumName, photoAlreadyExists, async (req, res) => {
    const albumName = req.params.albumName
    const input = req.body
    const date = new Date().toJSON()
    const photosToAdd = {
        ...input, creationDate: date.replace("T", " - ").slice(0, 18),
        lastModified: date.replace("T", " - ").slice(0, 21)
    }
    const result = await select("Albums", albumName)
    await update("Albums", albumName, null, { "photos": [...result.photos, photosToAdd] })
    res.status(200).json("Photo/s added successfully")
})

app.delete('/albums/:albumName/photos', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    await update("Albums", albumName, null, { "photos": [] })
    res.status(200).json("Photos deleted successfully")
})

app.put('/albums/:albumName/photos/:photoName', validateAlbumName, validatePhotoName, photoAlreadyExists, validateHashtag, async (req, res) => {
    const albumName = req.params.albumName
    const photoName = req.params.photoName
    const modifier = req.body
    await update("Albums", albumName, photoName, modifier)
    res.status(200).json("Photo modified successfully")
})

app.delete('/albums/:albumName/photos/:photoName', validateAlbumName, validatePhotoName, async (req, res) => {
    const albumName = req.params.albumName
    const photoName = req.params.photoName
    await update("Albums", albumName, photoName)
    res.status(200).json("Photo deleted successfully")
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
})