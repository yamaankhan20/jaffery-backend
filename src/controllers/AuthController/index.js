const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


Register = async ( req, res )=>{
    const { name, email, password, role, PhoneNumber, IndustryType, JobTitle, Description} = req.body;
    try{
        if (!name || !email || !password) {
            return res.status(400).json({ error_message: "Name, email, and password are required." });
        }
        const existingOne = await User.findOne({ where: { email } } );
        if(existingOne){
            return res.status(400).json({ error_message: "User Already Exist!" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            PhoneNumber,
            IndustryType,
            JobTitle,
            Description
        });

        res.status(201).json({ message: "User registered successfully!", user: newUser,});


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
