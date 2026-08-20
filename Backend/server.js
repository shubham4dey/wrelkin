const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});