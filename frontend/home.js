var frown, smile, surprise, winkL, winkR;
function getDatatFromDataBase() {

    var userId = firebase.auth().currentUser.uid;
    var get_Data = firebase.database().ref('user/' + userId);

    get_Data.child("frown").on('value', snap => frown = snap.val());
    get_Data.child("smile").on('value', snap => smile = snap.val());
    get_Data.child("surprise").on('value', snap => surprise = snap.val());
    get_Data.child("winkL").on('value', snap => winkL = snap.val());
    get_Data.child("winkR").on('value', snap => winkR = snap.val());

}
async function start() {
    let upperface
    let lowerface
    let eyes
    let tab = 0, enter = 0, back_page = 0, refresh = 0, page_down = 0, timer = 0, neutral = 0







    window.setInterval(() => {
        getDatatFromDataBase();
        // console.log(frown);
        // console.log(smile);
        // console.log(surprise);
        // console.log(winkL);




        getData().then(data => {
            // console.log(data['fac'])
            //
            if (data['fac']) {

                eyes = data['fac'][0]
                upperface = data['fac'][1]
                lowerface = data['fac'][3]

                // right wink
                if (eyes === 'winkR') {
                    refresh += 5
                }
                //left wink
                else if (eyes === 'winkL') {
                    back_page += 5
                }
                //smile
                if (lowerface === 'smile') {
                    enter++
                }

                //upper face
                if (upperface === 'surprise') {
                    tab++
                } else if (upperface === 'frown') {
                    page_down++
                }
                if (eyes === 'neutral') neutral++
                if (upperface === 'neutral') neutral++
                if (lowerface === 'neutral') neutral++


                // console.log(tab, enter, back_page, refresh, page_down, timer)

                // console.log(`eyes: ${eyes}, upper face: ${upperface}, lower face: ${lowerface}`)

                if (timer % 1000 === 0) {

                    let max_fac = Math.max(tab, enter, back_page, refresh, page_down, neutral / 3)
                    // console.log(tab, enter, back_page, refresh, page_down)
                    console.log('max: ' + max_fac, 'neutral: ' + neutral / 3)
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
                    tab = 0, enter = 0, back_page = 0, refresh = 0, page_down = 0, timer = 0, neutral = 0
                }

                timer += 10
            }

        })

    }, 10)


}


async function getData() {
    let request = await fetch('http://127.0.0.1:4000/data')
    return await request.json()
}

async function keyPress(key) {
    console.log(key)
    await fetch(`http://127.0.0.1:5000/${key}`)
}


window.addEventListener('load', start, false);