const express = require('express');
const app = express();
const UserController = require('../app/Http/Controllers/V1/Admin/UserController');
const UserValidation = require('../app/Validation/Admin/UserValidation');
// const { body, validationResult } = require("express-validator");


const router = express.Router();

router.get('/user', UserController.index);
router.get('/user/:id',  UserController.show);
router.post('/user', UserValidation,UserController.store);
router.put('/user/:id',  UserController.update);
router.delete('/user/:id',  UserController.destroy);

module.exports = router;
