const mongoose = require("mongoose");

const { Schema } = mongoose;

const Student = new Schema({
    name: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
});

module.exports = mongoose.model("student", Student);




