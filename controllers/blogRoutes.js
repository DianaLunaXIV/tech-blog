const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("You hit the root route. Sick!");
});

module.exports = router;
