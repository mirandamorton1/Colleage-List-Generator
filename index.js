// INDEX.JS //

// require all of your classes/constructors, (Manager, Engineer, Intern)
// require packages needed (inquirer, path, fs) //output. 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')

const generatePage = require('./src/template')

const members = [];
// set up an empty array for the Team Members

// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team

// function for INITIALIZING ////////////////
function init() {
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
    function createManager() {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the manager's ID?",
        },
        { 
          type: "input",
          name: "email",
          message: "What is the manager's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
        },
      ])
      // use inquirer
      // and prompt to ask questions
  
      // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      console.log(answers);
      members.push(manager);
        //send your answers here
      // then you will need to push this new manager to the empty team array you set up above
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createTeam();
    })
    }
  
    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
      inquirer.prompt ([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Would you like to add more members to your team?',
          choices: ['Engineer', 'Intern', 'None'],
        }
      ])
      // use inquirer
      // and prompt to ask questions - such as what type of employee they would like to add
  
      // then, based on their choice, run the function associated with adding that employee type
      .then((choice) => {
        switch(choice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
    
        }

      // conditional that runs function for employee type that the user selected
      // if they choose Intern, run addIntern function
      // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
    })
    }
  
    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type
    
    function addEngineer() {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's ID?",
        },
        { 
          type: "input",
          name: "email",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's Github?",
        },
      ])
      // use inquirer
      // and prompt to ask questions
  
      // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      console.log(answers);
      members.push(engineer);
        //send your answers here
      // then you will need to push this new manager to the empty team array you set up above
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createTeam();
    })

    }

    function addIntern() {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's ID?",
        },
        { 
          type: "input",
          name: "email",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What school does the intern go to?",
        },
      ])
      // use inquirer
      // and prompt to ask questions
  
      // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      console.log(answers);
      members.push(intern);
        //send your answers here
      // then you will need to push this new manager to the empty team array you set up above
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createTeam();
    })
      // use inquirer
      // and prompt to ask questions
      // take the answers, create a new instance of Intern, and add those answers to that new Intern
      // push this new member into you team array
    }
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSynch(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, generatePage(members), "utf-8");
      // creating the file, adding your team to it
      // probably call a function, passing in your team members array - send it to another js file 
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
  }

init();