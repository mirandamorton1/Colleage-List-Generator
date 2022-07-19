class Employee {

     constructor(name, email, id) {
      this.name = name;
      this.email = email;
      this.id = id;
  
     }
  
    // each method for getting the information you'll be taking in for this employee
  
    getName() {
      return `${this.name}`;
  
     }
    
    getEmail() {
      return `${this.email}`;
  
     }

    getId() {
      return `${this.id}`;
  
     }
    
    getRole() {
      return "Employee";
  
     }
  }
  
  module.exports = Employee;
  
  // reference activities 21 - 26