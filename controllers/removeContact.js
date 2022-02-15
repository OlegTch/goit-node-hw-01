const contactsPath = require("./contactsPath");
const contactsUpdate = require("./contactsUpdate");

async function removeContact(contactId) {
  const contacts = await contactsPath();
  const idx = contacts.findIndex(({ id }) => id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeById] = contacts.splice(idx, 1);
  await contactsUpdate(contacts);
  return removeById;
}

module.exports = removeContact;
