const express = require("express");
//controllers
const {getAllStudents} = require('../controllers/students');

const studentsRouter = express.Router();

studentsRouter.route("/").get(getAllStudents).post();

studentsRouter.route("/:id").get().put().delete();

module.exports = studentsRouter;




