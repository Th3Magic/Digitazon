async function modifyPhoto() {

    let res = await fetch('http://localhost:3000/albums/Secondo%20Album/photos/Yosemite3', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "Yosemite3",
            hashtags: ["#modificaphoto2"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

modifyPhoto()