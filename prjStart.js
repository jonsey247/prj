const fs = require('fs');
const path = '/home/jacob/Desktop/code/new_project'
fs.mkdir(path, (err) =>{
    if(err === null) makeFile(path + '/main.js');
    else console.log('Error: File already exists');
});

function makeFile (name, cb) {
    fs.writeFile(name, cb)
}