const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


get_all_users = async ( req, res )=>{
    const { industry_type } = req.query;
    const user_id = req.user?.userId;
    try{

        const users = await User.findOne({ where: { id: user_id } });
        const target_role = users.role === 'seeker' ? 'helper' : 'seeker';
        const all_users = await User.findAll(
            {
                where: {
                    role: target_role,
                    IndustryType: industry_type
                }
            });
        return res.status(200).json({ users: all_users });
    }catch (e){
        res.status(500).json({error_message: e.message });
    }
};


module.exports = { get_all_users };