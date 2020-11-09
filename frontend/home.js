let frown, smile, surprise, winkL, winkR;
async function getDatatFromDataBase() {

    let userId = await firebase.auth().currentUser.uid;
    let get_Data = firebase.database().ref('user/' + userId);

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
    let surpriseCount = 0, smileCount = 0, winkLCount = 0, winkRCount = 0, frownCount = 0, timer = 0, neutral = 0

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('here')
            getDatatFromDataBase().then(()=>{

            window.setInterval(() => {


                getData().then(data => {
                    // console.log(data['fac'])
                    //
                    if (data['fac']) {

                        eyes = data['fac'][0]
                        upperface = data['fac'][1]
                        lowerface = data['fac'][3]

                        // right wink
                        if (eyes === 'winkR') {
                            winkRCount += 5
                        }
                        //left wink
                        else if (eyes === 'winkL') {
                            winkLCount += 5
                        }
                        //smile
                        if (lowerface === 'smile') {
                            smileCount++
                        }

                        //upper face
                        if (upperface === 'surprise') {
                            surpriseCount++
                        } else if (upperface === 'frown') {
                            frownCount++
                        }
                        if (eyes === 'neutral') neutral++
                        if (upperface === 'neutral') neutral++
                        if (lowerface === 'neutral') neutral++


                        // console.log(tab, enter, back_page, refresh, page_down, timer)

                        // console.log(`eyes: ${eyes}, upper face: ${upperface}, lower face: ${lowerface}`)

                        if (timer % 1000 === 0) {

                            let max_fac = Math.max(surpriseCount, smileCount, winkLCount, winkRCount, frownCount, neutral / 3)
                            // console.log(tab, enter, back_page, refresh, page_down)
                            console.log('max: ' + max_fac, 'neutral: ' + neutral / 3)
                            switch (max_fac) {
                                case surpriseCount:
                                    keyPress(surprise)
                                    break
                                case smileCount:
                                    keyPress(smile)
                                    break
                                case winkLCount:
                                    keyPress(winkL)
                                    break
                                case winkRCount:
                                    keyPress(winkR)
                                    break
                                case frownCount:
                                    keyPress(frown)
                            }
                            surpriseCount = 0, smileCount = 0, winkLCount = 0, winkRCount = 0, frownCount = 0, timer = 0, neutral = 0
                        }

                        timer += 10
                    }

                })

            }, 10)
        })
        } else { console.log('erooooor')
        }
    })



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