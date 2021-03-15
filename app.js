const inquirer = require('inquirer');
inquirer
.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is your name',
}])
.then(answers=>console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err =>{
//     if (err) throw err (err);
//     console.log('Portfolio complete! Check out index.html to see the output!')
// });

// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github));