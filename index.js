const express = require("express");
const brandRouter = require("./router/brand-router");
const carsRouter = require("./router/cars-router");

const app = express();
const PORT = 4000;


app.use(express.urlencoded());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/brand", brandRouter);
app.use("/cars", carsRouter);


app.listen(PORT, () => console.log(`Server listening to the ${PORT}`));
