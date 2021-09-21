const express = require("express");
const router = express.Router();
const brandController = require("../controller/brand-controller");

router.route("/").post(brandController.create).get(brandController.list);
router.route("/:make").get(brandController.get);
router.route("/:model").delete(brandController.delete).put(brandController.update);

module.exports = router;
