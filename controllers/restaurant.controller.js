const { restart } = require("nodemon");
const Restaurant = require("../models/restaurant.model")

///insert data
Restaurant.createRestaurant = async (newRestaurant) => {
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant :", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err", err);
        throw err;
    }
}

//get all restaurants
Restaurant.getAll = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        ///console.log(restaurants);
        return restaurants.map(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
};

//Get Restaurant By ID
Restaurant.getById = async (restaurantId) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (restaurant) {
            return restaurant.toJSON();
        }
        else {
            throw { kind: "not_found" };
        }
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
}

//udate a restaurant 
Restaurant.updateById = async (id, restaurantData) => {
    try {
        const [rowUpdated] = await Restaurant.update(restaurantData, {
            where: { id },
        });
        if (rowUpdated === 0) {
            throw { kind: "not_found" };
        }
        return { id: id, ...restaurantData };
    } catch (error) {
        console.log("error:", error);
        throw error
    }
};

//delete a restaurant
Restaurant.removeById = async (id) => {
    try {
        const rowDeleted = await Restaurant.destroy({ where: { id } });
        if (rowDeleted === 0) {
            throw { kind: "not_found" };
        }
        return true
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};
module.exports = Restaurant