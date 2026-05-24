// mocks 
jest.mock("../../Service/UserActivityService")


// imports 



const { getAllUsers, getUserByName } = require("../../Controllers/UsersActivityController");
const users = require("../../data");
const UserActivityService = require("../../Service/UserActivityService");

function buildRes() {
    const resObj = {
        json: jest.fn(), // mock function - that returns no value // -> this retuns undefined 
        send: jest.fn(), // mock function - that returns no value // -> this retuns undefined 
        status: jest.fn().mockReturnThis() // -> this -> context  -> { send: jest.fn(), status: jest.fn().mockReturnThis()}
    }

    return resObj;
}

function  buildReq() {
    return {
        params: {
            name: 'John Doe'
        },
        query: {
            gender: 'male'
        }
    };
}




describe('UserActivityController', () => {

    beforeEach(() => {
        // as a good practise we should clear all the mocks after each test
        jest.clearAllMocks();
    });

    it('should get all users', () => {
        // arrange
        const req = buildReq();
        const res = buildRes();

        // act
        getAllUsers(req, res);

        // assert
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: users,
            size: users.length
        });
    });


    it('should get users by getByname', () => {
        // arrange
        const fakeUser = {
            id: 1,
            name: 'John Doe',
            age: 20,
            gender: 'male',
        }
        const req = buildReq();
        const res = buildRes();

        //  we know that in unit test calling service from controller will become kinda integration test 
        // so we need to mock the service

        UserActivityService.getUserByName.mockReturnValue(fakeUser);


        // act
        getUserByName(req, res);

        // assert
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data: fakeUser
        });

        expect(UserActivityService.getUserByName).toHaveBeenCalledTimes(1);
        expect(UserActivityService.getUserByName).toHaveBeenCalledWith('John Doe');
    });

    it('should return 404 if user not found', () => {
        // arrange
        const req = buildReq();
        const res = buildRes();

        UserActivityService.getUserByName.mockReturnValue(undefined);

        // act
        getUserByName(req, res);
        
        // assert
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'User not found'
        });
    });


    // it('should get users by getBygender', () => {
    //     // arrange
    //     const req = buildReq();
    //     const res = buildRes();

    //     UserActivityService.getUserByGender.mockReturnValue(users);

    //     // act
    //     getUsersByGender(req, res);

    //     // assert
    //     expect(res.json).toHaveBeenCalledTimes(1);
    //     expect(res.json).toHaveBeenCalledWith({
    //         success: true,
    //         data: users
    //     });

    //     expect(UserActivityService.getUserByGender).toHaveBeenCalledTimes(1);
    //     expect(UserActivityService.getUserByGender).toHaveBeenCalledWith('male');
    // });

    // it('should return 404 if users not found', () => {
    //     // arrange
    //     const req = buildReq();
    //     const res = buildRes();

    //     UserActivityService.getUserByGender.mockReturnValue(undefined);

    //     // act
    //     getUsersByGender(req, res);

    //     // assert
    //     expect(res.status).toHaveBeenCalledTimes(1);
    //     expect(res.status).toHaveBeenCalledWith(404);
    //     expect(res.json).toHaveBeenCalledTimes(1);
    //     expect(res.json).toHaveBeenCalledWith({
    //         success: false,
    //         message: 'Users not found'
    //     });
    // });
});