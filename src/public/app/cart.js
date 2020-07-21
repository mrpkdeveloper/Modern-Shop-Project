function loadcartproducts() {

    $.get(`/api/cart`, (product) => {
        for (let p of product) {
            // console.log(p)
            $('#productlist').append(
                $(`
                <div class="productcard">
                <div>
                    <h2 class="cardtaghead">T-Store</h2>
                    <h2 class="cardtagsubhead">A Unisex Store</h2>
                    <h2 class="cardname">${p.name}</h2>
                    <button class="shopbtn" id="${p.id}">Shop Now</button>
                </div>
                <img src="./uploads/${p.productimage}" class="productimage" alt="Product Image">
                <div class="cardcircle1"></div>
                <div class="cardcircle2"></div>
            </div>
        
        `)
            )


        }
    })
}