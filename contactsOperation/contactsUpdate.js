const fs = require("fs/promises");
const path = require("path");

const contactsUpdate = async (contacts) => {
  await fs.writeFile(
    path.join(__dirname, "../db/contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
};

module.exports = contactsUpdate;
