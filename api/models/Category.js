const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } //creates updated and created at times
);

module.exports = mongoose.model('Category', categorySchema);