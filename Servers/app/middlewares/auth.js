/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:05 am
 */


"use strict"
const jwt = require('jsonwebtoken')
const UserModel = require('../models/Login.model')
require('dotenv').config()
 

// const auth = (req, res, next) => {
//     try {
//         const token = req.header("Authorization")
//         if(!token) return res.status(400).json({msg: "Invalid Authentication."})

//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//             if(err) return res.status(400).json({msg: "1 Invalid Authentication."})

//             req.user = user
//             next()
//         })
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// }
class auth {
    // Protected Route in change password
    async chaacngePasswordmiddleware(req,res,next){
        let token ;
        const { authorization } =req.headers;
        if(authorization  && authorization.startWith('Bearer') ){}
    try{
        // Get token from header
        token = authorization.split(' ')[1]
        
        // varift token
        const { userID} =jwt.verify('hampagalnhihebhaiya')    

        // Get user from token
        req.user = await UserModel.findById(userID).select('-password')
        next()
    }catch(err){
        res.status(401).send({"status":"failed",msg:"Unothorised user,no token"})
        // console.log(err);
    }
    
    }
}

module.exports =new auth()