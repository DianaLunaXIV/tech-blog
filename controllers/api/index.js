const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");

//api routes go here
router.get("/", async (req, res) => {
  res.json({ message: "You hit route: /api/." });
});

router.use("/users", userRoutes);
router.use("/posts", blogPostRoutes);

module.exports = router;
