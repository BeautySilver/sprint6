const express = require("express");

const app = express();
const productRouter=express.Router();
 
productRouter.use("/create",function (request, response) {
  response.send("Add product");
});
productRouter.use("/:id",function (request, response) {
  response.send(`product ${request.params.id}`);
});
productRouter.use("/",function (request, response) {
  response.send("products list");
});
 
app.use("/products", productRouter);
 
app.use("/about", function (request, response) {
  response.send("About");
});
 
app.use("/", function (request, response) {
  response.send("Main page");
});
app.listen(3000);