// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    prompt([
        {
          type: 'input',
          message: 'What is your README file name?',
          name: 'fileName',
        },
        {
          type: 'input',
          message: 'What is your project title?',
          name: 'projectTitle',
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
          choices: ['MIT License', 'GPLv3 license', 'GPLv2 license','Apache License'],
        },
        {
            type: 'input',
            message: 'Please provide a short description:',
            name: 'description',
          },
      ])
      .then((response) =>
        response.confirm === response.password
          ? console.log('Success!')
          : console.log('You forgot your password already?!')
      )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('/', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
