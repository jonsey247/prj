const fs = require('fs');
const execute = require('child_process').exec;
const adie = '/Users/adrianwilliams/Documents/northcoders/accelerate/week_5/newProject';
// const jacob = '~/code/new_project';
const specPath = adie + '/spec';

fs.mkdir(adie, (err) => {
    if (err === null) {
        fs.mkdir(specPath, (err) => {
        if (err === null) {
            fs.writeFile(adie + '/main.js');
            fs.writeFile(adie + '/.gitignore');
            fs.writeFile(adie + '/spec/main.spec.js');
            execute(`cd ${adie} && npm init -y && git init && npm i -D Chai && npm i -D eslint && npm i -D husky`, (err) => {
                console.log(err);
            });
        }
        else throw new Error('Error: File already exists');
      });
    }
    else throw new Error('Error: File already exists');
});
