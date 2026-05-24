const { requireRole } = require("../../Middleware/RoleAuthMiddleware")

const buildAdminReq = () => {
    return {
        role: "admin",
    }
}

const buildManagerReq = () => {
    return {
        role: "manager",
    }
}

const buildUserReq = () => {
    return {
        role: "user",
    }
}


const buildRes = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
}


const buildNext = () => {
    return jest.fn();
}


describe('RoleMiddleware', () => {
    beforeEach(() => {
        // no mocks as such no need yet
        // jest.clearAllMocks();
    });
    it('positive flow calling next when the user has the required role', () => {
        // arrange
        const req = buildAdminReq();
        const res = buildRes();
        const next = buildNext();
        const middleware = requireRole("admin")

        // act
        middleware(req, res, next);

        // assert
        expect(next).toHaveBeenCalledTimes(1);

    });

    it('negative flow calling status 401 when the user does not have the required role', () => {
        // arrange
        const req = buildUserReq(); // user 
        const res = buildRes();
        const next = buildNext();
        
        const middleware = requireRole("admin"); // admin is required

        // act
        middleware(req, res, next);

        // assert
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: "Unauthorized you are not allowed to access this resource your role is user and you are trying to access admin",
        });
    });
});
