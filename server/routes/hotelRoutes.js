const express = require('express');
const router = express.Router();
const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels, countByCity, countByType } = require('../controllers/hotelControllers');
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.post('/', verifyAdmin, createHotel);
router.patch('/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get("/find/:id", getSingleHotel);
router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

module.exports = router;