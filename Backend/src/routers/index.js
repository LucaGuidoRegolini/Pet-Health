const router = require("express").Router();

const clientRouter = require("./client.router");

router.use("/client", clientRouter);

module.exports = router;
