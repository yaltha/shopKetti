const express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require("mongoose"),
  Product = require("./api/models/productModel"), // Load in product model
  bodyParser = require("body-parser");

// mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/StockkTest",
  { useNewUrlParser: true }
);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/productRoutes"); // import routes
routes(app);

app.use(function(req, res, next) {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Handle 404
  res.status(404).send({ url: req.originalUrl + " not found" });
  next();
});

app.listen(port);

console.log("Stockk Product Test API Server started on: " + port);
