const jwt = require('jsonwebtoken');
const User = require('../Http/Models/Users');

const authentication = async (req, res, next) => {
    const token = req.headers?.['authorization']?.split(' ')[1];
    console.log('token', token)
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
         console.log('decodedToken', decodedToken)
        const user = await User.findById(decodedToken.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        req.user = user;
        next();

    }
    catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
module.exports = { authentication };
