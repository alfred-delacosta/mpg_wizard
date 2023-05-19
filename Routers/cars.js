// Express
const express = require('express');
const router = express.Router();
const Car = require('../Models/Car');

router.get('/', async (req, res) => {
    try {
        let cars = await Car.find();
        res.send(cars);
    } catch (error) {
        res.status(400).send(error);
        
    }
})

router.get("/:id", async function(req, res, next) {
    try {
        let car = await Car.findById(req.params.id);
        res.send(car);
    } catch(e) {
        res.send(e);
    }
});

router.post('/create', async (req, res) => {
    try {
        let car = new Car(req.body);
        let result = await car.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }

})

router.post('/update/:id', async (req, res) => {
    try {
        let car = await Car.findByIdAndUpdate(req.params.id, req.body);

        if (car) {
            res.status(200).send(car);
        } else {
            res.status(404).send({
                msg: "Car not found."
            });
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async function(req, res) {
    try {
        let results = await Car.findByIdAndDelete(req.params.id);
        if (results) {
            res.status(200).send({
                msg: "Car successfully deleted.",
                data: results
            });
        } else {
            res.status(404).send({
                msg: "No car found with that id."
            })
        }

    } catch(e) {
        res.status(500).send({error: e});
    }
});

module.exports = router;