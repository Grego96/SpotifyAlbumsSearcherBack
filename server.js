require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const app = express();
const port = process.env.APP_PORT || 8000;
const dbInitalSetup = require("./dbInitialSetup");
const cors = require("cors");

app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

dbInitalSetup();

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
