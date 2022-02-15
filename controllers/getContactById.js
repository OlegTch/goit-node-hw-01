const contactsPath = require("./contactsPath");

async function getContactById(contactId) {
  const contacts = await contactsPath();
  const contact = contacts.find(({ id }) => id === contactId);
  return contact ? contact : null;
}

module.exports = getContactById;
