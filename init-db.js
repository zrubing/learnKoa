//自动创建表
const model = require('./model.js');
model.sync();

console.log('init db ok.');
process.exit(0);