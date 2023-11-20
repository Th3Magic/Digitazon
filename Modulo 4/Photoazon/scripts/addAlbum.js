async function addAlbum() {

    let res = await fetch('http://localhost:3000/albums', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "Terzo Album",
            photos: [],
            hashtags: ["#terzo", "#prova2"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

addAlbum()