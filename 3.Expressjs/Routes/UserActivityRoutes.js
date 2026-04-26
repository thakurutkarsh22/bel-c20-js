const express = require('express');
const { getUsersByGender, getUserByName, getAllUsers } = require('../Controllers/UsersActivityController');
const { passwordBasedAuthMiddleware } = require('../Middleware/PasswordBasedAuthMiddleware');
const router = express.Router();



// if we want to get all the users by gender 

// query params - after ? 
// https://www.google.com/search?q=rohit

router.get("/", passwordBasedAuthMiddleware,  getUsersByGender);


// get all users 

router.get("/allUsers", passwordBasedAuthMiddleware, getAllUsers);


// url params - after :
// get user by name 

router.get("/:name", getUserByName);






module.exports = router;