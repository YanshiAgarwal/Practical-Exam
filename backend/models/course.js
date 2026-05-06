const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required: true
    },

    trainer: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true,
        min: 1
    },

    fees: {
        type: Number,
        required: true,
        min: 1
    }

});

module.exports = mongoose.model("Course", courseSchema);
