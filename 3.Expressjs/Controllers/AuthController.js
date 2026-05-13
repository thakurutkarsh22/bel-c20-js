require('dotenv').config();
const UserModel = require("../Models/User.Model");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

async function registerUser(req, res) {

    const { name, username, email, age, gender, password, address, hobbies } = req.body;

    const hashedPassword = await hashPassword(password);

    // create a new user object
    // password is bad - bcrypt to hash the password
    const newUser = new UserModel(
        { name, username, email, age, gender, password: hashedPassword, address, hobbies });

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

async function hashPassword(password) {
    // talk to CPU to hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}


async function loginUser(req, res) {
    const { email, password } = req.body;

    // check if the user exists in the database
    const user = await UserModel.findOne({ email });
    console.log("user", user);
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    } else {
        // check if the password is correct
        const passwordFromDb = user.password; // 

        const payload = {
            userId: user._id,
            username: user.username,
            roles: user.role
        }
        console.log("payload", payload);

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });


        console.log("passwordFromDb", passwordFromDb);
        console.log("password", password);

        const isPasswordCorrect = await bcrypt.compare(password, passwordFromDb);
        if(isPasswordCorrect) {
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