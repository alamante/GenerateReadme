const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'please write your project description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What KING OF LICENSE?',
        choices: ["MIT","APACHE 2.0","GPL",]
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
        default: "npm i"
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default:'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'tcontributing',
        message: 'What does user need to know about contributing to the repo?',

    }


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) =>{
    console.log('Genrating a ReadMe...')
    writeToFile('READMe.md', generateMarkdown({...response}))
  })  
}

// function call to initialize program
init();
