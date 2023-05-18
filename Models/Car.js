const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name for the car is required.'],
        trim: true
    },
    make: {
        type: String,
        required: [true, 'Make required.'],
        trim: true
    },
    model: {
        type: String,
        required: [true, 'Model required.'],
        trim: true
    },
    year: {
        type: Number,
        required: [true, "A year is required."],
        trim: true
    }
});

module.exports = mongoose.model('Car', carSchema);