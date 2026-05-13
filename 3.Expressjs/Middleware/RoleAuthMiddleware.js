
// require roles is not a MILLDEWARE FUNCTION, its a normal function 
// "admin", "manager"
function requireRole(...roles) {
    
    // middleware function 
    function RoleAuthMiddleware(req, res, next) {
        const USER_ROLE = req.role; // utkasrh is a user and he has role as admin

        if(roles.includes(USER_ROLE)) {
            // good request
            next();
        } else {
            // bad request
            return res.status(401).json({
                success: false,
                message: "Unauthorized you are not allowed to access this resource"
                 + " your role is " + USER_ROLE + " and you are trying to access " 
                 + roles.join(", ")
            });
        }
    }


    return RoleAuthMiddleware;
}



module.exports = {
    requireRole
}