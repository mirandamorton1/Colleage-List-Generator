const Employee = require('./employee')

class Engineer extends Employee {    
    constructor(name, email, id, github) {
     //parent id
     super(name, id, email);

     this.github = github;
 
    }
 
   // each method for getting the information you'll be taking in for this employee
 
   getGithub() {
     return this.Github;
    //  console.log(`${this.Github}`); return or console?
 
    }
   
   getRole() {
     return "Engineer";
    //  console.log("Engineer");
 
    }
 }
 
 module.exports = Engineer;