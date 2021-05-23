// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    license = `![MIT License Badge](https://img.shields.io/badge/License-MIT-green.svg)`
  } else if (license === 'GNU GPL') {
    license = `![GNU GPL License Badge](https://img.shields.io/badge/License-GPL-green.svg)`
  } else if (license === 'Apache License 2.0') {
    license = `![Apache License 2.0 Badge](https://img.shields.io/badge/License-Apache-green.svg)`
  } else if (license === 'ISC') {
    license = `![ISC License Badge](https://img.shields.io/badge/License-ISC-green.svg)`
  } else {
    return (license === 'None');
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    license = `![MIT License Link](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU GPL') {
    license = `![GNU GPL License Link](https://www.gnu.org/licenses/)`
  } else if (license === 'Apache License 2.0') {
    license = `![Apache License 2.0 Link](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'ISC') {
    license = `![ISC License Link](https://www.isc.org/licenses/)`
  } else {
    return ('');
  }
}

// Function that returns the license section of README 
function renderLicenseSection(license) {
  if (license === 'MIT') {
    license = `![MIT License Section](license/MITLICENSE.txt)` 
  } else if (license === 'GNU GPL') {
    license = `![GNU GPL License Section](license/GNUGPLLICENSE.txt)`
  } else if (license === 'Apache License 2.0') {
    license = `![Apache License 2.0 Section](license/APACHELICENSE.txt)`
  } else if (license === 'ISC') {
    license = `![ISC License Section](license/ISCLICENSE.txt)`
  } else {
    return ('');
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.title}

  ## Description

  * ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  * These are the following necessary dependencies needed to be installed prior to running this application:  ${data.installation}

  ## Usage

  * What are the instructions and examples for use? ${data.usage}

  ## License
  
  * ${data.license}

  ## Contributing

  * Contributors: ${data.contributing}

  ## Tests

  * The following is needed to run the test: ${data.tests}

  ## Questions

  * GitHub profile name [${data.github}](https://github.com/${data.github})

  * E-mail ${data.email} for additional questions
`;
}

module.exports = generateMarkdown;
