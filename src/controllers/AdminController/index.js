const {where} = require("sequelize");
const { BusinessNetwork, BusinessGroup, User } = require('../../models');

get_business_network = async (req, res)=> {
    const {status_all} = req.query;
    try {
        const Business_Network = await BusinessNetwork.findAll(
            {
                where: {
                    status: status_all,
                }
            }
        );

        res.status(200).json({ message: "All Ads!", data: Business_Network });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}
get_all_business_network = async (req, res)=> {
    try {
        const Business_Network = await BusinessNetwork.findAll();

        res.status(200).json({ message: "All Ads!", data: Business_Network });

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



get_business_group = async (req, res)=> {
    const {status_all} = req.query;
    try {
        const Business_group = await BusinessGroup.findAll(
            {
                where: {
                    status: status_all,
                }
            }
        );

        res.status(200).json({ message: "All Business!", data: Business_group });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}
get_all_business_group = async (req, res)=> {
    try {
        const Business_group = await  BusinessGroup.findAll();

        res.status(200).json({ message: "All Ads!", data: Business_group });

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}
approve_business_group = async (req, res)=> {
    const { id } = req.body;

    try {
        const [updatedRows] = await BusinessGroup.update(
            { status: 1 },  // Update status to "approved"
            {
                where: { id }, // Filter by user_id
            }
        );

        if (updatedRows > 0) {
            res.status(200).json({ message: "Business group approved successfully!" });
        } else {
            res.status(404).json({ message: "No matching records found to update." });
        }

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}
reject_business_group = async (req, res)=> {
    const { id } = req.body;

    try {
        const [updatedRows] = await BusinessGroup.update(
            { status: 2 },
            {
                where: { id },
            }
        );

        if (updatedRows > 0) {
            res.status(200).json({ message: "Business group rejected successfully!" });
        } else {
            res.status(404).json({ message: "No matching records found to update." });
        }

    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
}


delete_ads = async (req, res)=> {
    const { id } = req.body;
    try {

        await BusinessNetwork.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json({ message: "Business network deleted successfully!" });
    }catch (e) {
        res.status(500).json({ error_message: e.message });
    }
};

delete_user = async (req, res)=> {
    const {id} = req.body;
    try {

        await User.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json({message: "User deleted successfully!"});
    } catch (e) {
        res.status(500).json({error_message: e.message});
    }
};

delete_business = async (req, res)=> {
    const {id} = req.body;
    try {

        await BusinessGroup.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json({message: "Business deleted successfully!"});
    } catch (e) {
        res.status(500).json({error_message: e.message});
    }
};

module.exports = {
    get_business_network,
    get_all_business_network,
    approve_business_network,
    reject_business_network,
    get_business_group,
    get_all_business_group,
    approve_business_group,
    reject_business_group,
    delete_ads,
    delete_user,
    delete_business
};