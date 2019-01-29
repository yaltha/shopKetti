const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the product"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    default: 0.0
  },
  description: {
    type: String
  },
  category: {
    type: String,
    default: "Plush Toy"
  },
  image_url: {
    type: String,
    default: "http://placehold.it/256x256"
  },
  sku: {
    type: String
  },
  seller_name: {
    type: String,
    default: "ShopKetti"
  }
});

module.exports = mongoose.model("Products", ProductSchema);
