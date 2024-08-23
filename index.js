const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is listening on", PORT);
});
