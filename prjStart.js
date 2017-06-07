const fs = require('fs');
const path = '/home/jacob/Desktop/code/new_project';
const specPath = '/home/jacob/Desktop/code/new_project/spec';
fs.mkdir(path, (err) =>{
    if(err === null) {
        fs.mkdir(specPath, (err) => {
        if(err === null) {
            fs.writeFile(path + '/main.js');
            fs.writeFile(path + '/.gitignore');
            fs.writeFile(path + '/spec/main.spec.js');
        }
        else throw new Error('Error: File already exists');
      });
    }
    else throw new Error('Error: File already exists');
});
