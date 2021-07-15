const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postResults = await Post.findAll();
    if (!postResults) {
      res.status(404).json({ message: "No post data found" });
    } else {
      res.status(200).json(postResults);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postResults = await Post.findAll(
      { where: {id: req.params.id}}
    );
    if (!postResults) {
      res.status(404).json({ message: "No post data found with that ID" });
    } else {
      res.status(200).json(postResults);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
      const postResults = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(postResults);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const postResults = await Post.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(postResults);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postResults = await Post.destroy(
      {
        where: { id: req.params.id }
      }
    );

    if (!postResults) {
      res.status(404).json({ message :'No post found with that ID.'})
      return;
    }

    res.status(200).json(postResults)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router;
