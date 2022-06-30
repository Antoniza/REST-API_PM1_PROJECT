const express = require("express");
const router = express.Router();
const {
  selectUsersQuery,
  insertUsersQuery,
  selectUsersUnique,
  deleteUsersUnique,
  updateUsersQuery,
} = require("../controllers/users.controller");

router.get("/", (req, res) => {
  const initTableUsers = {
    Message: "Estas en la tabla de users.",
    Structure: {
      Message: 'La estructura es la siguiente',
      username: "",
      email: "",
      password: "",
      number: ""
    }
  };
  res.json(initTableUsers);
});

router.get("/actionTableUsers/", selectUsersQuery);

router.get("/actionTableUsers/:id", selectUsersUnique);

router.post("/actionTableUsers", insertUsersQuery);

router.delete("/actionTableUsers/:id", deleteUsersUnique);

router.put("/actionTableUsers/:id", updateUsersQuery);

module.exports = router;
