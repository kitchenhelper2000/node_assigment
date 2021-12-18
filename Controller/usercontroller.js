const usermodel = require('../Model/userModel');



async function addUser(request,response){
try {
    const newUser = await usermodel.create(request.body);
    response.status(200).json(newUser);
} catch (error) {
    console.log('Something went wrong', error.message);
}
}

 async function getUserById(request,response){
    try{
        const get1User = await usermodel.findById(request.params.userId);
        response.status(200).json(get1User);
    } catch (error) {
        console.log('Something went wrong',error.message);
    }

}
async function getAllUser(request,response){
        try{
            const getAll = await usermodel.find();
            response.status(200).json(getAll);
        } catch (error) {
            console.log('Syntax error',error.message);
        }  

}

async function updateUserById(request,response){
    try{
        const update = await usermodel.findByIdAndUpdate(request.params.userId,request.body);
        response.status(200).json(update);
    } catch (error) {
        console.log('Something went wrong',error.message);
    }

}

async function deleteUserById(request,reponse){
    try{
         await usermodel.findByIdAndDelete(request.params.userId);
        reponse.status(200).json({message: 'user deleted'});
    } catch (error) {
        console.log('Syntax error',error.message);
    }

}

module.exports ={
    addUser,
    getUserById,
    getAllUser,
    updateUserById,
    deleteUserById
}