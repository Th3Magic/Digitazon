async function deletePhoto() {

    let res = await fetch('http://localhost:3000/albums/Secondo%20Album/photos/Yosemite4', {
        method: 'DELETE'
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

deletePhoto()