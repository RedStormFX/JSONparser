const fs = require("fs");
const path = require("path");

const getContactsModel = () => {
  const filePath = path.join(__dirname, "../response.json");
  const model = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(model).contacts;
};

class ContactsModel {
  #model = getContactsModel();

  find() {
    return this.#model;
  }
}

module.exports = new ContactsModel();
