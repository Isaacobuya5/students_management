const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  studentId: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  course: { type: String, required: true }
  //   passport: { type: String, required: true }
});

module.exports = mongoose.model("Students", studentSchema);
