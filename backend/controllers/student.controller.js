const Student = require('../models/student');

exports.studentAddController = async (req, res) => {
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

exports.studentDetailsController = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            // status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};

exports.studentUpdateController = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body
            , {
                new: true,
                runValidators: true
            });
        res.status(200).json({
            // status: "success",
            data: student,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};

exports.studentDeleteController = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({
            // status: "success",
            message: "Student Deleted Successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
}
