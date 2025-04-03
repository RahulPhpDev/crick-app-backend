'use strict';
const bcrypt = require('bcrypt');
const Roles = require("../../../Models/Roles");
const Users = require("../../../Models/Users");
const { body, validationResult } = require('express-validator');


class UserController {
    async index(req, res) {
        const collection = await Users.find();
        res.send(collection).status(200);
    }

    async store(req, res) {
        const { name, email, password, role } = req.body || {};
    
        const roleId = await Roles.findOne({name :role}).exec();
        // console.log(roleId._id)
        const obj = {
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role: roleId,
            isActive: true,
        }
        try {
            
            // const response =  await Users.create([obj]);
            const user = new Users(obj);

            // const hashedPassword = await bcrypt.hash(password, 10);
            await user.save();
            res.send(user).status(201);
        } catch ( err ) {
            console.log('err...........', err);
            res.send(res).status(400);
        }
     
    }

    async show(req, res) {
        const collection = await Users.findById(req.params.id);
        try {
            console.log('data...........', collection);
            res.send(collection).status(200);
        }
        catch (err){
            console.error('Error:', err);
        }
    }

    async update(req, res) {
        const { name, email, password, role } = req.body || {};
        const collection = await Users.findById(req.params.id);
        
        try {
           const result = await collection.updateOne({
                name
            });
            res.send(result).status(200);
        } catch(err) {
            console.log(err);
        }
    }

    async destroy(req, res) {
       try {
        const collection = await Users.findById(req.params.id);
        const result =await collection.deleteOne();
        res.send(result?.deletedCount).status(201);
       } catch (err) {
        console.log('err in delete',err);
       }

    }
};

module.exports = new UserController();