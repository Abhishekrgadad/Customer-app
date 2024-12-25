const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error){
        console.log("server is listening successfully at port :", PORT);
    }
        
    else{
        console.log('An error occured:', error);
    }
    })
       