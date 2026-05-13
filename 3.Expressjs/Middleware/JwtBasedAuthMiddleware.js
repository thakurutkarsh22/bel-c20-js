const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;


function jwtBasedAuthMiddleware(req, res, next) {
   const headers = req.headers; // { 'content-type': 'application/json', ...  authorization: 'bearer 49u1249wklehrqwhkrjblaskjbflasjbf' }
   const authrization = headers.authorization; // "bearer 49u1249wklehrqwhkrjb"
   const token = authrization?.split(" ")[1]; // "49u1249wklehrqwhkrjb"
   

    jwt.verify(token, JWT_SECRET, (error, decodedPayload) => {
        if(error) {
            return res.status(401).json({
                success: false,
                error: error,
                message: "Unauthorized"
            });
        } else {
            // good request
            // console.log("decoded payload", decodedPayload);
            const roles = decodedPayload.roles; // "user" , "admin"
            req.role = roles; // "admin"
            req.userId = decodedPayload.userId; // "673456789012345678901234"
            req.username = decodedPayload.username; // "john_doe"
            next();
        }
    });
}

module.exports = {
    jwtBasedAuthMiddleware
}