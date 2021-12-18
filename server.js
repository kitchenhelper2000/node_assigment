const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 1003
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

app.use(express.json());

app.get('/',(request,response)=>{
    response.status(200).json({message:'Hello Welcome to my todo API'});
});

// importing todoController
const usercontroller = require('./Controller/usercontroller');

app.post('/user',usercontroller.addUser);
app.get('/user',usercontroller.getAllUser);
app.patch('/user/:userId',usercontroller.updateUserById);
app.delete('/user/:userId',usercontroller.deleteUserById);
app.get('/user/:userId',usercontroller.getUserById);


// listening to request on localhost port 8020
app.listen(1003,() => {
    console.log('Welcome to our world');
    // connecting the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('Database is connected');
    })
    .catch(function (error){
        console.log(`Database is not connected ${error}`);
        
    });
});
