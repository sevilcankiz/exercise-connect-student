const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    
};

const createStudent = 

module.exports = { getAllStudents };