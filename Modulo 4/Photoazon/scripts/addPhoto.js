async function addPhoto() {

    let res = await fetch('http://localhost:3000/albums/Secondo%20Album/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "Yosemite3",
            hashtags: ["#landscapes", "#yosemite3"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

addPhoto()