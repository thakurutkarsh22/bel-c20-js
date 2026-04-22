const express = require('express');
const { getUsersByGender, getUserByName, getAllUsers } = require('../Controllers/UsersActivityController');
const router = express.Router();



// if we want to get all the users by gender 

// query params - after ? 
// https://www.google.com/search?q=rohit

router.get("/", getUsersByGender);


// get all users 

router.get("/allUsers",  getAllUsers);


// url params - after :
// get user by name 

router.get("/:name", getUserByName);






module.exports = router;