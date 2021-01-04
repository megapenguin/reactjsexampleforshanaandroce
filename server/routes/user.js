const router = require("express").Router();

const User = require("../models/User");

router.get("/", (req, res) => {
  //SELECT * FROM users

  User.findAll()
    .then((response) => {
      //console.log(response);
      res.json(response);
    })
    .catch((error) => console.log(error));
});

//localhost:8080/users/add
router.post("/add", (req, res) => {
  let { firstName, lastName } = req.body;

  User.create({ firstName, lastName })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

router.delete("/delete", (req, res) => {
  let { id } = req.query;

  User.destroy({ where: { id } })
    .then((response) => {
      //response
      res.json({ success: true, msg: "Succefully deleted user" });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
