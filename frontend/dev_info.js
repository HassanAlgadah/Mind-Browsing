function Hedsetstatus() {

    let battery = document.getElementById('Battery')
    let connection = document.getElementById('Connection')
    let battry
    let signal
    console.log("sss")


    window.setInterval(() => {


        getData().then(data => {
            console.log(data)
            if (data['dev']) {
                battry = data['dev'][0] //battery from api
                signal = data['dev'][1] // signal from api

                if (battry == 0) {
                    battery.innerHTML = "&#xf244"// change icon
                }
                if (battry == 1) {
                    battery.innerHTML = "&#xf243"// change icon
                }
                if (battry == 2) {
                    battery.innerHTML = "&#xf242"// change icon
                }
                if (battry == 3) {
                    battery.innerHTML = "&#xf241"// change icon
                }
                if (battry == 4) {
                    battery.innerHTML = "&#xf240"// change icon
                }
                if (signal == 0) {
                    connection.innerHTML = "no connection"
                }

                if (signal == 1) {
                    connection.innerHTML = "&#xf294"
                }
            }


        })

    }, 1000)

}

async function getData() {
    let request = await fetch('http://127.0.0.1:4000/dev')
    return await request.json()
}

window.addEventListener('load', Hedsetstatus, false);