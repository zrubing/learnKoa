const hello = require('./hello-async');
const assert = require('assert');


describe("#hello-async", () => {
    it('#async function', async() => {
        let r = await hello();
        assert.strictEqual(r, 15);
    });
});