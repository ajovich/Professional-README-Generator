// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.project_title}

  ## Description

  * What is the description of your project? ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  * What are the steps required to install your project? Provide a step-by-step description of how to get your project running. ${data.installation}

  ## Usage

  * What are the instructions and examples for use? ${data.usage}

  ## License

  * ${data.license}

  ## Contributing

  * List your collaborators, if any. ${data.contributing}

  ## Tests

  * Write tests for your application here. ${data.tests}

  ## Questions

  * Enter your GitHub profile name and e-mail. ${data.questions}
`;
}

module.exports = generateMarkdown;
