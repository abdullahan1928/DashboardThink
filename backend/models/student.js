const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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

module.exports = Student = mongoose.model("student", StudentSchema);