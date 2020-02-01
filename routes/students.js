const express = require("express");

const router = express.Router();

const Students = require("../model/students");

// fetching all students
router.get("/students", async (req, res) => {
  try {
    const results = await Students.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// adding a new student
router.post("/students", async (req, res) => {
  // destructuring request body
  const { studentId, firstName, lastName, course } = req.body;
  const newStudent = new Students({
    studentId,
    firstName,
    lastName,
    course
  });
  try {
    await newStudent.save();
    res.status(201).json({ message: "Student succesfully added" });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

// get a specific student
router.get("/students:id", async (req, res) => {
  // get the id for the particular student
  const id = req.params.id;
  try {
    const result = await Students.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// edit a particular student
router.put("/students/:id", async (req, res) => {
  // get the id for the student
  const id = req.params.id;
  try {
    const student = await Students.findById(id).exec();
    student.set(req.body);
    const result = student.save();
    res.status(201).json({
      message: "Update is succesful"
    });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

// delete a particular student
router.delete("/students/:id", async (req, res) => {
  // getting the id for the student
  const id = req.params.id;
  try {
    await Students.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete succesful"
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
