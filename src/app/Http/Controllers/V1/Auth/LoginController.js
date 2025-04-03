const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();
const User = require('../../../Models/Users');
class LoginController {

  async login(req, res, next) {
        const {email, password} = req.body || {};
       
        try {
            const user = await User.findOne({email});
            console.log(user)
            if (!user) {
                return res.status(401).json({message: 'Invalid email'});
            }
            console.log('password', {password, pass: user.password})
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({message: 'Invalid password'});
            }
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined!");
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (err) {
            console.log(err)
            next(err);
        }
    }

}
module.exports =new LoginController;
