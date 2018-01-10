let TaskAssit = require('./TaskAssist');

let task1 = new TaskAssit();
let task2 = new TaskAssit();

task1.supportExt('sass', 'sass');

console.log(task1);
