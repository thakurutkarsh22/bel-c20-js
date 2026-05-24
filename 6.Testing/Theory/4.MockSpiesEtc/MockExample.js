const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('data from fetch User', data);
    return data;
}

module.exports = { fetchUsers };