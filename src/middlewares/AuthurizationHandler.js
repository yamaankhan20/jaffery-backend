const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.path.startsWith('/api/v1/auth') || req.path.startsWith('/api/v1/contact') || req.path.startsWith('/src/public/uploads')) {
        return next();
    }

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error_message: 'Unauthorized! access denied' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error_message: 'Invalid Token!' });
    }
};
