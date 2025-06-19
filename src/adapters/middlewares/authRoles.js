const isAdmin = (req, res, next) => {
    const roles = req.userRoles;

    if (!roles || !roles.includes('admin')) {
        return res.status(403).json({ message: 'Require admin role!' });
    }

    next();
};

module.exports = { isAdmin };
