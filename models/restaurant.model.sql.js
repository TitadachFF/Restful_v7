const sql = require("./db.sql");
//constructor
const Restaurant = function (restaurant) {
    ///Atrributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;
};


//Methods
Restaurant.create = (newRestaurant, result) => {
    ///INSERT INTO restaurants SET name, type, imageurl VALUES ("KFC", "fastfood","url")
    sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res) => {
        if (err) {
            console.log("err", err);
            res(err, null);
            return;
        }
        ///ไม่มีerr 
        console.log("new restaurant created");
        result(null, {
            id: res.id,
            ...newRestaurant
        });
    });
}


///get all restaurant
Restaurant.getAll = (result) => {
    ///"SELECT = FROM restaurant
    sql.query("SELECT * FROM restaurants", (err, res) => {
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        ///ไม่มีerr 
        console.log("get all ");
        result(null, res)
    })
}

///get id restaurant
Restaurant.getById = (restaurantId, result) => {
    // SELECT * FROM restaurants WHERE id = restaurantId
    sql.query("SELECT * FROM restaurants WHERE id = ?", [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        // No error occurred
        console.log("Restaurant found");
        result(null, res);
    });
};

///get update restaurant
Restaurant.updateById = (restaurantId, updatedData, result) => {
    const query = "UPDATE restaurants SET ? WHERE id = ?";
    sql.query(query, [updatedData, restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // No restaurant found with the given ID
            result({
                message: "Restaurant not found"
            }, null);
            return;
        }

        console.log("Restaurant updated");
        result(null, {
            message: "Restaurant updated successfully"
        });
    });
};


///get del restaurant
Restaurant.deleteById = (restaurantId, result) => {
    const query = "DELETE FROM restaurants WHERE id = ?";
    sql.query(query, [restaurantId], (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // No restaurant found with the given ID
            result({
                message: "Restaurant not found"
            }, null);
            return;
        }

        console.log("Restaurant deleted");
        result(null, {
            message: "Restaurant deleted successfully"
        });
    });
};





module.exports = Restaurant