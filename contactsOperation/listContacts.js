const contactsPath = require("./contactsPath");

async function listContacts() {
  return await contactsPath();
}

module.exports = listContacts;
