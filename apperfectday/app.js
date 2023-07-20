'use strinct'
const path = require('path')
const express = require('express')
const { dirname } = require('path')
const bodyParser = require('body-parser')


//Renderizar pajina
const app = express()
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))


//req.body
app.use(bodyParser.urlencoded({extended:false}))

//fichero estaticos
const FicherosEstaticos = path.join(__dirname, 'public')
app.use(express.static(FicherosEstaticos))

app.get("/",function(req,res){
 res.render("principal",{})
});



app.listen(3000, function (err) {
  if (err) {
    console.error('No se puede inicializar el servidor : ' + err.message)
  } else {
    console.log('Servidor arrancado en el Puerto ' + 3000)
  }
})