const users = require("../data");



function getUserByName (req, res, next) {
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

function getAllUsers (req, res, next) {
    res.json({
        success: true,
        data: users,
        size: users.length
    })
}


module.exports = {
    getUserByName,
    getUsersByGender,
    getAllUsers
}