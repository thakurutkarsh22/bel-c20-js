require('dotenv').config();
const UserModel = require("../Models/User.Model");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser(req, res) {

    const { name, username, email, age, gender, password, address, hobbies } = req.body;

    // create a new user object
    // password is bad - bcrypt to hash the password
    const newUser = new UserModel(
        { name, username, email, age, gender, password, address, hobbies });

    // saving in database 

    try {
        const responseFromDatabase = await newUser.save(); // CRUD Operation - Create
        res.json({
            success: true,
            message: "User registered successfully",
            data: responseFromDatabase
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message
        });
    }
   
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    // check if the user exists in the database
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    } else {
        // check if the password is correct
        const passwordFromDb = user.password; // 

        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });


        if(passwordFromDb === password) {
            res.json({
                success: true,
                message: "Login successful",
                data: user,
                token: token
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
    }
}

module.exports = {
    registerUser,
    loginUser
}