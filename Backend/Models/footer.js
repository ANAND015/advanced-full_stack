const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
});

const Footer = mongoose.model("footer", footerSchema); // Save to "footer" collection
module.exports = Footer;
