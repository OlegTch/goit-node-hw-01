const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const contactsPath = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "db/contacts.json"),
      "utf8"
    );
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const contactsUpdate = async (contacts) => {
  await fs.writeFile(
    path.join(__dirname, "db/contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
};

async function listContacts() {
  return await contactsPath();
}

async function getContactById(contactId) {
  const contacts = await contactsPath();
  const contact = contacts.find(({ id }) => id === contactId);
  return contact ? contact : null;
}

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

async function addContact(name, email, phone) {
  const contacts = await contactsPath();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await contactsUpdate(contacts);
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
