// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [
  inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is your README file name?',
          name: 'fileNameInput',
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
          choices: ['MIT', 'GPLv3', 'GPLv2','Apache'],
        },
        {
            type: 'input',
            message: 'Please provide a short description:',
            name: 'description',
          },
      ])
      .then((data) => {
        const filename = `${data.fileNameInput.toUpperCase().split(' ').join('')}.json`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );

      })
// ];
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile('/', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
