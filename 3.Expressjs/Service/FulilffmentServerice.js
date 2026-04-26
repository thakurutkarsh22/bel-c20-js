const UserActivityService = require("./UserActivityService");

class FulilffmentService {
    constructor() {
        this.fulilffments = require("../data");
    }

    static getFulilffmentById(id) {
        const user = UserActivityService.getUserByName(id);
        user.areYOupremium; 
        if(user.areYOupremium) {
            return // good to go
        } else {
            return // flash sale no phone for you 
        }
        
        return this.fulilffments.find((fulilffment) => fulilffment.id === id);
    }
}

module.exports = FulilffmentService;