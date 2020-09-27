async function start() {
    let upperface
    let smile
    let eyes
    let tab
    let enter
    let back_page
    let refresh
    let page_down
    let timer = 0


    window.setInterval(() => {


        getdata().then(data => {
            // console.log(data['fac'])
            if (timer % 1000 === 0) {
                let max_fac = Math.max(tab, enter, back_page, refresh, page_down)
                switch (max_fac) {
                    case tab:
                        keyPress('tab')
                        break
                    case enter:
                        keyPress('enter')
                        break
                    case back_page:
                        keyPress('back_page')
                        break
                    case refresh:
                        keyPress('refresh')
                        break
                    case page_down:
                        keyPress('page_down')
                }
            }


            ///////////////////////////////////////// eyes action wink right , wink left , blink

            eyes = data['fac'][0]
            console.log(eyes)
            // right wink
            if (eyes === 'winkR') {
                tab++
            }
            //left wink
            else if (eyes === 'winkL') {
                enter++
            }
            //smile
            smile = data['fac'][3]
            console.log(smile)
            if (smile === 'smile') {
                keyPress('back_page')
                back_page++
            }
            //surprise
            upperface = data['fac'][1]
            console.log(upperface)
            if (upperface === 'surprise') {
                keyPress('refresh')
                refresh++
            } else if (upperface === 'frown') {
                keyPress('page_down')
                page_down++
            }


        })
        timer++
    }, 10)




}


async function getdata() {
    let request = await fetch('http://127.0.0.1:4000/data')
    return await request.json()
}

async function keyPress(key) {
    await fetch(`http://127.0.0.1:5000/${key}`)
}


window.addEventListener('load', start, false);