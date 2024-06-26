const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  upload,
} = require("../controllers/userController.js");

router.post("/register", upload.single("profilePicture"), registerUser);
router.get("/users", getUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
