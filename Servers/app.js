const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptons = {
	origin: "http://localhost:8080/"
		};
app.use (cors(corsOptions));

// parse requests of content-type - application/json

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));

//simple route
app.get ("/", (req, res) => {
res.json({message: "Welcome to Turing.com"})
});




const port  = 6600
app.listen(port,(err)=>{
if(err){
    console.log("Server connection error",err);
}else{
    console.log("Server is connected on :",port);
}
})