const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const fillUpRecordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    gasStationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'GasStation'
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Car'
    },
    fuelType: {
        type: String,
        enum: ['Regular', 'Mid', 'Premium', 'Diesel', '0% Ethanol', 'Kerosene'],
        required: [true, 'A fuel type is required.']
    },
    miles: {
        type: Decimal128,
        required: [true, 'Amount of miles required.']
    },
    gallons: {
        type: Decimal128,
        required: [true, 'Amount of gallons are required.']
    },
    mpg: {
        type: Decimal128
    }
}, {timestamps: true});

module.exports = mongoose.model('GasStation', fillUpRecordSchema);