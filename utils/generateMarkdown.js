//function that returns the license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'GPLv3') {
    return `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (license === 'GPLv2') {
    return `![GPLv2 license](https://img.shields.io/badge/License-GPLv2-blue.svg)`
  } else if (license === 'Apache') {
    return `![Apache license](https://img.shields.io/badge/License-Apache-orange.svg)`
  } else {
    return '';
  }
};


// functio that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `https://opensource.org/license/mit/`
  } else if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }else if (license === 'GPLv2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } else if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return `This project uses the MIT License.`
  } else if (license === 'GPLv3') {
    return `This project uses the GPLv3 License.`
  }else if (license === 'GPLv2') {
    return `This project uses the GPLv2 License.`
  } else if (license === 'Apache') {
    lreturn`This project uses the Apache License.`
  } else {
    return 's';
}
}

// function generate markdown for README
function generateMarkdown(data) {
  //consts call the previous functions
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);s
  const LicenseSection = renderLicenseSection(data.license);
  
  return  `# ${data.title}


  ## Description
  
  ${data.description}
  
  ${licenseBadge}
  ${licenseLink}s
  
  ## Installation
  
  ${data.installation}
  
  ## License
  
  ${LicenseSection}

  ## Usage
  
  ${data.usage}
  
  
  ## Contributing
  
  ${data.contributing}
  
  
  ## Tests
  
  ${data.tests}
  
  
  ## Questions
  
  If you have any questions: please visit (https://github.com/${data.github})
  or contact me at ${data.email}
  `;
}

module.exports = generateMarkdown(data);s
