const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/",function(req, res){
    res.render("index")
})

app.get("/consulta",function(req, res){
    res.render("consulta")
})

app.get("/editar",function(req, res){
    res.render("editar")
})


app.listen(8081, function(){
    console.log("Servidor ativo")
})
