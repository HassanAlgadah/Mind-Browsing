
let battry
let signal



function Hedsetstatus() {
    
window.setInterval(() => {


    getData().then(data => {
        battry = data['dev'][0] //battery from api
        signal = data['dev'][1] // signal from api

         if(battry===0){
        let battery = document.getElementById('Battery')
        battery.innerHTML = "&#xf244"// change icon
    }
        if(battry===1){
         let battery = document.getElementById('Battery')
         battery.innerHTML = "&#xf243"// change icon
    }
         if(battry===2){
      let battery = document.getElementById('Battery')
         battery.innerHTML = "&#xf242"// change icon
    }
         if(battry===3){
        let battery = document.getElementById('Battery')
          battery.innerHTML = "&#xf241"// change icon
    }
        if(battry===4){
        let battery = document.getElementById('Battery')
          battery.innerHTML = "&#xf240"// change icon
    }
      if(signal===0){
          let connection = document.getElementById('Connection')
          connection.innerHTML=  "no connection"// change icon
      } 
  
      if(signal===1){
          let connection = document.getElementById('Connection')
          connection.innerHTML= "&#xf294"// change icon
      }


    })

}, 60000)

}
async function getData() {
    let request = await fetch('http://127.0.0.1:4000/data')
    return await request.json()
}
           // for check icon change 
//function connection (){ 
    //var c = 0
    //if(c==0){
      //  let connection = document.getElementById('Connection')
      //  connection.innerHTML=  "no connection"
   // } 

    //if(c==1){
      //  let connection = document.getElementById('Connection')
      //  connection.innerHTML= "&#xf294"
   // }
//}
connection();
Hedsetstatus();