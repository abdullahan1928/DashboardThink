const Student = require('../models/student');

exports.studentController = async (req, res) => {
    const { name, email, phone, password, admissionDate } = req.body;
    const newStudent = new Student({
        name,
        email,
        phone,
        password,
        admissionDate,
    });

    try {
        await newStudent.save();
        res.status(200).json({
            // status: "success",
            message: "New Student Added Successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};

exports.studentListController = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            // status: "success",
            data: students,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};