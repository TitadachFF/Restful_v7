const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller");
const { authJwt } = require("../middleware");

///create a new restaurant
//http://localhost:5000/restaurants
router.post("/restaurants", async (req, res) => {
  try {
    const newRestaurant = req.body;
    console.log(newRestaurant);
    const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
    res.status(201).json(createRestaurant);
  } catch (err) {
    res.status(500).json({ error: "Fail to create restaurant " });
  }
});

///get all restaurants
router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.getAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Failed to get all restaurants" });
  }
});

//Get Restaurant by ID
router.get("/restaurants/:id",[authJwt.verifyToken], async(req, res)=>{
  try {
      const restaurantId = req.params.id;
      const restaurant = await Restaurant.getById(restaurantId);
      console.log(restaurant.dataValues);
      res.status(200).json(restaurant)
  } catch (error) {
      res.status(500).json({error:"failed to get restaurant by id"});
  }
})
//Restaurant  Update  a Restaurant data
router.put("/restaurants/:id", async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurantData = req.body;
    const updateRestaurant = await Restaurant.updateById(
      restaurantId,
      restaurantData
    );
    res.status(200).json(updateRestaurant);
  } catch (error) {
    if (error.kind == "not_found") {
      res.status(400).json({ error: "Restaurant not Found" });
    } else {
      res.status;
      res.status(500).json({ error: "Failed to get restaurant by update" });
    }
  }
});

//Delete a restaurant
router.delete("/restaurant/:id", async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const isDeleted = await Restaurant.removeById(restaurantId);
    if (isDeleted) {
      res.status(200).json({
        message: "Restaurant id" + restaurantId + "is deleted",
        isDeleted: isDeleted,
      });
    }
  } catch (error) {
    if (error.kind === "not_found") {
      res.status(404).json({ error: "Restaurant not found" });
    } else {
      res.status(500).json({ error: "Failed to update restaurant data" });
    }
  }
});

module.exports = router;
