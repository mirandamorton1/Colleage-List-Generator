const Employee = require('./employee')

class Manager extends Employee {    
    constructor(name, email, id, officeNumber) {
     //parent id
     super(name, id, email);

     this.officeNumber = officeNumber;
 
    }
 
   // each method for getting the information you'll be taking in for this employee
 
   getOfficeNumber() {
     return this.officeNumber;
 
    }
   
   getRole() {
     return "Manager";
 
    }
 }
 
 module.exports = Manager;