const { products } = require('../database/models')

async function AddNewProduct(name, price, manufacturer, productimage) {
    const new_product = await products.create({
        name,
        price,
        manufacturer,
        productimage,
        ignoreDuplicates: true
    })


    return new_product
}

async function findAllProducts() {
    const all_product = await products.findAll({
        // include: [Users]                  //We can only do this because of the relation we've provided before
    })
    return all_product
}

async function findById(pid) {
    const One_product = await products.findAll({
        // include: [Users] 
        where: {
            id: pid
        }                 //We can only do this because of the relation we've provided before
    })
    return One_product
}


// test
// async function task() {

//     // console.log(await AddNewProduct('sample-4', 20, 'patanjali'))

//     // const products = await findAllProducts()
//     // for (let p of products) {
//     //     console.log(`${p.id}\n${p.name}\n${p.price}\n${p.manufacturer}\n===============\n `)
//     // }

//     const p = await findById(2)
//     console.log(p)
// }
// task();

module.exports = {
    findAllProducts,
    AddNewProduct,
    findById
}