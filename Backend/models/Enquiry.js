const db = require("../config/db");

const saveEnquiry = (data, callback) => {
  const sql = `
    INSERT INTO enquiries
    (
      form_type,
      name,
      email,
      phone,
      company,
      service,
      capacity,
      project_location,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      "enquiry",
      data.name,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.capacity,
      data.project_location,
      data.message,
    ],
    callback
  );
};

module.exports = { saveEnquiry };