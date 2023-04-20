const express = require('express');
const path = require ('path');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entrerios.html'))
})

app.get('/register.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entreriosregister.html'))
})

app.get('/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entrerioslogin.html'))
})
$(document).ready(function() {

    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function() {
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".left").click(function() {
        $("#myCarousel").carousel("prev");
    });

});