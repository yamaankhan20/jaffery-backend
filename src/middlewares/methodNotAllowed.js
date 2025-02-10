module.exports = (req, res, next) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "This Method Is Not Allowed!"
        });
    }
    next();
};
