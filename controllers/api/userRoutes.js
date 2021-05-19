const router = require("express").Router();

router.use("/", async (req, res) => {
  res.json({ message: "You hit route: /api/users." });
});

module.exports = router;
