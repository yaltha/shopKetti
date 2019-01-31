const mongoose = require("mongoose"),
  Product = mongoose.model("Products");

exports.index = function(req, res) {
   res.send("Welcome to the test API");
};

exports.listAllProducts = function(req, res) {
  Product.find({}, function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.createProduct = function(req, res) {
  const new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.show = function(req, res) {
  Product.findById(req.params.productID, function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.update = function(req, res) {
  Product.findOneAndUpdate(
    { _id: req.params.productID },
    req.body,
    { new: true },
    function(err, product) {
      if (err) res.send(err);
      res.send(product);
    }
  );
};

exports.destroy = function(req, res) {
  Product.remove({ _id: req.params.productID }, function(err, product) {
    if (err) res.send(err);
    res.json({ message: "Product removed!" });
  });
};
