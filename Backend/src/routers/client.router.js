const clientRouter = require("express").Router();

clientRouter.get("/", (req, res) => {
  return res.send("Hello word");
});

module.exports = clientRouter;
