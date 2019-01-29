# ShopKetti Test API Server

The following is simple documentation to help you get started with the Front-end test. You will be building the front-end to a very simple api. We will be building a page that will list products in a database, add them, update, and remove. The source code for this server is publically available for you to look through if you'd like to get deeper into it. Git URL: https://bitbucket.org/earlbalai/simpleapiserver/

Test Server URL: https://aqueous-river-95723.herokuapp.com/

# API Routes

The following routes have been added to the server.

- [TEST SERVER URL]/products (GET | POST) - Returns a list of products stored in the database in JSON format.
- [TEST SERVER URL]/products/:productID (GET | PUT | DELETE) - Loads product by ID as well as supports PUT/DELETE requests for updating and removing products. Returns JSON results.

# Product Model

- name: String
- description: String
- price: Number
- sku: String
- image_url: String
- category: String
- seller: String

# Products List (GET)

The /products path will return the data in the following format

```javascript
[
  {
    price: 25,
    category: "Plush Toy",
    image_url: "http://placehold.it/256x256",
    seller_name: "ShopKetti",
    _id: "5c3feea14f55359118e9e06c",
    name: "Silly Penguin",
    description: "This is a test featuring a silly penguin",
    sku: "1337-pengu",
    Created_date: "2019-01-17T02:55:29.028Z",
    __v: 0
  },
  {
    price: 25.34,
    category: "Plush Toy",
    image_url: "http://placehold.it/256x256",
    seller_name: "ShopKetti",
    _id: "5c3feea14f55359118e9e06c",
    name: "Little Bunny",
    description: "This is a test featuring a little bunny",
    sku: "1337-lilbun",
    Created_date: "2019-01-17T02:55:29.028Z",
    __v: 0
  }
];
```

# Products (POST)

Product data will render in the following way

```javascript
{
    "price":25.34,
    "category":"Plush Toy",
    "image_url":"http://placehold.it/256x256",
    "seller_name":"ShopKetti",
    "_id":"5c3feea14f55359118e9e06c",
    "name":"Little Bunny",
    "description":"This is a test featuring a little bunny",
    "sku":"1337-lilbun",
    "Created_date":"2019-01-17T02:55:29.028Z",
    "__v":0
}
```

# Product (GET)

Product data will render in the following way

```javascript
{
    "price":25.34,
    "category":"Plush Toy",
    "image_url":"http://placehold.it/256x256",
    "seller_name":"ShopKetti",
    "_id":"5c3feea14f55359118e9e06c",
    "name":"Little Bunny",
    "description":"This is a test featuring a little bunny",
    "sku":"1337-lilbun",
    "Created_date":"2019-01-17T02:55:29.028Z",
    "__v":0
}
```

# Product (PUT)

Product data will render in the following way

```javascript
{
    "price":25.50,
    "category":"Plush Toy",
    "image_url":"http://placehold.it/256x256",
    "seller_name":"ShopKetti",
    "_id":"5c3feea14f55359118e9e06c",
    "name":"Little Bunny 2", // NEW VALUE
    "description":"This is a test featuring a little bunny",
    "sku":"1337-lilbun",
    "Created_date":"2019-01-17T02:55:29.028Z",
    "__v":0
}
```

# Product (DELETE)

```javascript
{
    "message":"The product has been sucesfully removed!",
}
```
