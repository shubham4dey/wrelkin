const db = require("../config/db");

exports.createEnquiry = (req, res) => {

  const {
    name,
    email,
    phone,
    company,
    service,
    capacity,
    project_location,
    message
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
      name,
      email,
      phone,
      company,
      service,
      capacity,
      project_location,
      message
    ],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Database Error"
        });
      }

      res.json({
        success: true,
        message: "Project enquiry submitted successfully"
      });

    }
  );

};