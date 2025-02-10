const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


Register = async ( req, res )=>{
    const { name, email, password} = req.body;
    try{
        if(!name){
            res.status(401).json({error_message:"not found"})
        }
        res.status(200).json({ message: `${email}` });
    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

Login = async ( req, res )=>{
    const { email, password} = req.body;
    try{
        if(!email){
            res.status(400).json({error_message:"not found"});
        }
        res.status(200).json({ message: `${email}` });
    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

module.exports = { Register, Login };
