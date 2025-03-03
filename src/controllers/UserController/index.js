const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require("../../models");
const { Op } = require("sequelize");


const get_all_users = async (req, res) => {
    const { role } = req.query;
    const user_id = req.user?.userId;

    try {
        const users = await User.findOne({ where: { id: user_id } });

        if (!users) {
            return res.status(404).json({ error_message: "User not found" });
        }

        // const target_role = users.role === "seeker" ? "helper" : "seeker";
        // const industryTypes = Array.isArray(industry_type) ? industry_type : [industry_type];

        const all_users = await User.findAll({
            where: {
                role: role,
                // IndustryType: {
                //     [Op.or]: industryTypes.map(type => ({
                //         [Op.like]: `%${type}%`
                //     }))
                // }
            }
        });

        return res.status(200).json({ users: all_users });

    } catch (e) {
        res.status(500).json({ error_message: e.message });
    }
};


module.exports = { get_all_users };