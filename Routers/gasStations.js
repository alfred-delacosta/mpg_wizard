// Express
const express = require('express');
const router = express.Router();
const GasStation = require('../Models/GasStation');

router.get('/', async (req, res) => {
    try {
        let gasStations = await GasStation.find();
        res.send(gasStations);
    } catch (error) {
        res.status(400).send(error);
        
    }
})

router.get("/:id", async function(req, res, next) {
    try {
        let gasStation = await GasStation.findById(req.params.id);
        res.send(gasStation);
    } catch(e) {
        res.send(e);
    }
});

router.post('/create', async (req, res) => {
    try {
        let gasStation = new GasStation(req.body);
        let result = await gasStation.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }

})

router.post('/update/:id', async (req, res) => {
    try {
        let gasStation = await GasStation.findByIdAndUpdate(req.params.id, req.body);

        if (gasStation) {
            res.status(200).send(gasStation);
        } else {
            res.status(404).send({
                msg: "Gas station not found."
            });
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async function(req, res) {
    try {
        let results = await GasStation.findByIdAndDelete(req.params.id);
        if (results) {
            res.status(200).send({
                msg: "Gas station successfully deleted.",
                data: results
            });
        } else {
            res.status(404).send({
                msg: "No gas station found with that id."
            })
        }

    } catch(e) {
        res.status(500).send({error: e});
    }
});

module.exports = router;