// coffe : price_1Mx9jIEXYQfbBZFa9YQ6aWIM
// sunglasses : price_1Mx9nYEXYQfbBZFaxzwbXYPs
//camera :price_1Mx9qhEXYQfbBZFaMd2T2Yg2


const productsArray = [
    {
        id:"price_1Mx9jIEXYQfbBZFa9YQ6aWIM",
        title:"Coffee",
        img:"caffe.jpg",
        price :4.99
    },
    {
        id:"price_1Mx9nYEXYQfbBZFaxzwbXYPs",
        title:"Sunglasses",
        img:"sunglass.jpg",
        price : 9.99
    },
    {
        id:"price_1Mx9qhEXYQfbBZFaMd2T2Yg2",
        title:"T-shirt",
        img:"camera.jpg",
        price : 11.99
    },
    {
        id:"White dress",
        title:"Carmera",
        img:"camera.jpg",
        price : 11.99
    },
    {
        id:"dfsfd",
        title:"Black Jeans",
        img:"camera.jpg",
        price : 11.99
    },
    {
        id:"price_1Mx9qhEXYQfbBZFaMd2T2Yg2",
        title:"White Shirt",
        img:"camera.jpg",
        price : 11.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id ===id)

    if (productData === undefined){
        console.log("Product data does not exists")
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData }; 