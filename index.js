//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a short description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions:',
      name: 'installInstructions',
    },
    {
      type: 'input',
      message: 'Please describe the usage of this application:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'license',
      choices: ['MIT', 'GPLv3', 'GPLv2','Apache'],
    },
    {
      type: 'input',
      message: 'Please Describe testing instructions:',
      name: 'tests',
    },
    {
      type: 'input', 
      message: 'Enter Github username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter Email address:',
      name: 'email',
    }
];
//function to call generateMarkdown to create readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README.md file generated!'));
}
     

// funciton to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const generate = generateMarkdown(answers);
      writeToFile('README.md', generate);
    })
    .catch((error) => {
      console.error(error);
    });
}

// call function call to initialize app
init();
