const express = require("express");
const router = express.Router();
const { createRoom, updateRoom, deleteRoom } = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");

router.post("/:hotelid", verifyAdmin, createRoom);

router.post("/:id", verifyAdmin, updateRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);



module.exports = router;
