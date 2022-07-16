const ProductRepository = require("./repository/product.repo")
const ProductService = require("./services/product.service")


function main() {
    let productRepo = new ProductRepository();
    let productService = new ProductService(productRepo)
    console.log(productService.findAll())
}
main();