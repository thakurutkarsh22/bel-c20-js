const { fetchUsers } = require("./fetchUsers");


describe('fetchUsers', () => {
    it('should fetch users', async () => {
        // arrange 

        // act 
        const users = await fetchUsers();
        // assert 
        expect(users).toBeDefined();
    });

    // MOCKING 
});