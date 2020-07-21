console.log("in shop.js")
async function fetchproducts(done) {
    await $.get('/api/products', function (data) {
        done(data)
    })
}

async function fetchproductsById(id, done) {
    await $.get(`/api/products/${id}`, function (data) {
        done(data)
    })
}



function addproducts(name, manu, price, productimage, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manu,
        price: price,
        file: productimage
    }, function (data) {
        done(data)
    })

}

async function addproductstocart(name, manu, price, productimage, done) {
    await $.post('/api/cart', {
        name: name,
        manufacturer: manu,
        price: price,
        productimage: productimage
    }, function (data) {
        done(data)
    })

}

async function fetchproductsfromcart(id, done) {
    await $.get(`/api/cart`, function (data) {
        done(data)
    })
}

// function createproductcard(product) {
//     console.log(" in shop.js " + product.productimage)
//     return $(`
//     <div class=" card col-4 " style="width: 18rem;">
//     <img src="./uploads/${product.productimage}" width="50" height="200" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h4 class="card-title">${product.name}</h5>
//             <h6 class="card-title">${product.manufacturer}</h4>
//             <h6 class="card-title">${product.price}</h4>
//             <button type="submit" class="btn btn-primary m-3" id="${product.id}">Buy</button>
//         </div>
//     </div>`)

// }


function createproductcard2(product) {
    console.log(" in shop.js " + product.productimage)
    return $(`
    <div class="productcard">
        <div>
            <h2 class="cardtaghead">T-Store</h2>
            <h2 class="cardtagsubhead">A Unisex Store</h2>
            <h2 class="cardname">${product.name}</h2>
            <button class="shopbtn" id="${product.id}">Shop Now</button>
        </div>
        <img src="./uploads/${product.productimage}" class="productimage" alt="Product Image">
        <div class="cardcircle1"></div>
        <div class="cardcircle2"></div>
    </div>
`)

}
