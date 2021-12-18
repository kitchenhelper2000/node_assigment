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

// importing usercontroller
const userController = require('./Controller/userController');

app.post('/user',userController.addUser);
app.get('/user',userController.getAllUser);
app.patch('/user/:userId',userController.updateUserById);
app.delete('/user/:userId',userController.deleteUserById);
app.get('/user/:userId',userController.getUserById);


// listening to request on localhost port 1003
app.listen(PORT,() => {
    console.log('Welcome to our world',PORT);
    // connecting the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('Database is connected');
    })
    .catch(function (error){
        console.log(`Database is not connected ${error}`);
    });
});
