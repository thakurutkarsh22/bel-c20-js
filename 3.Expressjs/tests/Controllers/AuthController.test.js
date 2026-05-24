// usermodel 
// jwt
// bcrypt
// mock 

const mockpayload = {
    _id: "123",
    name: "John Doe",
    username: "john.doe",
    email: "john.doe@example.com",
    password: "hashedPassword",
    address: "123 Main St, Anytown, USA",
    hobbies: ["gym", "running", "swimming"],
}

jest.mock("../../Models/User.Model", () => {
    const mockSave = jest.fn();

    function UserModelMock(data) {
        Object.assign(this, data);
        this.save = mockSave;
    }

    UserModelMock._saveMock = mockSave;
    
    UserModelMock.findOne = jest.fn();
    UserModelMock.find = jest.fn();

    return UserModelMock;
})

// jest.mock("bcrypt"); // it eill mock everty thing in bcrypt   -> actual bcrypt ({1000 properties })


jest.mock("bcrypt", () => {
    return {
        hash: jest.fn(),
        compare: jest.fn(),
    }
}); // here we are mocking the bcrypt module and returning a mock object with the hash and compare methods


jest.mock("jsonwebtoken", () => {
    return {
        sign: jest.fn(),
        verify: jest.fn(),
    }
});


// imports 
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { registerUser } = require("../../Controllers/AuthController");
const UserModel = require("../../Models/User.Model");


const buildReq = () => {
    return {
        body: {
            name: "John Doe",
            username: "john.doe",
            email: "john.doe@example.com",
            password: "123456",
            address: "123 Main St, Anytown, USA",
            hobbies: ["gym", "running", "swimming"],
            role: "user",
        }
    }
}

const buildRes = () => {
    return {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
    }
}


describe('AuthController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should register a user', async () => {
        // arrange
        const req = buildReq();
        const res = buildRes();

        // mocking 
        // use mockResolvedValue because bcrypt.hash is an async function
        bcrypt.hash.mockResolvedValue("hashedPassword");
        UserModel._saveMock.mockResolvedValue(mockpayload);

        // act
        // dont forget to add await here bec registerUser is an async function
        await registerUser(req, res);

        // assert
        expect(bcrypt.hash).toHaveBeenCalledWith("123456", 10);
        expect(UserModel._saveMock).toHaveBeenCalledTimes(1);
        expect(UserModel._saveMock).toHaveBeenCalledWith();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "User registered successfully",
            data: mockpayload,
        });
    });
});