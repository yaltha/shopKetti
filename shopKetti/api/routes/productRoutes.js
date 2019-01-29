module.exports = function(app) {
  const product = require("../controllers/productsController");
  // Product routes
  app.route("/").get(product.index);
  app
    .route("/products")
    .get(product.listAllProducts)
    .post(product.createProduct);
  app
    .route("/products/:productID")
    .get(product.show)
    .put(product.update)
    .delete(product.destroy);
};
