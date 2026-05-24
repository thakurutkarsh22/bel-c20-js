jest.mock('./MockExample', () => ({
    fetchUsers: jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe' }])
}));


const { fetchUsers } = require('./MockExample');

describe('MockExample', () => {
    it('should fetch users using mock', async () => {
        const users = await fetchUsers();

        expect(fetchUsers).toHaveBeenCalledTimes(1);
        expect(users).toEqual([{ id: 1, name: 'John Doe' }]);
    });
});