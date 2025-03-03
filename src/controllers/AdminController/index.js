const {where} = require("sequelize");
const { BusinessNetwork } = require('../../models');

get_business_network = async (req, res)=> {
    try {
        const Business_Network = await BusinessNetwork.findAll(
            {
                where: {
                    status: "pending",
                }
            }
        );

        res.status(201).json({ message: "All Ads!", data: Business_Network });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}

get_all_business_network = async (req, res)=> {
    try {
        const Business_Network = await BusinessNetwork.findAll();

        res.status(201).json({ message: "All Ads!", data: Business_Network });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}

approve_business_network = async (req, res)=> {
    const { id } = req.body;

    try {
        const [updatedRows] = await BusinessNetwork.update(
            { status: "approved" },  // Update status to "approved"
            {
                where: { id }, // Filter by user_id
            }
        );

        if (updatedRows > 0) {
            res.status(200).json({ message: "Business network approved successfully!" });
        } else {
            res.status(404).json({ message: "No matching records found to update." });
        }

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}
reject_business_network = async (req, res)=> {
    const { id } = req.body;

    try {
        const [updatedRows] = await BusinessNetwork.update(
            { status: "rejected" },
            {
                where: { id },
            }
        );

        if (updatedRows > 0) {
            res.status(200).json({ message: "Business network rejected successfully!" });
        } else {
            res.status(404).json({ message: "No matching records found to update." });
        }

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}

module.exports = { get_business_network, get_all_business_network, approve_business_network, reject_business_network };