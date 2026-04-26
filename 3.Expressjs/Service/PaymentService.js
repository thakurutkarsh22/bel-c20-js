const UserActivityService = require("./UserActivityService");

class PaymentService {
    constructor() {
        this.payments = require("../data");
    }

    static getPaymentById(id) {
        const user = UserActivityService.getUserByName(id);
        // const payment = payments.isdontbyUser
       
    }
}

module.exports = PaymentService;