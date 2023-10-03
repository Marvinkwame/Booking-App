const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} = require("../controllers/userController");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

// router.get("/checkjwt", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get('/checkjwt/:id', verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and can delete your account")
// } )

// router.get('/checkadm/:id', verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and can delete all accounts")
// } )

router.put("/:id", verifyUser, updateUser);

router.delete(":/id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getSingleUser);

router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
