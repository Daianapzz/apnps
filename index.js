const express = require('express')
const app = express()

app.get('/',function(rec,res){
    res.send("Olá Daiana")
})

app.get('/mensagem',function(rec,res){
    res.send("Essa mensagem é automática")
})

app.get('/layout',function(rec,res){
    res.send("Esse é o novo layout")
})

app.listen(3000,function () {
    console.log("conexão inicializada")
})