const fs = require('fs');
const input = require('./input.json')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  fs.readFile('input.json', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
  let licenseBadge = license.license; 
  let licenseRender = ''
  if(licenseBadge === 'MIT') {
    licenseRender = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseBadge === 'GPLv3') {
    licenseRender = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (licenseBadge === 'GPLv2') {
    licenseRender = `![GPLv2 license](https://img.shields.io/badge/License-GPLv2-blue.svg)`
  } else if (licenseBadge === 'Apache') {
    licenseRender = `![Apache license](https://img.shields.io/badge/License-Apache-orange.svg)`
  } else {
    license.license = "N/A"
  }
  return licenseRender;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## license 
          ${renderLicenseBadge(license)}`
}

module.exports = generateMarkdown;
