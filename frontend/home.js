async function start () {
    let eyes
    let smile
    let surprise
    let frown
    let upprtface
    let preveyes = null
    let div = document.getElementById('box')

    window.setInterval(()=>{
        

        getdata().then(data=>{
            // console.log(data['fac'])


            ///////////////////////////////////////// eyes action wink right , wink left , blink

            if(eyes !== data['fac'][0]) {
                eyes = data['fac'][0]
                console.log(eyes)
                // right wink
                if (eyes === 'winkR') {
                    keyPress('tab')

                }

                //left wink
                else if (eyes === 'winkL'){
                    keyPress('enter')

                }

            }
            //smile
            else if (smile !== data['fac'][3] ){
                smile = data['fac'][3]
                console.log(smile)
                if(smile === 'smile') {
                    keyPress('back_page')
                }
            }
              //surprise
            else if(upprtface !== data['fac'][1]){
                upprtface = data['fac'][1]
                console.log(upprtface)
                if(upprtface === 'surprise'){
                      keyPress('refresh')
                }
                else if(upprtface === 'frown') {
                    keyPress('page_down')
                }


            }



            ///////////////////////////////////////////////////

        })
    },100)




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