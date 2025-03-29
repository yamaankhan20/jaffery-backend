const {where} = require("sequelize");
const { ContactForm} = require('../../models');

contact_form = async ( req, res )=>{
    const { first_name, last_name, email, phone_number, subject, message } = req.body;
    if (!first_name) return res.status(400).json({ error_message: "First name is required" });
    if (!last_name) return res.status(400).json({ error_message: "Last name is required" });
    if (!email) return res.status(400).json({ error_message: "Email is required" });
    if (!phone_number) return res.status(400).json({ error_message: "Phone number is required" });
    if (!subject) return res.status(400).json({ error_message: "Subject type is required" });
    if (!message) return res.status(400).json({ error_message: "Message is required" });
    try{
        const create_form = await ContactForm.create({
            first_name,
            last_name,
            email,
            phone_number,
            subject,
            message
        });
        res.status(201).json({ message: "Contact form submitted successfully!"});

    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

get_contact_form = async ( req, res )=>{
    try{
        const all_contacts = await ContactForm.findAll({
            order: [
                ['id', 'DESC'],
            ]
        });
        res.status(200).json({ message: "All Contact forms!", data: all_contacts});

    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

module.exports = { contact_form, get_contact_form };