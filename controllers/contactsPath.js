const fs = require("fs/promises");
const path = require("path");

const contactsPath = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "../db/contacts.json"),
      "utf8"
    );
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = contactsPath;
