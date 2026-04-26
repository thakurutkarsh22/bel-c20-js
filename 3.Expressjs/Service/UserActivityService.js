const users = require("../data");

// dependency injection - DI
class UserActivityService {
    constructor() {
        this.users = require("../data");
    }

    static getUserByName(searchedName) {
        const user = users.find((user) => {
            // check for substring (case-insensitive)
            return user.name.toLowerCase().includes(searchedName.toLowerCase());
        });

        return user;
    }
}

module.exports = UserActivityService;