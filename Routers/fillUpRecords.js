const express = require('express');
const router = express.Router();
const GasStation = require('../Models/GasStation');
const Car = require('../Models/Car');
const User = require('../Models/User');
const FillUpRecord = require('../Models/FillUpRecord');

// TODO This will be the most time consuming router. Will have to do this after authentication is added.

router.get('/', async (req, res) => {
    try {
        let fillUpRecords = await FillUpRecord.find();
        res.send(fillUpRecords);
    } catch (error) {
        res.status(400).send(error);
        
    }
})

router.get("/:id", async function(req, res, next) {
    try {
        let fillUpRecord = await FillUpRecord.findById(req.params.id);
        res.send(fillUpRecord);
    } catch(e) {
        res.send(e);
    }
});

router.post('/create', async (req, res) => {
    let gasStationId;
    try {
        // Check to see if there is a gas station ID passed. If no gas station ID is passed, a new gas station needs to be created.
        if (req.body.gasStation.id == null) {
            let newGasStation = new GasStation(req.body.gasStation);
            let gsSaveResult = await newGasStation.save();
            gasStationId = gsSaveResult.id;
        }
        else {
            gasStationId = req.body.gasStation.id;
        }

        // TODO Need to finish added the Car and User to the record.
        // TODO Need to add the rest of the fillUpRecord information.

    } catch (error) {
        res.status(400).send(error.message);
    }

})

router.post('/update/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async function(req, res) {
    try {

    } catch(e) {
        res.status(500).send({error: e});
    }
});

module.exports = router;