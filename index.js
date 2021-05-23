const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown.js');

// Array of questions 
const questions = [
  { 
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project? Use the following as a guide: your motivation behind the project, what problem does it solve, what did you learn, etc.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get your project running.",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions and examples for use?",
  },
  {
    type: "list",
    name: "license",
    message: "Select the open source license desired from the list below.",
    choices: ['MIT', 'GNU GPL', 'Apache License 2.0', 'ISC', 'None']
  },
  {
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any.",
  },
  {
      type: "input",
      name: "tests",
      message: "Write tests for your application here.",
  },
  {
      type: "input",
      name: "github",
      message: "Enter your GitHub profile name.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your e-mail.",
  },
]

// Function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err)
    } else { 
      console.log("Successfully wrote README.md")
    }
  });
}

// Function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(function (data) {
    writeFile("README.md", generateMarkdown(data));
    console.log(data)
  });
}

// Function call to initialize app
init();
