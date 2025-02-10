const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


get_all_users = async ( req, res )=>{
    const { name} = req.body;
    try{

        res.status(200).json({ message: `${name}` });
    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};


module.exports = { get_all_users};