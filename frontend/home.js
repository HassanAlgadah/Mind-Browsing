async function start () {
    let eyes
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
    let request = await fetch(`http://127.0.0.1:5000/${key}`)
    let data = await request.json()
    return data
}


window.addEventListener('load', start, false);