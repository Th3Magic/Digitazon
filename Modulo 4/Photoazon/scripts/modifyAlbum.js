async function modifyAlbum() {

    let res = await fetch('http://localhost:3000/albums/Secondo%20Album', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            hashtags: ["#secondo232", "prova", "#terzo"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

modifyAlbum()