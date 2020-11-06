const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/',function(rec,res){
    res.render('index.ejs',[])
})

app.get('/usuarios',function(rec,res){
    res.render('usuarios.ejs',{usuarios:[
        {nome:'Diego',email:'diegoporcelis@gmail.com'},
        {nome:'Maria',email:'maria@gmail.com'},
        {nome:'Tereza',email:'tereza@gmail.com'},
        {nome:'Ana',email:'ana@gmail.com'}
    ]})
})

app.get('/add',function(rec,res){
    res.render('adiciona.ejs')
})

app.post('/add',function(rec,res){
    console.log("Nome: "+rec.body.txtNome + " Email> "+rec.body.txtEmail)
})

app.listen(3000,function () {
    console.log("conexão inicializada")
})