const fs = require('fs');
const input = require('./input.json')

const licenseRender= {
  badge: '',
  link: '',
  section: ''
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseRender) {
  fs.readFile('input.json', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
  let licenseInput = input.license; 
  licenseRender.badge = ''
  if(licenseBaInput === 'MIT') {
    licenseRender.badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseInput === 'GPLv3') {
    licenseRender.badge = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (licenseInput === 'GPLv2') {
    licenseRender.badge = `![GPLv2 license](https://img.shields.io/badge/License-GPLv2-blue.svg)`
  } else if (licenseInput === 'Apache') {
    licenseRender.badge = `![Apache license](https://img.shields.io/badge/License-Apache-orange.svg)`
  } else {
    licenseRender.badge = null;
  }
  return licenseRender;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseRender) {
  licenseRender.link = ''
  if(input.license === 'MIT') {
    licenseRender.link = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (input.license === 'GPLv3') {
    licenseRender.link = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (input.license === 'GPLv2') {
    licenseRender.link = `![GPLv2 license](https://img.shields.io/badge/License-GPLv2-blue.svg)`
  } else if (licenseBadge === 'Apache') {
    licenseRender.link = `![Apache license](https://img.shields.io/badge/License-Apache-orange.svg)`
  } else {
    licenseRender.link = null;
  }
  return licenseRender;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## license 
          ${renderLicenseBadge(licenseRender)}
          ${renderLicenseLink(licenseRender)}`
}

module.exports = generateMarkdown;
