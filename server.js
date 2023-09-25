const express = require("express");
const cors = require("cors");
const sql = require("./models/db");
const PORT = 8080;
const restaurantRouter = require("./routes/restaurant.router")

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

