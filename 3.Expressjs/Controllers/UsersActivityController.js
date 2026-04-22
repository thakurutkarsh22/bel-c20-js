const users = require("../data");

const SERVER_PASSWORD = "asdf1234";

function getUserByName (req, res) {
    const parms  = req.params; // { name: 'John Doe' }
    const searchedName = parms.name;
    
    const user = users.find((user) => {
        // check for substring (case-insensitive)
        return user.name.toLowerCase().includes(searchedName.toLowerCase());
    });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.json({
        success: true,
        data: user
    });
}


function getUsersByGender (req, res) {


    const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'asdf1234' }
    const password = headers.authorization; // asdf1234
    console.log("headers", headers);

    if(password !== SERVER_PASSWORD) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }



    const query = req.query; // { gender: 'male' } }
    const searchedGender = query.gender

    // filter the users based on the
    const filteredUsers = users.filter((user) => {
        if(user.gender === searchedGender) {
            return true;
        }
        return false;
    });


    const payload = {
        success: true,
        data: filteredUsers,
        size: filteredUsers.length
    };

    res.json(payload)

}

function getAllUsers (req, res) {

    const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'asdf1234' }
    const password = headers.authorization; // asdf1234
    console.log("headers", headers);

    if(password !== SERVER_PASSWORD) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }

    res.json({
        success: true,
        data: users,
        size: users.length
    })
}

function checkPassword() {
    
}


module.exports = {
    getUserByName,
    getUsersByGender,
    getAllUsers
}