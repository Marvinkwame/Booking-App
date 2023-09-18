const express = require('express');
const router = express.Router();
const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels } = require('../controllers/hotelControllers');
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.post('/', verifyAdmin, createHotel);
router.put('/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get("/:id", getSingleHotel);
router.get("/", getAllHotels)

module.exports = router;