var needle = require("needle");
needle.post(
  "https://aqueous-river-95723.herokuapp.com/products",
  {
    name: "Purple Turtle",
    price: 34.54,
    description: "Random test turtle",
    image_url:
      "https://i5.walmartimages.com/asr/e2a3353f-0f0e-4906-ac9b-27bf06272b0c_1.56a755ac76a90df7935ac4b2c8a27140.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
  },
  function(err, resp, body) {
    console.log(body);
  }
);
