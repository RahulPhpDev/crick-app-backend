const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = {
    name: String,
    email:  {
        type: String,
        required: true,
        unique: true
      },
    password: String,
    role: String,
    isActive: Boolean,
    created_at: {type: Date, default: Date.now},
}
// Hash the password before saving it to the database
// schema.pre('save', async function (next) {
//     const user = this;
//     if (!user.isModified('password')) return next();
  
//     try {
//       const salt = await bcrypt.genSalt();
//       user.password = await bcrypt.hash(user.password, salt);
//       next();
//     } catch (error) {
//       return next(error);
//     }
//   });

  
const Schema = mongoose.Schema(schema);

module.exports = new mongoose.model('Users', Schema);