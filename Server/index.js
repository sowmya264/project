const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserRoute = require("../Server/Routes/userRoutes");

const app = express();

mongoose
.connect("mongodb://0.0.0.0:27017")
.then(() =>console.log("mongodb connected successfully"))
.catch((error) => console.log(error));

app.use(express.json());

const corsOptions ={
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["POST","GET"],
    allowedHeaders:["Content-Type","Authorization"],
    Credentials: true,
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send("helloworld");
});

app.use('/user',UserRoute);




app.listen(3000,()=>{
    console.log("server is running");
});