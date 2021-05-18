const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "project_title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      // Table of Content Links -- ??? How do I do this?
      type: "input",
      name: "bio",
      message: "What is your bio?",
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
      type: "input",
      name: "license",
      message: "Select the open source license desired from the list below. If none, leave empty.",
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
        name: "questions",
        message: "Enter your GitHub profile name and e-mail.",
    },
  ])

//   .then((response) => {
//     console.log(response);
//     const html = generateHTML(response);
//     const filename = `${response.name.toLowerCase().split(" ").join("")}.html`;
//     fs.writeFile(filename, html, (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
