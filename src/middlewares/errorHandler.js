module.exports = (err, req, res, next) => {
    if (err.status === 403) {
        return res.status(403).json({ message: "You are not allowed to access this page" });
    }
    res.status(err.status || 500).json({ message: err.message || "Something Went Wrong" });
};
