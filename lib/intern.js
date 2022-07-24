const Employee = require('./employee')

class Intern extends Employee {    
    constructor(name, email, id, school) {
     //parent id
     super(name, id, email);

     this.school = school;
 
    }
 
   // each method for getting the information you'll be taking in for this employee
 
   getSchool() {
     return this.school;
    //  console.log(`${this.School}`); return or console?
 
    }
   
   getRole() {
     return "Intern";
    //  console.log("Intern");
 
    }
 }
 
 module.exports = Intern;