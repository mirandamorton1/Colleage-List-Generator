class Employee {

     constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
  
     }
  
    // each method for getting the information you'll be taking in for this employee
  
    getName() {
      return this.name;
  
     }

     getId() {
      return this.id;
  
     }
    
    getEmail() {
      return this.email;
  
     }
    
    getRole() {
      return "Employee";
  
     }
  }
  
  module.exports = Employee;
  
  // reference activities 21 - 26