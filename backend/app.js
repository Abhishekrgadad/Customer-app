const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3000;

//enable cors 
app.use(cors());

//enable json parser
app.use(express.json);

//route the customer api
const customerRoutes = require('./routes/customers');
app.use('/api/customers',customerRoutes);

app.get('/',(req,res) =>{
    res.send("Welcome to Customers API");
})

app.listen(PORT, (error) =>{
    if(!error){
        console.log("server is listening successfully at port :", PORT);
    }
        
    else{
        console.log('An error occured:', error);
    }
    })
       