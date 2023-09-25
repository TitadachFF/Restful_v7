const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");

/// Insert restaurant to database 
// //http://localhost:5000/restaurants
router.post("/restaurants", (req, res) => {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl: req.body.imageurl
    })


    ///Insert to DB
    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error accured while inserting the new restaurant"
            })
        } else {
            res.send(data)
        }
    })
})
/// get all  restaurant 
//http://localhost:5000/restaurants
router.get("/restaurants", (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message ||
                    "Some error accured while inserting the new restaurant"
            });
        } else {
            res.send(data);
        }
    })
})


//get id restaurants
router.get("/restaurants/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.getById(restaurantId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the restaurant"
            });
        } else {
            res.send(data);
        }
    });
});

///update 
router.put("/restaurants/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    Restaurant.updateById(id, updatedData, (err, result) => {
        if (err) {
            if (err.message === "Restaurant not found") {
                res.status(404).send({
                    message: "Restaurant not found"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while updating the restaurant"
                });
            }
        } else {
            res.send({
                message: "Restaurant updated successfully"
            });
        }
    });
});

/// del
router.delete("/restaurants/:id", (req, res) => {
    const id = req.params.id;

    Restaurant.deleteById(id, (err, result) => {
        if (err) {
            if (err.message === "Restaurant not found") {
                res.status(404).send({
                    message: "Restaurant not found"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while deleting the restaurant"
                });
            }
        } else {
            res.send({
                message: "Restaurant deleted successfully"
            });
        }
    });
});




module.exports = router