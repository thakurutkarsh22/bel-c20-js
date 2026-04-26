require('dotenv').config()

const SERVER_SECRET_PASSWORD = process.env.SERVER_SECRET_PASSWORD;

function passwordBasedAuthMiddleware(req, res, next) {

    const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'asdf1234' }
    const password = headers.authorization; // "asdf1234"
    console.log("headers", headers);
    console.log("password", password);

    if(password === SERVER_SECRET_PASSWORD) {
        // good request 
        next();
    } else {
        // req is bad 
        res.status(401).json({
            success: false,
            message: "Unauthorized from middleware"
        });
    }
}

module.exports = {
    passwordBasedAuthMiddleware
}