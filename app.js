const contactsAPI = require("./services/contacts.api.js");
const contactsCsvHelper = require("./helpers/contacts-csv.helper");

const allContacts = contactsAPI.getAll();

contactsCsvHelper.writeCsv(allContacts);
