const express = require('express');
const router = express.Router();
const { createHotel, updateHotel, deleteHotel } = require('../controllers/hotelControllers');

router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;