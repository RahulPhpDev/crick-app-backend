const { body, validationResult } = require("express-validator");
const UserValidation =[
    body("name")
      .trim()
      .notEmpty().withMessage("Username is required")
      .isLength({ min: 13 }).withMessage("Username must be at least 3 characters"),
  
    body("email")
      .trim()
      .isEmail().withMessage("Invalid email format"),
  
    body("password")
      .trim()
      .isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];

  module.exports = UserValidation;