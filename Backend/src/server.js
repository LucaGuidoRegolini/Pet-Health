require("dotenv-safe").config();

const app = require("./app");

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => console.log(`🔥 Server started at http://localhost:${port}`));
