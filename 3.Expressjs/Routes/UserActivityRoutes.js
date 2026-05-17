const express = require('express');
const { getUsersByGender, getUserByName, getAllUsers } = require('../Controllers/UsersActivityController');
const { passwordBasedAuthMiddleware } = require('../Middleware/PasswordBasedAuthMiddleware');
const { jwtBasedAuthMiddleware } = require('../Middleware/JwtBasedAuthMiddleware');
const { requireRole } = require('../Middleware/RoleAuthMiddleware');
const router = express.Router();
const passport = require('passport');



// if we want to get all the users by gender 

// query params - after ? 
// https://www.google.com/search?q=rohit


// should be admin and manger ONLY
router.get("/", jwtBasedAuthMiddleware, requireRole("admin", "manager"),  getUsersByGender);


// get all users 
// should be admin only  
router.get("/allUsers", jwtBasedAuthMiddleware, requireRole("admin"), getAllUsers);


// url params - after :
// get user by name 

const passportAuthMiddleware = passport.authenticate('jwt', { session: false });


// everyone can see this (admin, manager, user)
// TODO: we need to change the req after we authenticate the user 
router.get("/:name", passportAuthMiddleware, requireRole("admin", "manager", "user"), getUserByName);






module.exports = router;