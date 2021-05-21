const inquirer = require('inquirer');
const fs = require('fs');

// Promise function 
// const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
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
      message: "Select the open source license desired from the list below. If none, leave empty.",
      choices: ['MIT License', 'GNU GPL', '', '', '']
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
  .then((response) => {
    console.log(response);
  })
  };


//   .then((response) => {
//     console.log(response);
// //  const html = generateHTML(response);
// //  const filename = `${response.name.toLowerCase().split(" ").join("")}.html`;
// //  fs.writeFile(filename, html, (err) =>
// //    err ? console.log(err) : console.log("Success!")
// //  );
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// ${answers.project_title}
// ${answers.description}
// ${answers.installation}
// ${answers.usage}
// ${answers.license}
// ${answers.contributing}
// ${answers.tests}
// ${answers.questions}
}

// TODO: Create a function to initialize app
function init() {}

// writeFileAsync as a promis // Need to change to reflect README
// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// Function call to initialize app
init();
