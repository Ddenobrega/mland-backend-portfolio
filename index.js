require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();
const path = require("path");
const root = path.join(__dirname, "../mland/dist/");
const index = require("./routes/quotes");
const utils = require("./routes/utilities");
const db = require("./db/models/quote");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
let socketIO = require("socket.io");
let io = socketIO(server);
const rateLimits = require("./rates");

//Rate Limits
app.use("/quote", rateLimits.quoteRate);
app.use("/quote", rateLimits.quoteRate15min);

//Root Dir
app.use(express.static(root));

//Cookie Data
app.use(cookieParser(toString(process.env.COOKIE_KEY)));
app.use(
  session({
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    secret: "Mland",
  })
);

// Routes
app.use("/quote", index);
app.use("/utilities", utils);

// Main Get Requests
app.get("*", (req, res) => res.sendFile("index.html", { root }));

//Sever Instance
server.listen(port, () => {
  console.log(`Backend Running on port ${port}`);
});
