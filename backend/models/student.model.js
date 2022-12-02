const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admissionDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
},
    { timestamps: true }
);

Student = mongoose.model("student", StudentSchema);

module.exports = Student; 