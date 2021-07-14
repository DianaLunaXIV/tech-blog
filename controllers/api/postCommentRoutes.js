const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const commentResults = await Comment.findAll();
      if (!commentResults) {
        res.status(404).json({ message: "No comment data found" });
      } else {
        res.status(200).json(commentResults);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const commentResults = await Comment.findAll(
        { where: {id: req.params.id}}
      );
      if (!commentResults) {
        res.status(404).json({ message: "No comment data found with that ID" });
      } else {
        res.status(200).json(commentResults);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
        const commentResults = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
        });
  
        res.status(200).json(commentResults);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const commentResults = await Comment.update(
        {
          ...req.body,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(200).json(commentResults);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const commentResults = await Comment.destroy(
        {
          where: { id: req.params.id }
        }
      );
  
      if (!commentResults) {
        res.status(404).json({ message :'No comment found with that ID.'})
        return;
      }
  
      res.status(200).json(commentResults)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })


module.exports = router;