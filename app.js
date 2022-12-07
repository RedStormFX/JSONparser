const contactsAPI = require("./services/contacts.api.js");

const allContacts = contactsAPI.getAll();
const contacts = contactsAPI.mapContact();

console.log(allContacts.length);
console.log(contacts);
