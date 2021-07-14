const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");
const postCommentRoutes = require('./postCommentRoutes')

//api routes go here
router.get("/", async (req, res) => {
  res.json({ message: "You hit route: /api/." });
});

router.use("/users", userRoutes);
router.use("/posts", blogPostRoutes);
router.use("/comments", postCommentRoutes);

module.exports = router;
