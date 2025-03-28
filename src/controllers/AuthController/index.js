const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, BusinessGroup } = require("../../models"); // Import from models/index.js
const {where} = require("sequelize");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");


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

Login = async ( req, res ) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error_message: "User Doesn't Exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error_message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).json({
            message: "Login successful!",
            user_details: {
                role: user.role,
                industry: user.IndustryType
            },
            AuthToken: token
        });
    } catch (e) {
        return res.status(500).json({ error_message: e.message });
    }
};


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
Google_login = async ( req, res ) => {
    const { token } = req.body;
    try {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload(); // Extract user details
        const email = payload.email;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error_message: "User Doesn't Exist!" });
        }


        const Auth_Token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).json({
            message: "Login successful!",
            user_details: {
                role: user.role,
                industry: user.IndustryType
            },
            AuthToken: Auth_Token
        });
    } catch (e) {
        return res.status(500).json({ error_message: e.message });
    }
};


Business_Register = async ( req, res )=>{
    const { name, email, password, IndustryType, Description, website_url} = req.body;
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
            role:"helper",
            IndustryType,
            JobTitle:"business",
            Description,
            PhoneNumber:''
        });

        const Business_Group = await BusinessGroup.create({
            user_id: newUser.id,
            title: name,
            description: Description,
            website: website_url,
            status: 0
        });



        res.status(201).json({ message: "User registered successfully!", user: Business_Group,});


    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

module.exports = { Register, Login, Google_login,Business_Register };
