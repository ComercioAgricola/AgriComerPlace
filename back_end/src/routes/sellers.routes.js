const { Router } = require('express');
const router = Router();
const sellersController = require("../controllers/sellers.controller");

router.get("/all",sellersController.getAllSellers);



module.exports = router;