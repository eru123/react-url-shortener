require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const prisma = re
// import prisma from "./src/middlewares/prisma";
// import jwt from "./src/middlewares/jwt";
// import routes from "./src/routes/index";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(prisma);
// app.use(
//   jwt({
//     secret_key: process.env.JWT_SECRET,
//     refresh_key: process.env.JWT_REFRESH,
//     algorithms: ["HS256"],
//     sign: {
//       expiresIn: "10s",
//     },
//     refresh: {
//       expiresIn: "1h",
//     },
//   })
// );

app.get("*", (req, res) => {
  return res.send([req.path]);
});

// app.listen(port, () => {
//   console.log("Server started on port 5000");
// });


module.exports = app;