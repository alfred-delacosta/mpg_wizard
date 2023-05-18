const mongoose = require('mongoose');

const gasStationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name for the gas station is required.'],
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    longitude: {
        type: String,
        trim: true,
        required: [true, 'Longitude is required.']
    },
    latitude: {
        type: String,
        trim: true,
        required: [true, 'Latitude is required.']
    }
}, {timestamps: true});

module.exports = mongoose.model('GasStation', gasStationSchema);