const contactsModel = require("../models/contacts.model");
const contactsHelper = require("../helpers/contacts.helper");

class ContactsAPI {
  getAll() {
    const allContacts = contactsModel.find();
    const contacts = allContacts.results;
    const companies = allContacts.unique_companies;
    return contactsHelper.mapContacts(contacts, companies);
  }
}

module.exports = new ContactsAPI();
