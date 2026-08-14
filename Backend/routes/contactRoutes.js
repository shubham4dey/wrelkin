const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController");

router.get("/", (req, res) => {
  res.json({ message: "Contact API Working" });
});

router.post("/", createContact);

module.exports = router;