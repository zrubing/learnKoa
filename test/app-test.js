// app-test.js

const
    request = require('supertest'),
    app = require('../app');

describe('#test koa app', () => {

    let server = app.listen(3000);

    describe('#test server', () => {

        it('#test GET /hello/:name', async() => {
            let res = await request(server)
                .get('/hello/mike')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello, mike!</h1>');
        });
    });
});