const express = require("express");
const router = express.Router();
const {
  login,
  register,
  addUser,
  searchUser,
  allUsers,
  updateUser,
  searchUserById,
  addTicket,
  getAllTicketDetails,
  getStats,
  addInstaller,
  getAllInstallers,
} = require("./../controllers/UserController");

require("dotenv").config();

router.post("/login", login);

router.post("/register", register);

router.post("/add-user", addUser);

router.post("/search", searchUser);

router.get("/all", allUsers);

router.put("/update", updateUser);

router.get("/search/:id", searchUserById);

router.post("/add-ticket/:id", addTicket);

router.get("/get-ticket-details/:id", getAllTicketDetails);

router.get("/stats", getStats);

router.post("/add-installer", addInstaller);

router.get("/all-installer", getAllInstallers);
module.exports = router;
