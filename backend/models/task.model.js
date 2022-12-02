const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    dueDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
},
    { timestamps: true }
);

Task = mongoose.model("task", TaskSchema);

module.exports = Task; 