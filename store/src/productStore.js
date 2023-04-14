const productsArray = [
    {
        id:1,
        title:"Coffee",
        img:"caffe.jpg",
        price :4.99
    },
    {
        id:2,
        title:"Sunglasses",
        img:"sunglass.jpg",
        price : 9.99
    },
    {
        id:3,
        title:"Carmera",
        img:"camera.jpg",

        price : 11.99
    }
]

function getProductDate(id) {
    let productData = productsArray.find(product => product.id ===id)

    if (productData == undefined){
        console.log("Product data does not exists")
        return undefined;
    }

    return productData;
}

export {productsArray, getProductDate }; 