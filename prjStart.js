const fs = require('fs');
const execute = require('child_process').exec;
// const Jacob = '/Users/adrianwilliams/Documents/northcoders/accelerate/week_5/newProject';
const projName = process.argv[2];
const Jacob = '/home/jacob/Desktop/code/' + projName;
const specPath = Jacob + '/spec';
fs.mkdir(Jacob, (err) => {
    if (err === null) {
        fs.mkdir(specPath, (err) => {
        if (err === null) {
            fs.writeFile(Jacob + '/main.js');
            fs.writeFile(Jacob + '/.gitignore');
            fs.writeFile(Jacob + '/spec/main.spec.js');
            execute(`cd ${Jacob} && npm init -y && git init && npm i -D chai && npm i -D eslint && npm i -D husky`, (err) => {
                console.log(err);
            });
        }
        else throw new Error('Error: File already exists');
      });
    }
    else throw new Error('Error: File already exists');
});
