const express = require("express");
const app = express();
const cors = require("cors");
const showRoute = require("./middlewares/showRoutes");
const PORT = process.env.PORT || 3006;
const whiteList = require("./middlewares/WhiteListOrigins");
const { connectDatabase } = require("./middlewares/connection");
const path = require("path");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../dist")));
let corsOptions = {
  origin: async function (origin, callback) {
    console.log(origin);
    if (whiteList.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

//custom middlewares
// app.use(showRoute);

connectDatabase();
//routes

app.use("/user", cors(), require("./routes/user"));

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
