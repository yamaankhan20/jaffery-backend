const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


get_all_users = async ( req, res )=>{
    const { industry_type } = req.params;
    try{

        res.status(200).json({ message: `sa` });
    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};


module.exports = { get_all_users};