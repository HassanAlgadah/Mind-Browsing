async function start () {
    let eyes
    let smile
    let surprise
    let frown
    let preveyes = null
    let div = document.getElementById('box')

    window.setInterval(()=>{
        

        getdata().then(data=>{
            console.log(data['fac'])


            ///////////////////////////////////////// eyes action wink right , wink left , blink

            if(eyes !== data['fac'][0]) {
                eyes = data['fac'][0]
                console.log(eyes)
                // right wink
                if (eyes === 'winkR') {
                    keyPress('tab')

                }

                //left wink
                if (eyes === 'winkL'){
                    keyPress('enter')

                }

            }
            //smile
            if (smile !== data['fac'][0] ){
                smile = data['fac'][0]
                console.log(smile)
                if(smile === 'smile') {
                    keyPress('backpage')
                }
            }
              //surprise
            if(surprise !== data['fac'][0]){
                surprise = data['fac'][0]
                console.log(surprise)
                if(surprise === 'surprise'){
                      keyPress('refresh')
                }


            }
              //frown
            if(frown !== data['fac'][0]){
                frown = data['fac'][0]
                console.log(frwon)
                if(frown === 'frown') {
                    keyPress('page down')
                }
            }





            ///////////////////////////////////////////////////

        })
    },10)




}








async function getdata(){
    let request = await fetch('http://127.0.0.1:4000/data')
    let data = await request.json()
    return data
}

async function keyPress(key){
    await fetch(`http://127.0.0.1:5000/${key}`)
}


window.addEventListener('load', start, false);