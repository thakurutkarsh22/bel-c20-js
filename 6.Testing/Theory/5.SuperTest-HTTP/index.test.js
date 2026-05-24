// SuperTest -> HTTP testing library for Node.js

const supertest = require('supertest');
const serverUtkarsh = require('./index');

describe('GET /', () => {
    
    
    
    it('should return 200 OK home page', async () => {
        const resposne = await supertest(serverUtkarsh).get('/');
        expect(resposne.status).toBe(200);
        expect(resposne.text).toBe('Hello World');
    });


    it('should return 200 OK abouts', async () => {
        const resposne = await supertest(serverUtkarsh).get('/abouts');
        expect(resposne.status).toBe(200);
        expect(resposne.text).toBe('About Page');
    });
});