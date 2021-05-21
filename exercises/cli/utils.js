const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, './contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const file = fs.readFileSync(contactsLocation)
        .toString();
  const strng = JSON.parse(file);
  return strng;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const file = fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2), function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  } );
  
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

