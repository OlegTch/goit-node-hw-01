const { randomUUID } = require("crypto");
const contactsPath = require("./contactsPath");
const contactsUpdate = require("./contactsUpdate");

async function addContact(name, email, phone) {
  const contacts = await contactsPath();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await contactsUpdate(contacts);
  return newContact;
}
module.exports = addContact;
