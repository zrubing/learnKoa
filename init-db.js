//自动创建表
const model = require('./model.js');
model.sync().then(() => {
    console.log('sync done');
    process.exit(0);
}).catch((e) => {
    console.log('failed with: ' + e);
    process.exit(0);
});