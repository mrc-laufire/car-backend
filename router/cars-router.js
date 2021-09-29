const express = require("express");
const router = express.Router();
const carController = require("../controller/cars-controller");

router.route("/").post(carController.create).get(carController.list);
router.route("/:id").delete(carController.delete).put(carController.update);

module.exports = router;
