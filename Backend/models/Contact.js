const db = require("../config/db");

const saveContact = (data, callback) => {
  const sql = `
    INSERT INTO enquiries
    (form_type, name, email, phone, company, service, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      "contact",
      data.name,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.message,
    ],
    callback
  );
};

module.exports = { saveContact };