const express = require("express");
const cors = require("cors");
const sql = require("./models/db");
const PORT = 8080;
const restaurantRouter = require("./routes/restaurant.router")
const db =require("./models/index");
const role = db.role;
//dev mode
db.sequelize.sync({force:false}).then(()=>{
    console.log('Drop and re-sync DB');
    initial();

});

function initial() {
    role.create({
        id:1,
        name:"user",
    });
      role.create({
          id: 2,
          name: "moderator",
      });
        role.create({
            id: 3,
            name: "admin",
        });
    
}

//creat service
const app = express();

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.send("<h1>Hello</h1>");
})
app.use("/",restaurantRouter)

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:"+PORT)
})

