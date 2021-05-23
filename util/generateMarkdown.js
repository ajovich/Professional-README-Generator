// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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

  * E-mail ${data.email}
`;
}

module.exports = generateMarkdown;
