class ContactList {
    constructor() {
      this.contacts = new Map();
    }
  
    addContact(name, phone) {
      // Implement this method
    }
  
    removeContact(name) {
      // Implement this method
    }
  
    updateContact(name, newPhone) {
      // Implement this method
    }
  
    contactExists(name) {
      // Implement this method
    }
  
    getPhoneNumber(name) {
      // Implement this method
    }
  
    printAllContacts() {
      // Implement this method
      for(let [key, value] of this.contacts){
          console.log(`UserName : ${key} has phone number : ${value}`);
      }
    }
  
    getTotalContacts() {
      // Implement this method
    }
  
    clearAllContacts() {
      // Implement this method
    }
  }
  
const myContacts = new ContactList();

