const db = require("../config/db");

exports.createContact = (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    service,
    message,
  } = req.body;

  const sql = `
    INSERT INTO enquiries
    (
      form_type,
      name,
      email,
      phone,
      company,
      service,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      "contact",
      name,
      email,
      phone,
      company,
      service,
      message,
    ],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Saved Successfully",
      });
    }
  );
};