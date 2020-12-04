const WebSocket = require('ws');
const emotiv = require('./cortex_code_example')
const express = require('express')
const app = express()
const socket = require('socket.io');


let server = app.listen(4000,()=>console.log('emotiv is up'))

let socketUrl = 'wss://localhost:6868'
let user = {
    "license":"",
    "clientId":"RhvjApk4KRpG2hmlmO806LgGe2Exx9hzbX4AbbsQ",
    "clientSecret":"RoLRROjHmzALrWrhOv0MSIhjGNkucog34LnDhEp0pkziukCkcVw4DNFgZoA46pnDHut2BlectA9PplEXEijlJpaZAdl0gjjP41jt3eOh5ulu4CoAYDbjKXzwmg7Snu3B",
    "debit":1
}
let api = new emotiv.api(user,socketUrl)

api.live('Nawaf')

api.sub(['fac','dev'])


app.get('/data',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.send(JSON.parse(api.data))
})
app.get('/dev',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log('dev is ', api.dev)
    return res.send(JSON.parse(api.dev))
})

