const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async(req, res) => {
  try {
    const usersData = await User.findAll();
    if (!usersData) {
      res.status(404).json({message: "No users data found"})
    } else {
      res.status(200).json(usersData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect e-mail or password. Please try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect e-mail or password. Please try again." });
      return;
    } else {

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res
          .status(200)
          .json({ user: userData, message: "You've successfully logged in!" });
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end();
  }
})

module.exports = router;
