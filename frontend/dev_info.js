let battry
let signal
window.setInterval(() => {


    getData().then(data => {
        battry = data['dev'][0]
        signal = data['dev'][1]

    })

}, 60000)


async function getData() {
    let request = await fetch('http://127.0.0.1:4000/data')
    return await request.json()
}