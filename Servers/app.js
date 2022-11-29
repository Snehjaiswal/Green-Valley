const express = require('express')
const app = express()







const port  = 6600
app.listen(port,(err)=>{
if(err){
    console.log("Server connection error",err);
}else{
    console.log("Server is connected on :",port);
}
})