const express = require('express');
const {authentication} = require('../app/middleware/authentication');
const router = express.Router();

const authRoutes = require('./auth');
const adminRoutes = require('./admin');

router.use('/api/auth', authRoutes);
router.use('/api/admin', adminRoutes);
router.get('/api/profile', authentication, (req, res) => {
    res.json({ message: `Welcome ${req.user.name}` });
  });

// Root Route
router.get("/", (req, res) => {
  res.send("Welcome to the Express.js app!");
});

module.exports = router;