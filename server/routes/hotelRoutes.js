const express = require('express');
const router = express.Router();
const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels } = require('../controllers/hotelControllers');

router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.get("/:id", getSingleHotel);
router.get("/", getAllHotels)

module.exports = router;