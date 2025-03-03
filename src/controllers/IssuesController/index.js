const {where} = require("sequelize");
const {User, LegalAssistance, VirtualClinic, ProfessionNetwork, BusinessNetwork } = require('../../models');
const sendEmail = require('../../utils/Emails/FormIssuesMailer');

legal_issues = async ( req, res )=>{
    const { receiver_id, full_name, email, PhoneNumber, address, legal_issue, specific_issue, description, relevent_data } = req.body;
    const user_id = req.user?.userId;
    if (!full_name) return res.status(400).json({ error_message: "Full name is required" });
    if (!email) return res.status(400).json({ error_message: "Email is required" });
    if (!PhoneNumber) return res.status(400).json({ error_message: "Phone number is required" });
    if (!legal_issue) return res.status(400).json({ error_message: "Legal issue type is required" });
    if (!description) return res.status(400).json({ error_message: "Description is required" });
    try{
        const newLegalIssue = await LegalAssistance.create({
            receiver_id: receiver_id,
            user_id:user_id,
            full_name: full_name,
            email: email,
            PhoneNumber: PhoneNumber,
            address: address,
            legal_issue: legal_issue,
            specific_issue: specific_issue,
            description: description,
            relevent_data: relevent_data
        });

        const existingOne = await User.findOne({ where: { id:receiver_id } } );
        const current_user = await User.findOne({ where: { id: user_id } } );

        await sendEmail(existingOne.email, "Legal Assistance","legal-allience", newLegalIssue.get({ plain: true }));

        await sendEmail(current_user.email, "Legal Assistance","legal-allience", newLegalIssue.get({ plain: true }));
        res.status(201).json({ message: "Legal Assistance Submitted", data: existingOne });

    }catch (e){
        res.status(500).json({error_message: e.message});
    }
};

virtual_clinic = async (req, res) =>{
    const { receiver_id, gender, age, contact_info, location, Symptoms, duration_of_symptoms, pain_rating, existing_medical_conditions, active_medications_prescriptions } = req.body;
    const user_id = req.user?.userId;

    if (!gender) return res.status(400).json({ error_message: "Gender is required" });
    if (!age) return res.status(400).json({ error_message: "Age is required" });
    if (!contact_info) return res.status(400).json({ error_message: "Contact info is required" });
    if (!location) return res.status(400).json({ error_message: "Location is required" });
    if (!Symptoms) return res.status(400).json({ error_message: "Symptoms are required" });
    if (!duration_of_symptoms) return res.status(400).json({ error_message: "Duration of symptoms is required" });
    if (!pain_rating) return res.status(400).json({ error_message: "Pain rating is required" });
    if (!existing_medical_conditions) return res.status(400).json({ error_message: "Existing medical conditions are required" });
    if (!active_medications_prescriptions) return res.status(400).json({ error_message: "Active medications/prescriptions are required" });

    try{
        const newVirtualClinicRecord = await VirtualClinic.create({
            receiver_id,
            user_id,
            gender,
            age,
            contact_info,
            location,
            Symptoms,
            duration_of_symptoms,
            pain_rating,
            existing_medical_conditions,
            active_medications_prescriptions
        });

        const existingOne = await User.findOne({ where: { id:receiver_id } } );
        const current_user = await User.findOne({ where: { id: user_id } } );

        await sendEmail(existingOne.email, "Virtual Clinic","virtual-clinic", newVirtualClinicRecord.get({ plain: true }));

        await sendEmail(current_user.email, "Virtual Clinic","virtual-clinic", newVirtualClinicRecord.get({ plain: true }));
        res.status(201).json({ message: "Virtual clinic record created successfully", data: newVirtualClinicRecord });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
};

professional_network = async (req, res)=> {
    const { receiver_id, full_name, email, description } = req.body;
    const user_id = req.user?.userId;

    if (!user_id) return res.status(400).json({ error_message: "User ID is required" });
    if (!full_name) return res.status(400).json({ error_message: "Full name is required" });
    if (!email) return res.status(400).json({ error_message: "Email is required" });
    if (!description) return res.status(400).json({ error_message: "Description is required" });

    try {
        const newProfessionalNetwork = await ProfessionNetwork.create({
            receiver_id,
            user_id,
            full_name,
            email,
            description
        });
        const existingOne = await User.findOne({ where: { id:receiver_id } } );
        const current_user = await User.findOne({ where: { id: user_id } } );

        await sendEmail(existingOne.email, "Professional Network","professional-network", newProfessionalNetwork.get({ plain: true }));

        await sendEmail(current_user.email, "Professional Network","professional-network", newProfessionalNetwork.get({ plain: true }));
        res.status(201).json({ message: "Message submitted successfully", data: newProfessionalNetwork });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}

business_network = async (req, res)=> {
    const { title, description, image_url } = req.body;
    const user_id = req.user?.userId;

    if (!user_id) return res.status(400).json({ error_message: "User ID is required" });
    if (!title) return res.status(400).json({ error_message: "Title is required" });
    if (!image_url) return res.status(400).json({ error_message: "Image is required" });
    if (!description) return res.status(400).json({ error_message: "Description is required" });

    try {
        const BusinessNetwork = await BusinessNetwork.create({
            user_id,
            title,
            description,
            image_url,
            status: "pending"
        });

        res.status(201).json({ message: "Message submitted successfully", data: newProfessionalNetwork });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}

module.exports = { legal_issues, virtual_clinic, professional_network, business_network };