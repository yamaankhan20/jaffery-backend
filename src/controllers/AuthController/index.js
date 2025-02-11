const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const {where} = require("sequelize");


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
        const user = await User.findOne({where: {email}});
        if(!user){
            res.status(400).json({error_message:"User Doesn't Exist!"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({ message: 'Invalid Credentials' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({
            message: "Login successful!",
            user_details: {
                role: user.role,
                industry: user.IndustryType
            },
            AuthToken: token
        });
    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

module.exports = { Register, Login };
